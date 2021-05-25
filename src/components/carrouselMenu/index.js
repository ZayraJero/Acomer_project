import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { GetRestaurantsList } from '../../services/getRestaurantsList';

const CarrouselMenu = () => {
	const [ isClick, setIsClick ] = useState(false);
	const [ restaurants, setRestaurants ] = useState([]);

	const handleOnClick = async (e) => {
		console.log(e.target);
		console.log('Clicked');
		setIsClick(!isClick);
		// const response = await getRestaurants();
		// const dataJSON = await response.json();
		// console.log(dataJSON);
		// setRestaurants(dataJSON.data)
	};

	const getRestaurants = () => {};

	// cuando hacemos una petición al server
	useEffect(() => {
		// fetch
	}, []);

	return (
		<div>
			<div className="carrousel-menu col-12">
				<div className="scrollmenu ml-2 col-12 justify-content-center">
					<a className="navlink" type="button" onClick={handleOnClick} id="fondas-tab" href="#fondas">
						Fondas
					</a>
					<a className="navlink" onClick={handleOnClick} id="tacos-tab" href="#tacos">
						Tacos
					</a>
					<a className="navlink" onClick={handleOnClick} id="antojitos-tab" href="#antojitos">
						Antojiitos
					</a>
					<a className="navlink" onClick={handleOnClick} id="hamburguesas-tab" href="#hamburguesas">
						Hamburguesas
					</a>
					<a className="navlink" onClick={handleOnClick} id="otros-tab" href="#otros">
						Otros
					</a>
					<a className="navlink" onClick={handleOnClick} id="todos-tab" href="#todos">
						Todos
					</a>
				</div>
			</div>

			{/* Contenido de cada TAB */}
			<div className="tab-content col-12" id="TabContentWrapper">
				{restaurants.length !== 0 ? (
					restaurants.map((restaurant) => <p>{restaurant.name}</p>)
				) : (
					null
				)}
			</div>
		</div>
	);
};

export default CarrouselMenu;
