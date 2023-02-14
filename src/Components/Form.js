import React, { Fragment, useEffect, useState } from "react";
import "./form.css";
import eye from "../assets/ic_hide_password.svg";
import axios from "../axiosConfig/axios";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useNavigate } from "react-router-dom";
const Form = (props) => {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState(null);
  const [showA, setShowA] = useState(true);
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  let changeHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  let submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      let { data } = await axios.post("/login", userDetails);

      setError(null);
      setLoading(false);
      props.setUser(data.user);
      navigate("/profile");
    } catch (err) {
      setLoading(false);
      setShowA(true);
      setError(err.response.data.messsage);
    }
  };
  const toggleShowA = () => setShowA(!showA);
  return (
    <Fragment>
      {error ? (
        <ToastContainer className="m-4" position="top-end">
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <strong className="me-auto">Failed !</strong>
            </Toast.Header>
            <Toast.Body>{error}</Toast.Body>
          </Toast>
        </ToastContainer>
      ) : null}

      <div className="form-wrapper">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              onChange={changeHandler}
              type="text"
              className="form-control py-2 "
              placeholder="Username"
              name="username"
            />
          </div>
          <div className="form-group d-flex password">
            <input
              onChange={changeHandler}
              type={toggle ? "text" : "password"}
              className="form-control mt-3 py-2"
              placeholder="Password"
              name="password"
            />
            <img
              onClick={() => {
                setToggle(!toggle);
              }}
              src={eye}
            ></img>
          </div>
          {loading ? (
            <div className="d-flex justify-content-center mt-4">
              <div className="spinner-border" role="status"></div>
            </div>
          ) : (
            <button type="submit" className="btn btn-primary w-100 p-2 mt-4">
              Sign In
            </button>
          )}
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
