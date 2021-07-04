import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/quiz.css';
import AppBar from './Screens/StartingPage'
import Result from './Screens/Result'
import Quiz from './Screens/Quiz'
function App() {
  return (
    <div >
       <Router>
            <Switch>
                <Route exact path="/" component={AppBar}/>
                <Route exact path="/quiz" component={Quiz}/>
                <Route exact path="/results" component={Result}/>
            </Switch>
        </Router>
    </div>
  )
}

export default App
