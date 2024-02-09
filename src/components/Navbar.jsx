import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../app.css";

function Navbar() {
  const items = useSelector((state) => state.cart);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand badge bg-primary p-2 fs-3" href="#">
            LetmeShop
          </a>

          <div
            className="collapse navbar-collapse container-fluid"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 container-fluid">
              <li className="navbar-brand">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="/product"
                  as={Link}
                >
                  Dashboard
                </Link>
              </li>
              <li className="navbar-brand ms-auto ">
                <Link className="nav-link text-light" to="/cart" as={Link}>
                  Cart {items.length}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
