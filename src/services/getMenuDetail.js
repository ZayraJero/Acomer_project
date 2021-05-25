import axios from 'axios';

// This service provides the detail of each menu

async function GetMenuDetail(id) {
  console.log(id);
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/menu/${id}/detail/`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default GetMenuDetail;
