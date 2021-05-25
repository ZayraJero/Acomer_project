import React from 'react';
import ReactDOM from 'react-dom';

import SubMenu from '../../components/subMenu';
import MenuDetail from '../../components/menuDetail';
import { GetRestMenus } from '../../services/getRestMenus';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

const ListMenus = (props) => {
	console.log(props);
	const handleOnClick = async (e) => {
		console.log(e);
		console.log(e.target.id);
		//ReactDOM.render(<MenuDetail data={e.target.id} />, document.getElementById('listMenus'));
	};

	return (
		<Container>
			<Row className="justify-content-lg-center">
				<Col xs={'auto'} className="user-menu" id={props.data.id} onClick={handleOnClick}>
					{
						<p className="menu-name">
							{props.data.title} <span>{props.data.price}</span>
						</p>
					}
					<span className="description-menu ">{props.data.description}</span>
				</Col>
			</Row>
		</Container>
	);
};

export default ListMenus;
