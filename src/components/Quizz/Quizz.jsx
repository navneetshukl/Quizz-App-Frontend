import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Quizz = () => {
  let { id } = useParams();

  let [index, setIndex] = useState(0);
  let [questions, setQuestions] = useState([]);
  let [start, setStart] = useState(false);
  let [selectedOption, setSelectedOption] = useState(null);
  let [array, setArray] = useState([]);
  let [answer, setAnswer] = useState(0);
  let [submitted, setSubmitted] = useState(false);

  //! getQuestions function fetch all the questions from backend server
  const getQuestions = async () => {
    const response = await fetch(`http://localhost:8080/quizz/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();

    setQuestions(data);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  //! startTest function will start the test
  const startTest = (e) => {
    setStart(true);
  };

  let n = questions.length;

  //! IncrementIndex function will increment the index for next question
  const IncrementIndex = () => {
    if (index < n - 1) {
      setIndex(index + 1);
      setSelectedOption(array[index + 1]);
    } else {
      return;
    }
  };

  //! DecreaseIndex function will decrement the index for previous question
  const DecreaseIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
      setSelectedOption(array[index - 1]);
    } else {
      return;
    }
  };

  //! getAnswer function will compare the correct option and selected option
  const getAnswer = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue === selectedOption ? null : selectedValue);

    console.log("Selected Value is :", selectedValue);

    console.log("Correct Answer is ", questions[index].correct_option);
    if (selectedValue === questions[index].correct_option) {
      setAnswer(answer + 1);
    }
    setArray([...array, selectedValue]);
  };

  //! totalPoint function will call when submit button is pressed for total point
  const totalPoint = () => {
    console.log("Total point is ", answer);
    let ans = answer;
    setArray([]);
    setSubmitted(true);
  };

  const goToHome = () => {
    setSubmitted(false);
  };

  return (
    <>
      {!start ? (
        <div
          className="container is-flex is-justify-content-center is-align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <button className="button is-success is-large" onClick={startTest}>
            Start Test
          </button>
        </div>
      ) : (
        <>
          {submitted ? (
            <>
              <div
                className="container is-flex is-justify-content-center is-align-items-center"
                style={{ minHeight: "calc(100vh - 300px)" }}
              >
                <h1 className="title is-1" style={{ marginBottom: "1px" }}>
                  {answer} / {n}
                </h1>
              </div>
              <div className="container is-flex is-justify-content-center is-align-items-center">
                <Link to={"/quizz"}>
                  <button
                    className="button is-danger is-large"
                    style={{ marginTop: "1px" }}
                    onClick={goToHome}
                  >
                    Back
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <div className="container" style={{ minHeight: "100vh" }}>
              <div className="columns is-centered">
                <div
                  className="column is-half "
                  style={{
                    width: "800px",
                    height: "500px",
                    margin: "40px",
                    padding: "2px auto",
                    marginBottom: "2px",
                    overflowY: "auto",
                    backgroundColor: "#f1faee",
                  }}
                >
                  <div className="mt-5 mx-5">
                    <h2 className="title is-4 mb-4">Question:{index + 1}</h2>
                    <p className="title is-size-4 mb-4">
                      {questions[index].question}
                    </p>{" "}
                    <div className="mt-5"></div>
                    <div
                      className="field mb-5"
                      style={{ marginBottom: "20px" }}
                    >
                      <input
                        id="option1"
                        type="checkbox"
                        className="checkbox"
                        onChange={getAnswer}
                        value={"option1"}
                        checked={selectedOption === "option1"}
                        disabled={!!selectedOption}
                      />
                      <label htmlFor="option1" className="ml-2 is-size-5">
                        {questions[index].option1}
                      </label>
                    </div>
                    <div
                      className="field mb-5"
                      style={{ marginBottom: "20px" }}
                    >
                      <input
                        id="option2"
                        type="checkbox"
                        className="checkbox"
                        onChange={getAnswer}
                        value={"option2"}
                        checked={selectedOption === "option2"}
                        disabled={!!selectedOption}
                      />
                      <label htmlFor="option2" className="ml-2 is-size-5">
                        {questions[index].option2}
                      </label>
                    </div>
                    <div
                      className="field mb-5"
                      style={{ marginBottom: "20px" }}
                    >
                      <input
                        id="option3"
                        type="checkbox"
                        className="checkbox"
                        onChange={getAnswer}
                        value={"option3"}
                        checked={selectedOption === "option3"}
                        disabled={!!selectedOption}
                      />
                      <label htmlFor="option3" className="ml-2 is-size-5">
                        {questions[index].option3}
                      </label>
                    </div>
                    <div
                      className="field mb-5"
                      style={{ marginBottom: "20px" }}
                    >
                      <input
                        id="option4"
                        type="checkbox"
                        className="checkbox"
                        onChange={getAnswer}
                        value={"option4"}
                        checked={selectedOption === "option4"}
                        disabled={!!selectedOption}
                      />
                      <label htmlFor="option4" className="ml-2 is-size-5">
                        {questions[index].option4}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns is-centered mt-1">
                <div className="column is-half ">
                  <div className="buttons is-centered ">
                    <button
                      className="button is-warning is-medium mx-5"
                      onClick={DecreaseIndex}
                    >
                      Back
                    </button>
                    <button
                      className="button is-danger is-medium mx-5"
                      onClick={totalPoint}
                    >
                      Submit
                    </button>
                    <button
                      className="button is-primary is-medium mx-5"
                      onClick={IncrementIndex}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Quizz;
