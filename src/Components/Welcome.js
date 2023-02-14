import React, { Fragment, useEffect } from "react";
import "./welcome.css";
import icUser from "../assets/ic_user.svg";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
const Welcome = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(props);
    if (props.user) {
      console.log(props.user);
      navigate("/profile");
    }
  }, [props.user]);

  return (
    <Fragment>
      <div className="wrapper-welcome d-flex flex-column align-items-center">
        <div className="profile d-flex align-items-center justify-content-center">
          <img src={icUser}></img>
        </div>
        <div className="text text-center mt-4 mb-3">
          <h1 className="">Welcome!</h1>
          <p>
            Let's connect to your workspace.<br></br>Please enter your
            credentials to continue.
          </p>
        </div>
        <Form user={props.user} setUser={props.setUser} />
      </div>
    </Fragment>
  );
};

export default Welcome;
