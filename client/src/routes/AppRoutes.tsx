import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import RestaurantList from "../components/Restaurant/RestaurantList";
import RestaurantDetails from "../components/Restaurant/RestaurantDetails";
import CreateRestaurant from "../components/Restaurant/CreateRestaurant";
import MenuList from "../components/Menu/MenuList";
import CreateMenuItem from "../components/Menu/CreateMenuItem";
import Cart from "../components/Cart/Cart";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
