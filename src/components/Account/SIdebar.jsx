import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Backdrop from "../UIElements/Backdrop";
import { IoMenuOutline } from "react-icons/io5";
import { RiDashboardFill, RiProfileLine } from 'react-icons/ri';
import { MdDashboard, MdOutlineReviews } from 'react-icons/md';
import { FaUser, FaTimes } from 'react-icons/fa';
import { FiShoppingBag, FiLogOut } from 'react-icons/fi';


const SIdebar = () => {
  const mainmenuRef = useRef(null);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const showHideFilter = () => {
    mainmenuRef.current.classList.toggle("active");
    setDrawerIsOpen(true);
  };



  const HideFilter = () => {
    mainmenuRef.current.classList.toggle("active");
    setDrawerIsOpen(false);
  };

  const closeDrawerHandler = () => {
    showHideFilter();
    setDrawerIsOpen(false);
  };

  return (
    <>
      {/* <div className="user__dashboard__icon" onClick={() => showHideFilter()}>
        <IoMenuOutline className="menu-icon" />
      </div>
      <div className="account-sidebar" ref={mainmenuRef}>
        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
        <ul>
          <li>
            <NavLink exact to="/my-account" className="account-nav-link">
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/my-profile" className="account-nav-link">
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/my-orders" className="account-nav-link">
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/my-address" className="account-nav-link">
              <span>Addresses</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="" className="account-nav-link">
              <span>logout</span>
            </NavLink>
          </li>
        </ul>
      </div> */}

      <div className="user__dashboard__icon" onClick={() => showHideFilter()}>
        <IoMenuOutline className="menu-icon" />
        <span>Menu</span>
      </div>
      <div className="user_dashboard__menu" ref={mainmenuRef}>
        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
        <nav variant="pills" className="dash_pills">
          <div className="user_dashboard__heading_bar">
            <h4 className="user_dashboard__menu_title">My Dashboard</h4>
            <span
              className="user_dashboard__menu_close"
              onClick={() => HideFilter()}
            >
              <FaTimes />
            </span>
          </div>

          <ul className="menu-list">
            <li className="nav-item">
              <p className="sidebarmain-heading">
                <span>
                  <RiDashboardFill />
                </span>
                Dashboard
              </p>
              <ul>
                <li>
                  <NavLink exact to="/my-account" className={(navData) => (navData.isActive ? 'nav-link active' : 'nav-link')}>
                    <a>
                      <MdDashboard />
                      My Dashboard
                    </a>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <p className="sidebarmain-heading">
                <span>
                  <FaUser />
                </span>
                My Account
              </p>
              <ul>
                <li>
                  <NavLink exact to="/my-profile" className={(navData) => (navData.isActive ? 'nav-link active' : 'nav-link')}>
                    <a>
                      <RiProfileLine />
                      My Profile
                    </a>
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink exact to="/my-account/change-password" className={(navData) => (navData.isActive ? 'nav-link active' : 'nav-link')}>
                    <a>
                      <FaKey />
                      Change Password
                    </a>
                  </NavLink>
                </li> */}
                {/* <li className="nav-link">
                  <NavLink exact to="/my-account/saved-address">
                    <a>
                      <FaListAlt />
                      Saved Address
                    </a>
                  </NavLink>
                </li> */}
              </ul>
            </li>
            <li className="nav-item">
              <p className="sidebarmain-heading">
                <span>
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </span>
                Manage Orders
              </p>
              <ul>
                <li>
                  <NavLink exact to="/my-orders" className={(navData) => (navData.isActive ? 'nav-link active' : 'nav-link')}>
                    <a>
                      <FiShoppingBag />
                      My Orders
                    </a>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <p className="sidebarmain-heading">
                <span>
                  <i className="fa fa-pencil-square" aria-hidden="true"></i>
                </span>
                Manage Reviews & Ratings
              </p>
              <ul>
                <li className="nav-link">
                  <NavLink exact href="/my-account/ratings">
                    <a>
                      <MdOutlineReviews />
                      Reviews & Ratings
                    </a>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <p className="sidebarmain-heading">
                <span>
                  <i className="fa fa-ticket" aria-hidden="true"></i>
                </span>
                Support
              </p>
              <ul>
                <li className="nav-link">
                  <div>
                    <a>
                      <FiLogOut />
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SIdebar;
