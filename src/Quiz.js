import React,{Component} from 'react'

import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json')

class Quiz extends Component{

    constructor(props){
        super(props);
        this.state={
            quiz_position:1
        }
    }

    render(){       
        const quizQuestions=quizData['quiz_questions'];
        const isQuizEnd = ((this.state.quiz_position-1) === quizQuestions.length)        
        return(
            <div>
                {isQuizEnd ? <QuizEnd/>:<QuizQuestion quiz_question={quizQuestions[this.state.quiz_position -1 ]}/>}
               
            </div>
        )
    }
}

export default Quiz 