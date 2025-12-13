import { Link, useNavigate } from "react-router-dom";
import InputField from "../Components/InputField";
import { useState } from "react";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [value, setValues] = useState({
    email: "",
    password: "",
    C_Password: ""
  });

  const handleInput = (e) => {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.password !== value.C_Password) {
      alert("Passwords do not match");
      return;
    }

    axios.post("http://localhost:8081/signup", {
      email: value.email,
      password: value.password
    })
    .then(res => {
      console.log(res.data);
      navigate("/");
    })
    .catch(err => {
      console.log(err);
      alert("Erreur lors du signup");
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3 mb-3" style={{ backgroundColor: "#f2f2f2" }}>
      <div className="bg-white p-4 rounded shadow mt-3 mb-3" style={{ width: "500px" }}>
        <h2>Register</h2>

        <form onSubmit={handleSubmit} className="mb-2">
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Email address"
            handleChange={handleInput}
          />

          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter password"
            handleChange={handleInput}
          />

          <InputField
            label="Confirm Password"
            type="password"
            name="C_Password"
            placeholder="Confirm password"
            handleChange={handleInput}
          />

          <button className="btn btn-success w-100">Submit</button>
        </form>

        <p className="text-center">Already have an account?</p>
        <Link to="/login" className="btn btn-default border w-100 bg-light text-decoration-none">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
