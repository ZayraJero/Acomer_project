import axios from "axios";

// This service POST a new order to the backend

async function PostOrders(idRest, idCustom, idMenu, plates) {
  try {
    await axios.post(
      `http://ec2-18-216-57-107.us-east-2.compute.amazonaws.com/api/order/create/`,
      {
        status: "recibido",
        restaurant: idRest,
        client: idCustom,
        menus: [
          {
            id: idMenu,
          },
        ],
        plates: plates,
      }
    );
    return "200";
  } catch (error) {
    console.error(error);
  }
}

export default PostOrders;
