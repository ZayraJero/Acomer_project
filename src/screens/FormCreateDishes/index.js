import React from "react";
import FormDishes from "../../components/RestFormDishes";
import HeaArrow from "../../components/HeaArr";
import { createDishes } from "../../services/restaurants";

const FormCreate = () => {
  const handleSubmit = (data) => {
    createDishes(data);
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
        Creación de platillo
      </h3>
      <FormDishes handleSubmit={handleSubmit} />
    </div>
  );
};

export default FormCreate;
