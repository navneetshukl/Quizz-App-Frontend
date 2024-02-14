import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Quizz = () => {
  let { id } = useParams();

  let [index, setIndex] = useState(0);
  let [questions, setQuestions] = useState([]);
  let [start, setStart] = useState(false);

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

  const startTest = (e) => {
    setStart(true);
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
                <h2 className="title is-4 mb-4">Question:</h2>
                <p className="title is-size-4 mb-4">
                  This is question section? {questions.length}
                </p>{" "}
                <div className="mt-5"></div>
                <div className="field mb-5" style={{ marginBottom: "20px" }}>
                  {" "}
                  <input id="option1" type="checkbox" className="checkbox" />
                  <label htmlFor="option1" className="ml-2 is-size-5">
                    Option
                  </label>
                </div>
                <div className="field mb-5" style={{ marginBottom: "20px" }}>
                  {" "}
                  <input id="option2" type="checkbox" className="checkbox" />
                  <label htmlFor="option2" className="ml-2 is-size-5">
                    Option
                  </label>
                </div>
                <div className="field mb-5" style={{ marginBottom: "20px" }}>
                  {" "}
                  <input id="option3" type="checkbox" className="checkbox" />
                  <label htmlFor="option3" className="ml-2 is-size-5">
                    Option
                  </label>
                </div>
                <div className="field mb-5" style={{ marginBottom: "20px" }}>
                  {" "}
                  <input id="option4" type="checkbox" className="checkbox" />
                  <label htmlFor="option4" className="ml-2 is-size-5">
                    Option
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-centered mt-1">
            <div className="column is-half ">
              <div className="buttons is-centered ">
                <button className="button is-warning is-medium mx-5">
                  Back
                </button>
                <button className="button is-danger is-medium mx-5">
                  Submit
                </button>
                <button className="button is-primary is-medium mx-5">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );

};

export default Quizz;
