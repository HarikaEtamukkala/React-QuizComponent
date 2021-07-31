import React,{Component} from 'react'


class QuizQuestionButton extends Component{
    handleClick =(event)=>{
        console.log("quizbutton",event.target.value)
        this.props.clickHandler(event.target.value)
    }
    render(){
        return(
            <li>
                <button onClick={this.handleClick.bind(this)} value={this.props.button_text}>{this.props.button_text}</button>
            </li>
        )
    }

}

export default QuizQuestionButton