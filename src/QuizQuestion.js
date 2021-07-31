import React,{Component} from 'react'

import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component{

  constructor(props){
    super(props);
    this.state={
      incorrectAnswer:false
    }
  }

  handleClick(buttonText){  
    this.setState({
      incorrectAnswer:!this.state.incorrectAnswer
    })
    if(buttonText===this.props.quiz_question.answer){     
      this.props.showNextQuestionHandler();      
    }
  }
    render(){
      const answers = this.props.quiz_question.answer_options
        return(
        <main>
        <section>
        <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((ans,index)=>{
              return <QuizQuestionButton key={index} button_text={ans} 
               clickHandler={this.handleClick.bind(this)}/>
            })}
              
      
          </ul>
        </section>
        {this.state.incorrectAnswer?
        <p className="error">Sorry, that's not right</p>:
        null}
      </main>
        )
    }
}

export default QuizQuestion