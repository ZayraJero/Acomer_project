import axios from 'axios';

// This service provides the list of menus available per restaurant

async function GetRestMenus(id) {
	try {
		const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/restaurant/${id}/menus/`);
		return response.data.menus;
	} catch (error) {
		console.error(error);
	}
}

export { GetRestMenus };
