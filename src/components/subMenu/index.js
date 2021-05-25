import React from 'react';
import ReactDOM from 'react-dom';

//import { useParams } from 'react-router-dom';
//import GetMenus from '../../services/getMenus';
import MenuDetail from '../../components/menuDetail';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const SubMenu = (props) => {
	//const [ isClick, setIsClick ] = useState(false);

	const handleOnClick = async (e) => {
		var idMenu = e.target.id;
		ReactDOM.render(<MenuDetail data={idMenu} />, document.getElementById('menuDetails'));
	};

	return (
		<div>
			{props ? (
				<div>
					<div className="row carrousel-menu col-10 col-md-10">
						<div className="scrollmenu submenu ml-2 col-8 col-md-10 justify-content-center">
							{props.data.map((menu) => (
								<a className="navlink" key={menu.id} type="button" onClick={handleOnClick} id={menu.id}>
									{menu.title}
								</a>
							))}
						</div>
					</div>
				</div>
			) : (
				'No hay menus 2'
			)}
		</div>
	);
};

export default SubMenu;
