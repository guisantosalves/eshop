import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <StorefrontIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle">eShop</h2>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">hello guest</span>
          <span className="nav__itemLinetwo">Sign in</span>
        </div>

        <div className="nav__item">
          <span className="nav__itemLineOne">your</span>
          <span className="nav__itemLinetwo">shop</span>
        </div>

        <div className="nav__itemBasket">
          <ShoppingBasketIcon />
          <span className="nav__itemLinetwo nav__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
