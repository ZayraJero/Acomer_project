import React from "react";
import { Figure } from "react-bootstrap";
import pin from "../../assets/icons/pin.svg";
import credit from "../../assets/icons/creditCardPayment.svg";
import cash from "../../assets/icons/cash.svg";
import "./styles.scss";

const Card = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="container-fluid">
              <div className="row" className="images_frame">
                <div className="col-3" className="image_col">
                  <Figure>
                    <Figure.Image
                      className="images"
                      alt="image"
                      src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_960_720.jpg"
                    />
                  </Figure>
                </div>
                <div className="col-3" className="image_col">
                  <Figure>
                    <Figure.Image
                      className="images"
                      alt="image"
                      src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_960_720.jpg"
                    />
                  </Figure>
                </div>
                <div className="col-3" className="image_col">
                  <Figure>
                    <Figure.Image
                      className="images"
                      alt="image"
                      src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_960_720.jpg"
                    />
                  </Figure>
                </div>
                <div className="col-3" className="image_col">
                  <Figure>
                    <Figure.Image
                      className="images"
                      alt="image"
                      src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_960_720.jpg"
                    />
                  </Figure>
                </div>
              </div>
              <div className="restaurant_type">Comida Corrida</div>
              <div className="name">Fonda Don José</div>
              <div className="direction">
                <img src={pin} className="icon-pin"></img>
                Av.Insurgentes sur 322 Col.Valle sur, Del. Benito Juares. CDMX
              </div>
              <div className="container-fluid">
                <img src={credit} className="icon-cash"></img>
                <img src={cash} className="icon-cash"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
