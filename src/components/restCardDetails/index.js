import React, { useState } from 'react';
import { Figure } from 'react-bootstrap';
import './styles.css';

import pin from '../../assets/icons/pin.svg';
import credit from '../../assets/icons/creditCardPayment.svg';
import cash from '../../assets/icons/cash.svg';

const RestCardDetails = (props) => {
	/* 	const [ Addr, setAddr ] = useState(props.data.addresses[0]); */

	/* 	console.log(Addr.street); */
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="container">
					<div className="row">
						<div className="container-fluid">
							<div className="row" className="images_frames">
								<div className="col" className="image_cols">
									<Figure.Image
										className="rest-photo"
										alt="image"
										src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_960_720.jpg"
									/>
								</div>
							</div>
							<div className="restaurant-type">
								<strong>Comida Corrida</strong>
							</div>
							<div className="name">{props.data.name}</div>
							<div className="direction">
								<img src={pin} className="icon-pin" />

								{props.data.addresses ? (
									<p>
										{props.data.addresses[0].street} &nbsp;
										{props.data.addresses[0].ext_number}, &nbsp;
										{props.data.addresses[0].suburb}, &nbsp;
										{props.data.addresses[0].municipality}, &nbsp;
										{props.data.addresses[0].zip_code}
									</p>
								) : null}
							</div>
						</div>
						<div className="container-fluid">
							<img src={credit} className="icon-cash" />
							<img src={cash} className="icon-cash" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RestCardDetails;
