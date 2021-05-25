import axios from 'axios';

// This service provides the list of restaurants.

async function GetRestaurantsList() {
	try {
		const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/restaurant/`);
		console.log(response);
		return response;
	} catch (error) {
		console.error(error);
	}
}

export { GetRestaurantsList };
