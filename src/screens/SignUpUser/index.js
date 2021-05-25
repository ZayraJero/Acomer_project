import React from "react";
import SignUp from "../../components/UserSignUp";
import HeaArrow from "../../components/HeaArr";
import LoginGoogle from "../../components/GoogleLogin";
import { formSignup } from "../../services/users";

const Signup = () => {
  const handleSubmit = (data) => {
    formSignup(data);
  };
  return (
    <div>
      <HeaArrow />
      <h3
        style={{
          fontFamily: "GothamBold",
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        Regístrate
      </h3>
      <LoginGoogle />
      <SignUp handleSubmit={handleSubmit} />
    </div>
  );
};

export default Signup;
