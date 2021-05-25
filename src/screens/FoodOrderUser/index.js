import React from "react";
import HeaArrow from "../../components/HeaArr";

import OrderFood from "../../components/UserOrderFood";

const UserOrder = () => {
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
        Mi pedido
      </h3>
      <OrderFood />
    </div>
  );
};

export default UserOrder;
