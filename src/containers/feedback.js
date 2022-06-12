import React from 'react';
import FeedbackComponent from '../components/feedback';
import { questionData1 } from '../data';

function Feedback() {
    if (!localStorage.getItem('questionData')) localStorage.setItem('questionData', JSON.stringify(questionData1));
    if (!localStorage.getItem('currentQuestion')) localStorage.setItem('currentQuestion', 1);
    
    const data = JSON.parse(localStorage.getItem('questionData'));
    
    return(
        <FeedbackComponent 
            data={data} 
            currentQuestion={localStorage.getItem('currentQuestion')} 
        />
    )
}

export default Feedback;