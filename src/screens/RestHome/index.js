import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
//import '../../../components/listMenus/styles.css';

// import the api service to get restaurant datails
import HeaArrow from '../../components/HeaArr';
import { GetRestAddress } from '../../services/getRestAddress';
import { GetRestMenus } from '../../services/getRestMenus';
import MenuDetail from '../../components/menuDetail';
import GetMenuDetail from '../../services/getMenuDetail';

import Header from '../../components/Header';
//import SubMenu from '../../components/subMenu';
import RestCardDetails from '../../components/restCardDetails';
import ListMenus from '../../components/listMenus';

const RestHome = () => {
	const [ RestCard, setRestCard ] = useState({});
	const [ NumberMenu, setNumberMenu ] = useState([]);

	const { id } = useParams();
	useEffect(async () => {
		const response = await GetRestAddress(id);
		setRestCard(response.data);
	}, []);

	const [ ListMenu, setListMenu ] = useState([]);
	useEffect(async () => {
		const response = await GetRestMenus(id);
		setListMenu(response);
		console.log(response);
	}, []);

	/* const [authData, setAuthData] = useState({});
	const auth = localStorage.getItem('authData');
	if(!auth) {
		history.push('/login')
	} */

	const handleOnClick = async (e) => {
		console.log(e);
		console.log(e.target.dataset.id);
		setNumberMenu([ e.target.dataset.id ]);
		document.getElementById('listMenus').style.display = 'none';
		document.getElementById('submenu').classList.remove('d-none');
	};

	return (
		<div>
			{/* <HeaArrow /> */}
			<Header />
			{/* <Card /> */}
			<RestCardDetails data={RestCard} />
			{/* <SubMenu /> */}
			<div id="submenu" className="d-none">
				<div className="carrousel-menu col-12">
					<div className="scrollmenu submenu ml-2 col-12 justify-content-center">
						{ListMenu.length > 0 &&
							ListMenu.map((menu) => (
								<a className="navlink" key={menu.id} type="button" onClick={handleOnClick} data-id={menu.id}>
									{menu.title}
								</a>
							))}
					</div>
				</div>
			</div>

			<div id="listMenus">
				{ListMenu.length > 0 &&
					ListMenu.map((menu) => {
						return (
							<Container>
								<Row className="justify-content-lg-center">
									<Col xs={'auto'} className="user-menu" id={menu.id}>
										{
											<p className="menu-name" onClick={handleOnClick} data-id={menu.id}>
												{menu.title} <span>$ {menu.price}</span>
											</p>
										}
										<span className="description-menu ">{menu.description}</span>
									</Col>
								</Row>
							</Container>
						);
					})}
			</div>
			{NumberMenu.length > 0 ? <MenuDetail idRest={id} idMenu={NumberMenu[0]} /> : ''}
		</div>
	);
};

export default RestHome;

// 1. se carga el componente
// 2. se ejecuta el return y pinta cada componente
// 3. RestCard tiene un prop llamado data, va a valer
// useEffect se ejecuta cada que se modifica un estado
