import React from "react";
import "./Register.css";

const Register = (props) => {
  let btnText, passBoxType;
  if (props.showPass === true) {
    btnText = "Hide Password";
    passBoxType = "text";
  } else {
    btnText = "Show Password";
    passBoxType = "password";
  }
  return (
    <div className="register-container">
      <div className="container">
        <form onSubmit={props.submit}>
          <h1>Registration Form</h1>
          <div className="id">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" required className="form-control" />
          </div>
          <div className="id">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              required
              className="form-control"
            />
          </div>
          <div className="id">
            <label htmlFor="password" id="pass">
              Password:
            </label>
            <input
              type={passBoxType}
              name="password"
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn1">
            Register
          </button>
          <buton type="button" className="btn2" onClick={props.click}>
            {btnText}
          </buton>
        </form>
      </div>
    </div>
  );
};

export default Register;
