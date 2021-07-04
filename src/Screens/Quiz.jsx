import React from 'react'
import AppBar from '../Components/appbar'
import QuizApp from '../Components/quiz'
import Footer from '../Components/Footer'
function Quiz() {
    return (
        <div>
            <AppBar PageTitle="The Quiz Application"/>
            <QuizApp/>
            <Footer/>
        </div>
    )
}

export default Quiz
