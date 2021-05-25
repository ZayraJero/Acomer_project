import React from "react";
import HeaArrow from "../../components/HeaArr";
import OrderRest from "../../components/OrderRest";

const RestOrder = () => {
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
        Mis pedidos
      </h3>

      <OrderRest />
    </div>
  );
};

export default RestOrder;
