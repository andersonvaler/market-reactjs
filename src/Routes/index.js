import React from "react";
import { Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import Checkout from "../Pages/Checkout";
import Store from "../Pages/Store";
import Cart from "../Pages/Cart";
import ProductPage from "../Pages/ProductPage";
import PedidosStore from "../Pages/PedidosStore";
import Route from "./routes.js";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login/:userType" exact component={Login} />
      <Route path="/register/:userType" exact component={Register} />
      <Route path="/dashboard/:userType" component={Dashboard} isPrivate />
      <Route path="/managment/:userType" component={Store} isPrivate />
      <Route path="/products" component={ProductPage} isPrivate />
      <Route path="/profile/:userType" component={Profile} isPrivate />
      <Route path="/checkout" component={Checkout} isPrivate />
      <Route path="/cart" component={Cart} isPrivate />
      <Route path="/pedidos" component={PedidosStore} isPrivate />
    </Switch>
  );
};

export default Routes;
