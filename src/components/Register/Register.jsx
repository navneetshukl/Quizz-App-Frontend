import React from "react";

const Register = () => {
  return (
      <div className="container">
          <h1 className="title is-size-3 has-text-centered mt-5">Register</h1>
      <div className="columns is-centered mt-5">
        <div className="column is-half">
          <form>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  required
                />
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
      </div>
    </div>
  );
};

export default Register;
