import React from "react";
import FormDirection from "../../components/UserFormDirection";
import HeaArrow from "../../components/HeaArr";
import { formUser } from "../../services/users";

const FormUser = () => {
  const handleSubmit = (data) => {
    formUser(data);
  };
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
        Dirección
      </h3>
      <FormDirection handleSubmit={handleSubmit} />
    </div>
  );
};

export default FormUser;
