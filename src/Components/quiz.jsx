import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Timer from "./Timer";
function Quiz() {
  const [questionCount, SetQuestionCount] = useState(0);
  const [SelectedValue, SetSelectedValue] = useState("");
  const [QuizScore, SetQuizScore] = useState(0);
  const [loader, setLoader] = useState(true);
  //Getting data from Redux
  const state = useSelector((state) => state);
  const questions = state.api;

  //Getting NoOfQuestions from Session-Storage
  sessionStorage.setItem("NoOfQuestions", questions.length);
  sessionStorage.setItem("QuizScore", QuizScore);
  //function to update quiz question
  let history = useHistory();

  let next = () => {
    if (SelectedValue === questions[questionCount].answer) {
      SetQuizScore(QuizScore + 10);
    }

    if (questionCount === questions.length -1) { 
      SetQuizScore(QuizScore + 10);
      setTimeout(() => {
        history.push("/results");
      }, QuizScore);
    } else {
      SetQuestionCount(questionCount + 1);
    }
  };
  setTimeout(() => {
    setLoader(false);
  }, 1000);
  return (
    <>
      {loader ? (
        <Loader value={true} />
      ) : (
        <div className="container main-div my-5 heightOfQuizDiv">
          <div id="innerDiv" className="inner-div">
            <Timer />
            <ul className="list-group ">
              <li className="list-group-item list-group-item-dark">
                <div className="d-flex justify-content-between">
                  <h3 id="question">
                    {
                     questions[questionCount].question
                    }
                  </h3>
                </div>
              </li>
              {questions[questionCount].options.map((option, index) => {
                return (
                  <li className="list-group-item pl-3" key={index}>
                    <input
                      type="radio"
                      id={index}
                      name="option"
                      onClick={() => SetSelectedValue(option)}
                      key={index}
                      className="options mr-3"
                    />
                    <label htmlFor={index}>{option}</label>
                  </li>
                );
              })}
            </ul>
            <div className="d-grid gap-2 col-12 mx-auto my-3">
              <button
                id="submit"
                className="btn btn-primary px-5"
                type="button"
                onClick={next}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Quiz;
