import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const Footer = () => {
	return (
		<div>
			<footer className="footer mt-auto py-3 bg-light text-dark">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="container mt-2">
								<ul className="nav justify-content-center">
									<li className="nav-item">
										<a className="nav-link text-dark" href="/">
											Inicio
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link text-dark" href="/fondas">
											Fondas
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link text-dark" href="/antojitos">
											Antojitos
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link text-dark" href="/register/rest">
											Registra tu negocio
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link text-dark" href="/covid-19">
											Anuncio Covid-19{' '}
											<span role="img" aria-label="virus">
												🦠
											</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link text-dark" href="/faq">
											FAQ
										</a>
									</li>
								</ul>

								<ul className="nav justify-content-center">
									<li className="nav-item">
										<a className="nav-link text-dark" href="/nosotros">
											Nosotros
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link text-dark" href="/privacidad">
											Privacidad
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link text-dark" href="/terminos">
											Términos
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link text-dark" href="/contacto">
											Contacto
										</a>
									</li>
								</ul>

								<ul className="nav navbar justify-content-center">
									<li className="nav-item mr-4">
										<a href="https://www.facebook.com">
											<img src="./assets/ico/fb.svg" alt="Facebook" />{' '}
										</a>
									</li>
									<li className="nav-item mr-4">
										<a href="https://www.twitter.com">
											<img type="image/svg+xml" src="./assets/ico/twitter.svg" alt="Twitter" />{' '}
										</a>
									</li>
									<li className="nav-item mr-4">
										<a href="https://www.instagram.com">
											<img src="./assets/ico/ig.svg" alt="Instagram" />{' '}
										</a>
									</li>
								</ul>
							</div>

							<hr />

							<div className="nav justify-content-center">
								<p className="text-center">
									<strong>Comunidad aCOMER</strong> – Construimos la relación entre pequeños negocios de comida y sus
									clientes a través de la transparencia y honestidad.
									<br />{' '}
									<span role="img" aria-label="mexico">
										🇲🇽{' '}
									</span>{' '}
									¡¡¡Todos unidos saldremos adelante!!!{' '}
									<span role="img" aria-label="mexico">
										🇲🇽
									</span>
								</p>

								<p className="text-center">
									Hecho con{' '}
									<span role="img" aria-label="love">
										❤️
									</span>{' '}
									en <strong>México</strong>. aCOMER © {new Date().getFullYear()}.
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
