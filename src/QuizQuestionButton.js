import React,{Component} from 'react'


class QuizQuestionButton extends Component{
    handleClick (){        
        this.props.clickHandler(his.props.button_text)
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