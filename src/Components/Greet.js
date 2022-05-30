import React from 'react';
import "./Register.css";

const Greet = (props) => {
  return (
   <div className="register-container">
      <div className="container">
        <h3>Dear {props.name}</h3>
        <h3>Thank you for Registration</h3>
        <h3>Verification sent to email id {props.email}</h3>
    </div>
   </div>

  )
}

export default Greet;