import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import RestHome from "./screens/RestHome";
import RestMenu from "./screens/RestMenu";
import Login from "./screens/LogInUser";
import RestLogin from "./screens/LogInRest";
import Signup from "./screens/SignUpUser";
import FormUser from "./screens/FormUser";
import Profile from "./screens/ProfileUser";
import EditProfile from "./screens/EditProfile";
import EditDirection from "./screens/EditDirection";
import UserOrder from "./screens/FoodOrderUser";
import OrdersClient from "./screens/OrdersClient";
//
import FormCreate from "./screens/FormCreateDishes";
import RestSignup from "./screens/SignUpRest";
import ProfileRest from "./screens/RestProfile";
import CreateMenu from "./screens/RestCreateMenu";
import OrderList from "./screens/RestProfile/orders";
import OrderDetail from "./screens/RestProfile/orderDetail";
import MenuList from "./screens/RestProfile/menus";
import DishesList from "./screens/RestProfile/dishes";
import StatusScreen from "./screens/OrderSatatus";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/restaurant/:id" component={RestHome} />
      <Route exact path="/rest/menu/:id" component={RestMenu} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/rest/login" component={RestLogin} />
      <Route exact path="/register" component={Signup} />
      <Route exact path="/register/info" component={FormUser} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/edit" component={EditProfile} />
      <Route exact path="/profile/edit/direction" component={EditDirection} />
      <Route exact path="/order" component={UserOrder} />
      <Route exact path="/myorder" component={OrdersClient} />
      {/*  */}
      <Route exact path="/create/dishes" component={FormCreate} />
      <Route exact path="/register/rest" component={RestSignup} />
      <Route exact path="/rest/profile" component={ProfileRest} />
      <Route exact path="/create/menu" component={CreateMenu} />
      <Route exact path="/orders/" component={OrderList} />
      <Route exact path="/orders/:id" component={OrderDetail} />
      <Route exact path="/menus" component={MenuList} />
      <Route exact path="/dishes" component={DishesList} />
      <Route exact path="/order/:id/status" component={StatusScreen} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
