import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

var interval
class Timer extends React.Component {
    // هرگاه استیت ها رو تغییر بدیم صفحه رندر مجدد میشه 
    //هر مقداری رو که در صفحه می خوای به صورت داینامیک نمایش بدی از استیت ها استفاده میکنی
    //استیت ها آبجکت هستند
    //اولین فامنکشنی که در رندر یک کامپوننت اجرا میشه اون سازنده ش هست و بعد از اون فانکشن رندر
    constructor() {
        //تولید عدد رندم صحیح بین 1 تا 100
        super();
        let min = 1;
        let max = 100;
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        this.state = {
            time: randomNumber
        }
    }
    //این تابع میاد یه کاریو برای اولین بار وقتی کامپوننت ساخته شد انجام بده
    componentDidMount() {
        // console.log("componentDidMount");
        interval = setInterval(() => {
            this.setState({
                time: this.state.time - 1
            })
        }, 1000)
    }

    //همیشه بعد از رندر صدا زده میشه:
    componentDidUpdate() {
        // console.log("componentDidUpdate");

        if (this.state.time === 0) {
            clearInterval(interval)
        }
    }
    //هروقت این کامپوننت بسته شد چیکار کنیم ؟ اینکارو با این تابع می کنیم:
    componentWillUnmount() {

    }
    render() {
        console.log("render");
        return (
            <h2 className='timer'>
                it is {this.state.time}
            </h2>
        )
    }
}


export default Timer