import React, { useEffect, useState } from "react";

import { GetRestaurantsList } from "../../services/getRestaurantsList";

import Header from "../../components/Header";
import Search from "../../components/Search";
import CarrouselMenu from "../../components/carrouselMenu";
import HomeCard from "../../components/home_card";
import Footer from "../../components/footer";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  // const [authData, setAuthData] = useState({});
  const auth = localStorage.getItem("authData");
  if (!auth) {
    history.push("/login");
  }
  //solo para usuario
  const authJSON = JSON.parse(auth);
  if (!authJSON.isUser) {
    //login fonda
    history.push("/rest/profile");
    console.log("si no es usuario redireccionar a la fonda");
  }

  const handleSearch = (data) => {
    console.log(data);
  };

  const [RestaurantsCard, setRestaurantsCard] = useState([]);

  useEffect(async () => {
    const response = await GetRestaurantsList();
    setRestaurantsCard(response.data);
  }, []);

  return (
    <div>
      <Header />
      <Search />
      <CarrouselMenu />
      {RestaurantsCard.map((restaurant) => (
        <HomeCard restData={restaurant} />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
