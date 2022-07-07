import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../../Context";
import { Searchbar } from "../../components/index";
import "./Header.css";
import { AuthContext } from "../../AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faHeart,
  faPalette,
  faShoppingBag,
  faShoppingCart,
  faUser,
  faUserCheck,
  faUserCircle,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const { state, dispatch } = useContext(StateContext);
  const { token, setToken } = useContext(AuthContext);
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

  console.log(isMobile);
  const location = useLocation();
  console.log(location.pathname);
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    setToken(undefined);
    navigate("/");
  };

  return (
    <>
      <div class="navigation-container flex-hz">
        <div class="navigation-item-1">
          <Link to="/" className="links">
            {" "}
            <h5 class="lib-name-1">
              Naari <span class="lib-name-2">Care</span>
            </h5>
          </Link>
        </div>
        <Link to="/" className="links lib-name-sm">
          {" "}
          <h5 class="lib-name-1">
            Naari <span class="lib-name-2">Care</span>
          </h5>
        </Link>
        {!isMobile && <Searchbar />}
        {token === undefined ? (
          <>
            <div class="navigation-item-3 flex-hz">
              <Link to="/signin">
                {" "}
                <button class="btn btn-primary">Signin</button>
              </Link>
              <Link to="/signin">
                {" "}
                <FontAwesomeIcon
                  className="cart-icon"
                  icon={faShoppingCart}
                ></FontAwesomeIcon>
              </Link>
              <Link to="/signin">
                {" "}
                <FontAwesomeIcon
                  className="cart-icon"
                  icon={faHeart}
                ></FontAwesomeIcon>
              </Link>
              <i class="fa fa-search search-icon-responsive"></i>
            </div>
          </>
        ) : (
          <>
            <div class="navigation-item-3 flex-hz">
              <button class="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
              <Link to="/user_profile">
                {" "}
                <FontAwesomeIcon
                  icon={faUser}
                  className="user-icon"
                ></FontAwesomeIcon>
              </Link>
              <Link to="/cartpage">
                <i class="fa fa-shopping-cart">
                  <span class="badge-w-icon">{state.cart.length}</span>
                </i>
              </Link>
              <Link to="/wishlistpage">
                <i class="fa fa-heart">
                  <span class="badge-w-icon">{state.wishlist.length}</span>
                </i>
              </Link>
              <i class="fa fa-search search-icon-responsive"></i>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export { Header };
