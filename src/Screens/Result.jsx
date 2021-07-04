import React from "react";
import AppBar from "../Components/appbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Result() {
  let TotalScore = sessionStorage.getItem("NoOfQuestions") * 10;
  let EarnedScore = sessionStorage.getItem("QuizScore");
  let username_2 = sessionStorage.getItem("username");

  const state = useSelector((state) => state);
  const userName = state.username;
  console.log(userName);
  return (
    <>
      <div className="Results">
        <AppBar PageTitle="RESULT" />
        <div id="content">
          <h1>
            {" "}
            {EarnedScore >= TotalScore / 2
              ? `🔥 CONGRATULATIONS ${username_2.toUpperCase()}`
              : "😔 YOU ARE FAILED, BETTER LUCK NEXT TIME"}
          </h1>
          <h2>
            <em>
              Your Score is {EarnedScore} out of {TotalScore}
            </em>
          </h2>
          <br />
          <Link to="/">Retake Quiz ?</Link>
        </div>
      </div>
    </>
  );
}

export default Result;
