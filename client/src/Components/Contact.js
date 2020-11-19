import React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/Contact.scss";

const Contact = () => {
  const [values, setValues] = useState({
    name: null,
    email: null,
    message: null,
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/api`, values)
      .then((res) => {
        window.alert(
          `Thank you for the message, I'll respond as soon as possible.`
        );
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        window.alert(
          "There was an error handling your message, please try again"
        );
      });
  };

  return (
    <div name="contact" className="contact-container">
      <p>Contact Me</p>
      <div className="inputs">
        <input
          className="one"
          placeholder="Enter your name"
          value={values.name}
          onChange={handleChange("name")}
        />
        <input
          className="one"
          placeholder="Enter your Email"
          value={values.email}
          onChange={handleChange("email")}
        />
        <input
          className="one"
          placeholder="Enter your message"
          value={values.message}
          onChange={handleChange("message")}
        />
      </div>
      <div>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
