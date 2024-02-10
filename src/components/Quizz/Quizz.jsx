import React, { useState } from "react";

const Quizz = () => {
  let [idx, setIdx] = useState(0);

  const IncreaseIndex = () => {
    setIdx(idx + 1);
  };

  const DecreaseIndex = () => {
    if (idx <= 1) return;
    setIdx(idx - 1);
  };

  return (
    <div className="container">
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
            <h2 className="title is-4 mb-4">Question:{idx}</h2>
            <p className="title is-size-4 mb-4">
              This is a fixed question area.
            </p>{" "}
            <div className="mt-5"></div>
            <div className="field mb-5" style={{ marginBottom: "20px" }}>
              {" "}
              <input id="option1" type="checkbox" className="checkbox" />
              <label htmlFor="option1" className="ml-2 is-size-5">
                Option {idx}
              </label>
            </div>
            <div className="field mb-5" style={{ marginBottom: "20px" }}>
              {" "}
              <input id="option2" type="checkbox" className="checkbox" />
              <label htmlFor="option2" className="ml-2 is-size-5">
                Option {idx}
              </label>
            </div>
            <div className="field mb-5" style={{ marginBottom: "20px" }}>
              {" "}
              <input id="option3" type="checkbox" className="checkbox" />
              <label htmlFor="option3" className="ml-2 is-size-5">
                Option {idx}
              </label>
            </div>
            <div className="field mb-5" style={{ marginBottom: "20px" }}>
              {" "}
              <input id="option4" type="checkbox" className="checkbox" />
              <label htmlFor="option4" className="ml-2 is-size-5">
                Option {idx}
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
            <button className="button is-danger is-medium mx-5">Submit</button>
            <button
              className="button is-primary is-medium mx-5"
              onClick={IncreaseIndex}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizz;
