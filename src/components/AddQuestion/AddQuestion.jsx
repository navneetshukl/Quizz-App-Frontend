import React, { useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

import "bulma/css/bulma.min.css";

function AddQuestion() {
  let [question, setQuestion] = useState("");
  let [option1, setOption1] = useState("");
  let [option2, setOption2] = useState("");
  let [option3, setOption3] = useState("");
  let [option4, setOption4] = useState("");
  let [correctOption, setCorrectOption] = useState("");
  let [category, setCategory] = useState("");
  let [error, setError] = useState(false);

  const formSubmit = async (event) => {
    event.preventDefault();

    if (
      correctOption.length === 0 ||
      category.length === 0 ||
      question.length === 0 ||
      option1.length === 0 ||
      option2.length === 0 ||
      option3.length === 0 ||
      option4.length === 0
    ) {
      setError(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
      });
      return;
    }
    const response = await fetch("http://localhost:8080/add/question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category,
        question: question,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        correct_option: correctOption,
      }),
      credentials: "include",
    });
    console.log(await response.json());
    if (response.ok) {
      setCategory("");
      setCorrectOption("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
      setQuestion("");
      setError(false);
    } else {
      console.log("Some error occured");
    }
  };

  return (
    <div className="container">
      <form onSubmit={formSubmit}>
        <div className="field">
          <label className="label">Question</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter Question"
              name="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Option-1</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter option-1"
              name="option1"
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Option-2</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter option-2"
              name="option2"
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Option-3</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter option-3"
              name="option3"
              value={option3}
              onChange={(e) => setOption3(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Option-4</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter option-4"
              name="option4"
              value={option4}
              onChange={(e) => setOption4(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Correct Option</label>
          <div className="control">
            <div className="select">
              <select
                value={correctOption}
                onChange={(e) => setCorrectOption(e.target.value)}
              >
                <option value="">select option</option>
                <option value="option1">Option-1</option>
                <option value="option2">Option-2</option>
                <option value="option3">Option-3</option>
                <option value="option4">Option-4</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Category</label>
          <div className="control">
            <div className="select">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">select category</option>
                <option value="Golang">Golang</option>
                <option value="Javascript">Javascript</option>
                <option value="Python">Python</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddQuestion;
