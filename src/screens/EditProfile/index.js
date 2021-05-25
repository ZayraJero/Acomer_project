import React from "react";
import HeaArrow from "../../components/HeaArr";
import EditForm from "../../components/UserEditForm";

const EditProfile = () => {
  return (
    <div>
      <HeaArrow />
      <h3
        style={{
          fontFamily: "GothamBold",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "15px",
        }}
      >
        Editar perfil
      </h3>
      <EditForm />
    </div>
  );
};

export default EditProfile;
