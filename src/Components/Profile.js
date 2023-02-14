import React, { Fragment, useEffect, useState } from "react";
import "./welcome.css";
import icUser from "../assets/ic_user.svg";
import { useNavigate } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
const Profile = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [showA, setShowA] = useState(true);
  useEffect(() => {
    if (props.user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    if (!showA) {
      navigate("/");
    }
  }, [props.user, showA]);

  return (
    <div className="wrapper-welcome d-flex flex-column align-items-center">
      {isLoggedIn ? null : (
        <ToastContainer className="m-4" position="top-end">
          <Toast
            show={showA}
            onClose={() => {
              setShowA(!showA);
            }}
          >
            <Toast.Header>
              <strong className="me-auto">Log In Again</strong>
            </Toast.Header>
            <Toast.Body>Your session expired ! </Toast.Body>
          </Toast>
        </ToastContainer>
      )}
      <div className="profile d-flex align-items-center justify-content-center">
        <img src={icUser}></img>
      </div>
      <div className="text text-center mt-4 mb-3">
        <h1 className="">
          {props.user ? `Welcome! ${props.user.username}` : null}
        </h1>
      </div>
    </div>
  );
};

export default Profile;
