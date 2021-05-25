import axios from 'axios';

// This service provides the list of menus available per restaurant

async function GetMenus(id) {
	try {
		const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/menu/${id}/detail/`);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

export default GetMenus;
