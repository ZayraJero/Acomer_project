import React, { Fragment, useState, useEffect, Component } from "react";

import GetMenuDetail from "../../services/getMenuDetail";
import PostOrders from "../../services/postOrders";
import CustomButton from "../Button";
import swal from "sweetalert";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useHistory } from "react-router";

const MenuDetail = (props) => {
	console.log(props);
	const [ MenuDetailsR, setMenuDetailsR ] = useState([]);
	const [ first, setFirst] = useState(null);
	const [ second, setSecond] = useState(null);
	const [ third, setThird] = useState(null);
	const [ fourth, setFourth] = useState(null);
	const [ tacos, setTacos] = useState(null);
	const [ snacks, setSnacks] = useState(null);
	const [ drinks, setDrinks] = useState(null);
	const [ complements, setComplements] = useState(null);
	const [ extras, setExtras] = useState(null);

  const [PostOrdersR, setPostOrdersR] = useState();

  const history = useHistory();

  const authData = localStorage.getItem("authData");
  if (!authData) {
    history.push("/login");
  }
  const authJSON = JSON.parse(authData);

  useEffect(async () => {
    const response = await GetMenuDetail(props.idRest);
    setMenuDetailsR(response);
  }, [props.idRest, props.idMenu]);

  const handleRadio = (changeEvent, type) => {
    if (type === `first`) {
      setFirst(changeEvent.target.value);
    }

    if (type === `second`) {
      setSecond(changeEvent.target.value);
    }

    if (type === `third`) {
      setThird(changeEvent.target.value);
    }

    if (type === `fourth`) {
      setFourth(changeEvent.target.value);
    }

    if (type === `tacos`) {
      setTacos(changeEvent.target.value);
    }

    if (type === `snacks`) {
      setSnacks(changeEvent.target.value);
    }

    if (type === `drinks`) {
      setDrinks(changeEvent.target.value);
    }

    if (type === `complements`) {
      setComplements(changeEvent.target.value);
    }

    if (type === `extras`) {
      setExtras(changeEvent.target.value);
    }
  };

	/* const [authData, setAuthData] = useState({});
	const auth = localStorage.getItem('authData');
	if(!auth) {
		history.push('/login')
	} */
	
  const handleSend = async () => {
    const plates = [];
    if (first) plates.push({ id: parseInt(first) });
    if (second) plates.push({ id: parseInt(second) });
    if (third) plates.push({ id: parseInt(third) });
    if (fourth) plates.push({ id: parseInt(fourth) });
    if (tacos) plates.push({ id: parseInt(tacos) });
    if (snacks) plates.push({ id: parseInt(snacks) });
    if (drinks) plates.push({ id: parseInt(drinks) });
    if (complements) plates.push({ id: parseInt(complements) });
    if (extras) plates.push({ id: parseInt(extras) });

    const idRest = props.idRest;
    const idCustom = authJSON.client_id;
    const idMenu = props.idMenu;
    const resultPost = await PostOrders(idRest, idCustom, idMenu, plates);
    if (resultPost === "200") {
      swal({
        title: "A comer!",
        text: "¡Recibimos tu orden, ya esta en camino!",
        icon: "success",
        timer: 3500,
        buttons: false,
      }).then(() => {
        window.location.href = `/myorder`;
      });
    } else {
      swal({
        title: "A comer!",
        text: "Oops - Algo fallo, selecciona nuevamente tu menú",
        icon: "error",
        timer: 3500,
        buttons: false,
      }).then(() => {
        window.location.href = "/restaurant/" + idRest;
      });
    }
  };

  return (
    <div col-12 id="TabContentWrapper">
      {MenuDetailsR !== undefined && MenuDetailsR.length !== 0 ? (
        <div>
          <div className="row col-12 align-items-center justify-content-center">
            <div class="menu-title">
              <h2>{MenuDetailsR.menu.title}</h2>
              <h6>{MenuDetailsR.menu.description}</h6>
            </div>
            <div class="menu-price text-right">
              <p>
                {MenuDetailsR.menu.groupMenu === true
                  ? "$ " + MenuDetailsR.menu.price + " MXN"
                  : null}
              </p>
            </div>
            <div className="container">
              {MenuDetailsR.menu.plates.length !== 0 ? (
                <Fragment>
                  {/* Primer tiempo */}
                  {MenuDetailsR.menu.plates.primer_tiempo.length !== 0 ? (
                    <div>
                      <div className="row title-custom">
                        <h5>Primer tiempo</h5>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          {MenuDetailsR.menu.plates.primer_tiempo.map(
                            (plate) => (
                              <div className="form-check">
                                <input
                                  className="form-check-input check-custom"
                                  type="radio"
                                  checked={plate.id.toString() === first}
                                  onChange={(e) => handleRadio(e, "first")} // linea para monitorear el stado del radio button
                                  name="firstTime"
                                  value={plate.id}
                                  id={"ft" + plate.id}
                                />
                                <label
                                  className="form-check-label label-custom"
                                  for={"ft" + plate.id}
                                >
                                  {plate.name}
                                  {MenuDetailsR.menu.groupMenu === false ? (
                                    <span>$ {plate.price} MXN</span>
                                  ) : null}
                                </label>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* Segundo tiempo */}
                  {MenuDetailsR.menu.plates.segundo_tiempo.length !== 0 ? (
                    <div>
                      <div className="row title-custom">
                        <h5>Segundo tiempo</h5>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          {MenuDetailsR.menu.plates.segundo_tiempo.map(
                            (plate) => (
                              <div className="form-check">
                                <input
                                  className="form-check-input check-custom"
                                  type="radio"
                                  checked={plate.id.toString() === second}
                                  onChange={(e) => handleRadio(e, "second")}
                                  name="secondTime"
                                  value={plate.id}
                                  id={"ft" + plate.id}
                                />
                                <label
                                  className="form-check-label label-custom"
                                  for={"ft" + plate.id}
                                >
                                  {plate.name}
                                  {MenuDetailsR.menu.groupMenu === false ? (
                                    <span>$ {plate.price} MXN</span>
                                  ) : null}
                                </label>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* Tercer tiempo */}
                  {MenuDetailsR.menu.plates.tercer_tiempo.length !== 0 ? (
                    <div>
                      <div className="row title-custom">
                        <h5>Tercer tiempo</h5>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          {MenuDetailsR.menu.plates.tercer_tiempo.map(
                            (plate) => (
                              <div className="form-check">
                                <input
                                  className="form-check-input check-custom"
                                  type="radio"
                                  checked={plate.id.toString() === third}
                                  onChange={(e) => handleRadio(e, "third")}
                                  name="thirdTime"
                                  value={plate.id}
                                  id={"ft" + plate.id}
                                />
                                <label
                                  className="form-check-label label-custom"
                                  for={"ft" + plate.id}
                                >
                                  {plate.name}
                                  {MenuDetailsR.menu.groupMenu === false ? (
                                    <span>$ {plate.price} MXN</span>
                                  ) : null}
                                </label>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* Cuarto tiempo */}
                  {MenuDetailsR.menu.plates.cuarto_tiempo.length !== 0 ? (
                    <div>
                      <div className="row title-custom">
                        <h5>Cuarto tiempo</h5>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          {MenuDetailsR.menu.plates.cuarto_tiempo.map(
                            (plate) => (
                              <div className="form-check">
                                <input
                                  className="form-check-input check-custom"
                                  type="radio"
                                  checked={plate.id.toString() === fourth}
                                  onChange={(e) => handleRadio(e, "fourth")}
                                  name="fourthTime"
                                  value={plate.id}
                                  id={"ft" + plate.id}
                                />
                                <label
                                  className="form-check-label label-custom"
                                  for={"ft" + plate.id}
                                >
                                  {plate.name}
                                  {MenuDetailsR.menu.groupMenu === false ? (
                                    <span>$ {plate.price} MXN</span>
                                  ) : null}
                                </label>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* Tacos */}
                  {MenuDetailsR.menu.plates.tacos.length !== 0 ? (
                    <div>
                      <div className="row title-custom">
                        <h5>Tacos</h5>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          {MenuDetailsR.menu.plates.tacos.map((plate) => (
                            <div className="form-check">
                              <input
                                className="form-check-input check-custom"
                                type="radio"
                                checked={plate.id.toString() === tacos}
                                onChange={(e) => handleRadio(e, "tacos")}
                                name="tacos"
                                value={plate.id}
                                id={"ft" + plate.id}
                              />
                              <label
                                className="form-check-label label-custom"
                                for={"ft" + plate.id}
                              >
                                {plate.name}
                                {MenuDetailsR.menu.groupMenu === false ? (
                                  <span>$ {plate.price} MXN</span>
                                ) : null}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* Snacks */}
                  {MenuDetailsR.menu.plates.snack.length !== 0 ? (
                    <div>
                      <div className="row title-custom">
                        <h5>Snacks</h5>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          {MenuDetailsR.menu.plates.snack.map((plate) => (
                            <div className="form-check">
                              <input
                                className="form-check-input check-custom"
                                type="radio"
                                checked={plate.id.toString() === snacks}
                                onChange={(e) => handleRadio(e, "snacks")}
                                name="snacks"
                                value={plate.id}
                                id={"ft" + plate.id}
                              />
                              <label
                                className="form-check-label label-custom"
                                for={"ft" + plate.id}
                              >
                                {plate.name}
                                {MenuDetailsR.menu.groupMenu === false ? (
                                  <span>$ {plate.price} MXN</span>
                                ) : null}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* Bebidas */}
                  {MenuDetailsR.menu.plates.bebidas.length !== 0 ? (
                    <div>
                      <div className="row title-custom">
                        <h5>Bebidas</h5>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          {MenuDetailsR.menu.plates.bebidas.map((plate) => (
                            <div className="form-check">
                              <input
                                className="form-check-input check-custom"
                                type="radio"
                                checked={plate.id.toString() === drinks}
                                onChange={(e) => handleRadio(e, "drinks")}
                                name="bebidas"
                                value={plate.id}
                                id={"ft" + plate.id}
                              />
                              <label
                                className="form-check-label label-custom"
                                for={"ft" + plate.id}
                              >
                                {plate.name}
                                {MenuDetailsR.menu.groupMenu === false ? (
                                  <span>$ {plate.price} MXN</span>
                                ) : null}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* Complementos */}
                  {MenuDetailsR.menu.plates.Complementos.length !== 0 ? (
                    <div>
                      <div className="row title-custom">
                        <h5>Complementos</h5>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          {MenuDetailsR.menu.plates.Complementos.map(
                            (plate) => (
                              <div className="form-check">
                                <input
                                  className="form-check-input check-custom"
                                  type="radio"
                                  checked={plate.id.toString() === complements}
                                  onChange={(e) =>
                                    handleRadio(e, "complements")
                                  }
                                  name="complementos"
                                  value={plate.id}
                                  id={"ft" + plate.id}
                                />
                                <label
                                  className="form-check-label label-custom"
                                  for={"ft" + plate.id}
                                >
                                  {plate.name}
                                  {MenuDetailsR.menu.groupMenu === false ? (
                                    <span>$ {plate.price} MXN</span>
                                  ) : null}
                                </label>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* Ingredientes extras */}
                  {MenuDetailsR.menu.plates.ingredientes_extras.length !== 0 ? (
                    <div>
                      <div className="row title-custom">
                        <h5>Ingredientes Extras</h5>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          {MenuDetailsR.menu.plates.ingredientes_extras.map(
                            (plate) => (
                              <div className="form-check">
                                <input
                                  className="form-check-input check-custom"
                                  type="radio"
                                  checked={plate.id.toString() === extras}
                                  onChange={(e) => handleRadio(e, "extras")}
                                  name="extras"
                                  value={plate.id}
                                  id={"ft" + plate.id}
                                />
                                <label
                                  className="form-check-label label-custom"
                                  for={"ft" + plate.id}
                                >
                                  {plate.name}
                                  {MenuDetailsR.menu.groupMenu === false ? (
                                    <span>$ {plate.price} MXN</span>
                                  ) : null}
                                </label>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* BOTON */}
                  <CustomButton children="Comprar" onClick={handleSend} />
                </Fragment>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MenuDetail;
