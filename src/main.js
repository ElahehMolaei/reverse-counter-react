import React from 'react';
import ReactDOM from 'react-dom/client';

import Hello from './hello';
import Timer from './timer';
import './style.css';

class Main extends React.Component {
    constructor(){
        super();
        this.state={
            title:"hello dear Elaheh"
        }
        // this.handleSetTitle = this.handleSetTitle.bind(this)
    }
    handleSetTitle=()=>{
        this.setState(
            {title:"به کدیاد خوش آمدید"}
        )
    }
    //اگه تابعت رو به شکل زیر تعریف کردی باید در کانستراکتور بایندش کنی تا کار کنه ولی به دردسرش نمی ارزه با همون ارو فانکشن جلو برو
    // handleSetTitle(){
    //     this.setState(
    //         {title:"به کدیاد خوش آمدید"}
    //     )
    // }
    render() {
        return (
            <div className='main'>
            {/*  برای اینکه بتونم از تایتل که در این فایل تعریف شده در فایل هلو جی اس هم استفاده کنم */}
                <Hello my_title={this.state.title} /> for
                <Timer hanleSetTitle_me={this.handleSetTitle} />
            </div>
        )
    }
}

export default Main