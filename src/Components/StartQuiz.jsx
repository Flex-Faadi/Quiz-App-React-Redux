import React from "react";
import { useHistory } from "react-router-dom";

function StartQuiz() {
  let history = useHistory();

  let gotoQuiz = () => {
    if (sessionStorage.getItem("username")) {
      history.push("/quiz");
    } else {
      alert("Please Enter A Valid Username");
    }
  };
  let getUserName = (e) => {
    let username = e.target.value;
    sessionStorage.setItem("username", username);
  };
  return (
    <div className="wrapper App-header">
      <div className="startingDiv my-2">
        <div className="welcomeText">
          <form className="welcomeForm" name="welcomeForm">
            <input
              autoComplete="off"
              type="text"
              placeholder="Please Enter Your Name Here!"
              name="username"
              onChange={getUserName}
            />
            <ul>
              <li>You have 5 minutes to complete </li>
              <li>Once You Start The quiz it must be complete</li>
              <li>Don't Get back, stick on the page and complete your Quiz</li>
              <li>once you click on next you can't change the answer</li>
            </ul>
            <button
              type="submit"
              onClick={gotoQuiz}
              className="btn bg-info text-light"
            >
              START QUIZ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StartQuiz;
