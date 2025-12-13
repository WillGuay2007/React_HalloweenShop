import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [value, setValues] = useState({
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8081/signin", value)
      .then(res => {
        alert(res.data);
        navigate("/");
      })
      .catch(err => {
        console.log(err);
        alert("Email ou mot de passe incorrect");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center mb-3 mt-3">
      <div
        className="rounded d-flex flex-column justify-content-start align-items-center border-dark shadow"
        style={{ height: "400px", width: "20%", backgroundColor: "rgb(247, 247, 247)", overflowY: "auto" }}
      >
        <div style={{ backgroundColor: "lightgrey", width: "100%", height: "50px" }} className="mb-2">
          <h1>Sign in</h1>
        </div>

        <form onSubmit={handleSubmit} className="mb-2">
          <div style={{ width: "200px", height: "50px" }}>
            <input
              type="text"
              name="email"
              className="form-control rounded-end-pill rounded-start-pill"
              placeholder="Email address"
              onChange={handleInput}
            />
          </div>

          <div style={{ width: "200px", height: "50px" }}>
            <input
              type="password"
              name="password"
              className="form-control rounded-end-pill rounded-start-pill"
              placeholder="Password"
              onChange={handleInput}
            />
          </div>

          <div style={{ width: "100%", height: "50px" }} className="d-flex justify-content-center align-items-center">
            <button className="btn btn-danger rounded-end-pill rounded-start-pill w-50 h-75" type="submit">
              Sign in
            </button>
          </div>
        </form>

        <div
          style={{ backgroundColor: "rgb(221, 221, 221)", width: "100%" }}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <span className="flex-fill mt-2">Use another device to log in.</span>

          <div className="d-flex justify-content-center align-items-center flex-wrap gap-2 mb-2">
            <button
              className="btn rounded-start-pill rounded-end-pill text-white"
              type="button"
              style={{ backgroundColor: "rgb(37, 37, 206)" }}
            >
              Facebook
            </button>

            <button
              className="btn rounded-start-pill rounded-end-pill text-white"
              type="button"
              style={{ backgroundColor: "rgb(185, 178, 75)" }}
            >
              Google
            </button>

            <button
              className="btn rounded-start-pill rounded-end-pill text-white"
              type="button"
              style={{ backgroundColor: "rgb(71, 172, 219)" }}
            >
              Twitter
            </button>
          </div>
        </div>

        <div
          className="flex-fill border d-flex flex-column justify-content-center align-items-center py-3"
          style={{ width: "100%" }}
        >
          <span className="flex-fill">Are you a new customer?</span>

          <Link to="/register" className="btn btn-default border w-100 bg-light text-decoration-none">
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
}
