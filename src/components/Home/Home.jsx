import React, { useState } from "react";
import "bulma/css/bulma.min.css";

const Home = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  return (
    <>
      <div className="container is-flex is-justify-content-center mt-6">
        <h1 className="has-text-weight-semibold is-size-2">Hello Navneet</h1>
      </div>

      <div className="container is-flex is-justify-content-center ">
        <div
          className={`dropdown ${
            isDropdownActive ? "is-active" : ""
          } is-flex mt-6 `}
        >
          <div className="dropdown-trigger">
            <button
              className="button  has-background-success"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              onClick={toggleDropdown}
            >
              <span>Start Quizz</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a href="/quizz/golang" className="dropdown-item">
                Golang
              </a>
              <hr className="dropdown-divider" />

              <a href="quizz/python" className="dropdown-item ">
                Python
              </a>
              <hr className="dropdown-divider" />
              <a href="quizz/javascript" className="dropdown-item">
                Javascript
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
