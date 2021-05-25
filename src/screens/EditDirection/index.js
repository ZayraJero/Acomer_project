import React from "react";
import HeaArrow from "../../components/HeaArr";
import EditDirect from "../../components/UserEditDirection";
import { getData } from "../../services/users";

const EditDirection = () => {
  const handleSubmit = (data) => {
    getData(data);
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
        Editar dirección
      </h3>
      <EditDirect handleSubmit={handleSubmit} />
    </div>
  );
};

export default EditDirection;
