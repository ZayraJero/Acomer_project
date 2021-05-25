import React from "react";
import { Link } from "react-router-dom";
import RestDirection from "../../components/RestForm";
// import LoginGoogle from "../../components/GoogleLogin";
import { signupForm } from "../../services/restaurants";

const RestSignup = () => {
  const handleSubmit = (data) => {
    signupForm(data);
  };
  return (
    <div>
      <h1 className="header-rest">A comer!</h1>
      <h3
        style={{
          fontFamily: "GothamBold",
          display: "flex",
          justifyContent: "center",
          fontSize: "24px",
          margin: "20px",
          paddingTop: "20px",
        }}
      >
        Regístra tu restaurante o puesto de comida
      </h3>
      <div
        style={{
          fontFamily: "GothamBook",
          fontSize: "14px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <p
          style={{
            fontFamily: "GothamBook",

            justifyContent: "center",
            marginBottom: "0",
          }}
        >
          Si ya registraste tu restaurante
        </p>
        <Link
          to="/login"
          style={{
            fontFamily: "GothamBold",
            fontSize: "14px",
            color: "#2FB423",
            textDecorationLine: "underline",
          }}
        >
          Inicia Sesión
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "20px",
          fontFamily: "GothamBook",
          fontSize: "14px",
          marginBottom: "-1px",
        }}
      >
        <p>
          Con{" "}
          <span
            style={{
              color: "#2FB423",
              fontFamily: "GothamBold",
            }}
          >
            A comer
          </span>{" "}
          puedes crear tu menú, distribuirlo y recibir pedidos
        </p>

        <p
          style={{
            fontFamily: "GothamBold",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Comienza aquí, es gratis
        </p>
        <p
          style={{
            fontFamily: "GothamBook",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Ingresa los datos de tu Restaurante
        </p>
      </div>
      <RestDirection handleSubmit={handleSubmit} />
    </div>
  );
};

export default RestSignup;
