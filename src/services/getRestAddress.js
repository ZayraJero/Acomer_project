import axios from 'axios';

// This service provides the restaurant information
// and the restaurant address.

async function GetRestAddress(id) {
	try {
		const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/restaurant/${id}/address/`);
		//console.log(response);
		return response;
	} catch (error) {
		console.error(error);
	}
}

export { GetRestAddress };
