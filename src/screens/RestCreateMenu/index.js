import React, { useState } from "react";
import MenuRestaurant from "../../components/RestMenu";
import HeaArrow from "../../components/HeaArr";

const CreateMenu = () => {
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
        Creación de menú
      </h3>
      <MenuRestaurant />
    </div>
  );
};

export default CreateMenu;
