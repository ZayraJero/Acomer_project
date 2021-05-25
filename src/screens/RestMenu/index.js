import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import GetListMenus from '../../services/getListMenus';
import { GetRestAddress } from "../../services/getRestAddress";
import RestCardDetails from "../../components/restCardDetails";

import Header from "../../components/Header";
import HeaArrow from "../../components/HeaArr";
//import Card from '../../components/restaurant_card';
import { GetRestMenus } from "../../services/getRestMenus";
//import ListMenus from '../../components/listMenus';
import SubMenu from "../../components/subMenu";
import MenuDetail from "../../components/menuDetail";

const RestMenu = () => {
  const { id } = useParams();
  const [RestCard, setRestCard] = useState({});
  useEffect(async () => {
    const response = await GetRestAddress(id);
    setRestCard(response.data);
  }, []);

  const [ListMenu, setListMenu] = useState([]);
  useEffect(async () => {
    const response = await GetRestMenus(id);
    setListMenu(response);
  }, []);

  return (
    <div>
      {/* <HeaArrow /> */}
      <Header />
      <RestCardDetails data={RestCard} />
      <SubMenu data={ListMenu} />
      <div id="menuDetails">
        <MenuDetail data="40" />
      </div>
    </div>
  );
};

export default RestMenu;
