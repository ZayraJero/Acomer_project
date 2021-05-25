import React from "react";
import Status from "../../components/status";
import HeaArrow from "../../components/HeaArr";
import { formSignup } from "../../services/users";
import { useParams } from "react-router";

const StatusScreen = () => {
  const handleSubmit = (data) => {
    formSignup(data);
  };

  const { id: orderID } = useParams();

  return (
    <div>
      <HeaArrow />
      <h3
        style={{
          fontFamily: "GothamBold",
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        Mi pedido
      </h3>
      <Status handleSubmit={handleSubmit} orderID={orderID} />
    </div>
  );
};

export default StatusScreen;
