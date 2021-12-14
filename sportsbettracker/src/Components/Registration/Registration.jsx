import React from "react";
import axios from "axios";
import "./Registration.css";

export default function Registration() {
  const handleSubmitClick = (event) => {
    event.preventDefault();
    console.log("inside handle submit");
    updateData();
    window.location = "/";
  };

  const updateData = async () => {
    console.log("hi");
    let _firstName = document.getElementById("firstname").value;
    let _middleName = document.getElementById("middlename").value;
    let _lastName = document.getElementById("lastname").value;
    let _username = document.getElementById("username").value;
    let _password = document.getElementById("password").value;
    let _email = document.getElementById("email").value;

    let payload = {
      username: _username,
      password: _password,
      email: _email,
      first_name: _firstName,
      last_name: _lastName,
      middle_name: _middleName,
    };
    try {
      let res = await axios.post(
        "http://127.0.0.1:8000/api/auth/register/",
        payload
      );
      debugger;
      console.log("Results: ", res);
      return res.data;
    } catch (err) {
      console.log("Error with API register call", err);
    }
  };

  return (
    <div className="registration">
      <h1 className="Head">Register</h1>
      <form>
        <input
          type="text"
          className="fn"
          id="firstname"
          placeholder="Enter your first name"
        />
        <input
          type="text"
          className="mn"
          id="middlename"
          placeholder="Enter your middle name"
        />
        <input
          type="text"
          className="ln"
          id="lastname"
          placeholder="Enter your last name"
        />
        <input
          type="text"
          className="un"
          id="username"
          placeholder="Enter your username"
        />
        <input
          type="text"
          className="pw"
          id="password"
          placeholder="Enter your password"
        />
        <input
          type="text"
          className="em"
          id="email"
          placeholder="Enter your email"
        />

        <button type="submit" className="btn" onClick={handleSubmitClick}>
          {" "}
          Register
        </button>
      </form>
    </div>
  );
}
