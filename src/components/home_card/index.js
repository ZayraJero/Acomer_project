import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';
import pin from '../../assets/icons/pin.svg';
import open from '../../assets/icons/openOrange.svg';
import credit from '../../assets/icons/creditCardPayment.svg';
import cash from '../../assets/icons/cash.svg';
import './styles.scss';

const HomeCard = (props) => {
	return (
		<Fragment>
			{props.restData ? (
				<div className="container">
					<div className="row  justify-content-md-center">
						<div className="col-12">
							<Card
								style={{
									display: 'flex',
									flexDirection: 'row',
									height: '88%',
									justifyContent: 'center'
								}}
							>
								{' '}
								<Link
									to={'/restaurant/' + props.restData.id} // usar react router dom etiqueta link
									style={{
										textDecoration: 'none',
										display: 'flex',
										color: '#000000'
									}}
								>
									<Card.Img
										variant="top"
										src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_960_720.jpg"
										style={{
											width: '40%',
											borderRadius: '10px'
										}}
									/>
									<Card.Body className="card-body">
										<Card.Title className="rest-name">{props.restData.name}</Card.Title>
										<Card.Text>
											<p className="metros">
												a 300 m<img src={pin} />
											</p>
											<div>
												<img src={open} />
												<div>
													<img src={credit} className="icon-money" />
													<img src={cash} className="icon-money" />
												</div>
											</div>
										</Card.Text>
									</Card.Body>
								</Link>
							</Card>
						</div>
					</div>
				</div>
			) : null}
		</Fragment>
	);
};

export default HomeCard;
