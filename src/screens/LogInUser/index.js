import React from "react";
import LogIn from "../../components/UserLogIn";
import HeaArrow from "../../components/HeaArr";
import LoginGoogle from "../../components/GoogleLogin";

const Login = () => {
  return (
    <div>
      <HeaArrow />
      <h3
        style={{
          fontFamily: "GothamBold",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Iniciar sesión
      </h3>
      <div
        style={{
          fontFamily: "GothamBook",
          fontSize: "14px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: " 40px 0",
        }}
      >
        <p
          style={{
            fontFamily: "GothamBook",
            fontSize: "14px",
            marginBottom: "0",
          }}
        >
          Si aún no te registras
        </p>
        <a
          href="/register"
          style={{
            fontFamily: "GothamBold",
            fontSize: "14px",
            color: "#2FB423",
            textDecorationLine: "underline",
          }}
        >
          Hazlo aquí
        </a>
      </div>
      <LoginGoogle />
      <LogIn />
    </div>
  );
};

export default Login;
