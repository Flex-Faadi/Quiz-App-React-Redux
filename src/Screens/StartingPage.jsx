import React from 'react'
import AppBar from '../Components/appbar'
import StartQuiz from '../Components/StartQuiz'
import Footer from '../Components/Footer'

function StartingPage() {

    sessionStorage.clear();

    return (
        <div>
            <AppBar PageTitle="Wellcome To Quiz App"/>
            <StartQuiz/>
            <Footer/>
        </div>
    )
}

export default StartingPage

