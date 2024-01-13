import React from 'react';
import ReactDOM from 'react-dom/client';

class Hello extends React.Component {
    render(){
        // پراپس میشه همون مقادیری که از کامپوننت های دیگه به اینجا ارسال شده 
        // console.log(this.props)
        return(
            <h1>
                {this.props.my_title}
            </h1>
        )
    }
}

export default Hello