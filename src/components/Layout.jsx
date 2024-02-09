import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "../Store";

function Layout() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <div className="outlet container-products">
          <Outlet />
        </div>
      </Provider>
    </>
  );
}

export default Layout;
