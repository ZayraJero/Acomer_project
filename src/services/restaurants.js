import axios from "axios";

//FORM SIGNUP
export async function signupForm(userData) {
  try {
    console.log(userData);
    const response = await axios({
      url:
        "http://ec2-18-216-57-107.us-east-2.compute.amazonaws.com/api/restaurant/create/",
      method: "POST",
      data: {
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        addresses: [
          {
            status: true,
            street: userData.street,
            suburb: userData.suburb,
            municipality: userData.municipality,
            link_google: userData.link_google,
            int_number: userData.int_number,
            ext_number: userData.ext_number,
            zip_code: userData.zip_code,
          },
        ],
      },
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function createDishes(dishesData) {
  try {
    // console.log(userData);
    const formData = new FormData();

    formData.append("name", dishesData.name);
    formData.append("image", dishesData.image);
    formData.append("price", dishesData.price);
    formData.append("type", dishesData.type);

    const response = await axios({
      url:
        "http://ec2-18-216-57-107.us-east-2.compute.amazonaws.com/api/plate/create/",
      method: "POST",
      data: formData,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

//CREATE MENU
export function getDishes() {
  return axios
    .get("http://ec2-18-216-57-107.us-east-2.compute.amazonaws.com/api/plate/")
    .then(function (response) {
      return response.data;
    });
}
