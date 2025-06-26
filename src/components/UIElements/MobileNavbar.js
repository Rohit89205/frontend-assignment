import React, { useState, useEffect, useContext } from "react";

import { useSelector } from "react-redux";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import Backdrop from "./Backdrop";
import SideDrawer from "./Sidedrawer";
import { navbarList } from "../../assets/data/navbardata";
import { Link } from "react-router-dom";
import { CartContext } from '../../cartContext';

import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { IoMenuOutline, IoHomeOutline } from "react-icons/io5";
import { BiShoppingBag, BiUser } from "react-icons/bi";

const MobileNavbar = () => {
  const { cart } = useContext(CartContext);

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const OpenDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen}>
        <div className="mobile-navbar">
          <nav className="mobile-navigation-menu">
            <div className="menu-top title">
              <h2 className="menu-title">Menu</h2>

              <button className="menu-close-btn" onClick={closeDrawerHandler}>
                <FaTimes />
              </button>
            </div>

            <ul className="mobile-menu-category-list">
              <li className="menu-category">
                <Link
                  to="/"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                  Home
                </Link>
              </li>

              <li className="menu-category">
                <Link
                  to="/"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                  Shop
                </Link>
              </li>

              {/* {navbarList.map((item, index) => {
                return (
                    <li
                      className="menu-category"
                      onClick={() => toggle(index)}
                      key={index}
                    >
                      <button className="accordion-menu">
                        <p className="menu-title">{item.catname}</p>

                        <div>
                          {clicked === index ? (
                            <FiMinus className="cat-icon" />
                          ) : (
                            <FiPlus className="cat-icon" />
                          )}
                        </div>
                      </button>

                      {clicked === index ? (
                        <ul className="submenu-category-list">
                          {item.subcategory.map((subcat, index) => {
                            return (
                              <>
                                <li className="submenu-category">
                                  <Link
                                    to="/"
                                    className="submenu-title"
                                    onClick={closeDrawerHandler}
                                    key={index}
                                  >
                                    {subcat.subcatname}
                                  </Link>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      ) : null}
                    </li>
                  // </>
                );
              })} */}

              <li
                className="menu-category"
                onClick={() => toggle(true)}
              >
                <button className="accordion-menu">
                  <p className="menu-title">Categories</p>

                  <div>
                    {clicked === true ? (
                      <FiMinus className="cat-icon" />
                    ) : (
                      <FiPlus className="cat-icon" />
                    )}
                  </div>
                </button>
                {clicked === true ? (
                  <ul className="submenu-category-list">

                    <li className="submenu-category">
                      <a
                        href="/"
                        className="submenu-title"
                        onClick={closeDrawerHandler}
                      >
                        Men's Clothing
                      </a>
                    </li>
                     <li className="submenu-category">
                      <a
                        href="/"
                        className="submenu-title"
                        onClick={closeDrawerHandler}
                      >
                        Electronics
                      </a>
                    </li>
                     <li className="submenu-category">
                      <a
                        href="/"
                        className="submenu-title"
                        onClick={closeDrawerHandler}
                      >
                        Woemn's Clothing
                      </a>
                    </li>

                  </ul>
                ) : null}
              </li>


              <li className="menu-category">
                <Link
                  to="/"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                  Blog
                </Link>
              </li>

              <li className="menu-category">
                <Link
                  to="/"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                  Hot Offers
                </Link>
              </li>
            </ul>

            <div>
              <ul className="mobile-social-container">
                <li>
                  <a href="https://www.facebook.com/rohityadav5159" className="social-link">
                    <BsFacebook />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <BsTwitter />
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/rohityadav5159/" className="social-link">
                    <BsInstagram />
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/rohit-yadav-b78394168/" className="social-link">
                    <BsLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </SideDrawer>

      <div className="mobile-bottom-navigation">
        <button className="action-btn" onClick={OpenDrawerHandler}>
          <IoMenuOutline />
        </button>

        <Link to="/cart">
          <button className="action-btn">
            <BiShoppingBag />

            <span className="count">
              {cart?.length}
            </span>
          </button>
        </Link>

        <Link to="/" className="action-btn">
          <IoHomeOutline />
        </Link>

        <Link to="/">
          <button className="action-btn">
            <BiUser />
          </button>
        </Link>
      </div>
    </>
  );
};

export default MobileNavbar;
