import React from "react";

const Quizz = () => {
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
            backgroundColor: "#f1faee", // to enable scrolling if content overflows
          }}
        >
          <div className="mt-5 mx-5">
            <h2 className="title is-4 mb-4">Question:</h2>
            <p className="title is-size-4 mb-4">
              This is a fixed question area.
            </p>{" "}
            {/* Added margin bottom */}
            <div className="mt-5"></div> {/* Added vertical spacing */}
            <div className="field mb-5" style={{ marginBottom: "20px" }}>
              {" "}
              <input id="option1" type="checkbox" className="checkbox" />
              <label htmlFor="option1" className="ml-2 is-size-5">
                Option 1
              </label>
            </div>
            <div className="field mb-5" style={{ marginBottom: "20px" }}>
              {" "}
              <input id="option2" type="checkbox" className="checkbox" />
              <label htmlFor="option2" className="ml-2 is-size-5">
                Option 2
              </label>
            </div>
            <div className="field mb-5" style={{ marginBottom: "20px" }}>
              {" "}
              <input id="option3" type="checkbox" className="checkbox" />
              <label htmlFor="option3" className="ml-2 is-size-5">
                Option 3
              </label>
            </div>
            <div className="field mb-5" style={{ marginBottom: "20px" }}>
              {" "}
              <input id="option4" type="checkbox" className="checkbox" />
              <label htmlFor="option4" className="ml-2 is-size-5">
                Option 4
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-centered mt-1">
        <div className="column is-half ">
          <div className="buttons is-centered ">
            <button className="button is-warning is-medium mx-5">Back</button>
            <button className="button is-danger is-medium mx-5">Submit</button>
            <button className="button is-primary is-medium mx-5">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizz;
