import axios from "axios";

const API_URL = "http://localhost:8000/api/";

//Test
export async function signupUser(userData) {
  try {
    // console.log(userData);
    const formData = new FormData();

    formData.append("first_name", userData.first_name);
    formData.append("last_name", userData.last_name);
    formData.append("email", userData.email);

    const response = await axios({
      url: "http://127.0.0.1:8000/api/client/create/",
      method: "POST",
      data: formData,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//FORM DIRECTION
export async function formUser(userData) {
  try {
    // console.log(userData);
    const formData = new FormData();

    formData.append("street", userData.street);
    formData.append("ext_number", userData.ext_number);
    formData.append("int_number", userData.int_number);
    formData.append("zip_code", userData.zip_code);
    formData.append("municipality", userData.municipality);
    formData.append("suburb", userData.suburb);
    formData.append("references", userData.references);
    formData.append("alias", userData.alias);

    const response = await axios({
      url: "http://127.0.0.1:8000/api/address/create/",
      method: "POST",
      data: formData,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

//FORM SIGNUP
export async function formSignup(userData) {
  try {
    // console.log(userData);
    const formData = new FormData();

    formData.append("first_name", userData.first_name);
    formData.append("last_name", userData.last_name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("phone", userData.phone);

    const response = await axios({
      url:
        "http://ec2-18-216-57-107.us-east-2.compute.amazonaws.com/api/client/register/",
      method: "POST",
      data: formData,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//TEST
export async function getData() {
  try {
    const response = await axios({
      url: "http://127.0.0.1:8000/api/address/2/update/",
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

//Google

async function login(email, userName) {
  try {
    const response = await window.fetch(`${API_URL}client/create/`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        email: email,
        name: userName,
      }),
    });
    const payload = await response.json();
    console.log(payload);
    if (payload.token && payload.token !== "") {
      return payload;
    }
  } catch (e) {
    return {
      message: "error",
      data: {
        token: "",
      },
    };
  }
}

async function getUserSession(token) {
  try {
    const response = await window.fetch(`${API_URL}client/create/`, {
      headers: { authorization: token },
    });
    const payload = await response.json();
    return payload;
  } catch (error) {
    return {
      data: {
        session: [],
      },
    };
  }
}

const users = {
  login,
  getUserSession,
};
export default users;
