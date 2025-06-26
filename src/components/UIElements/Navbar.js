import React from "react";
import { Link } from "react-router-dom";
import ElectronicBanner from "../../assets/images/electronics-banner-1.jpg";
import MenBanner from "../../assets/images/mens-banner.jpg";
import WomenBanner from "../../assets/images/womens-banner.jpg";
import ComputerBanner from "../../assets/images/electronics-banner-2.jpg";

const Navbar = () => {


  return (
    <>
      <section className="navbar">
        <div className="container">
          <div className="row">
            <div className="col-full">
              <ul className="desktop-menu-category-list">
                <li className="menu-category">
                  <Link to="/" className="menu-title">
                    Home
                  </Link>
                </li>

                <li className="menu-category">
                  <Link to="/" className="menu-title">
                    Shop
                  </Link>
                </li>

                <li className="menu-category">
                  <Link to="/" className="menu-title">
                    Categories
                  </Link>

                  <div className="dropdown-panel">
                    <ul className="dropdown-panel-list">
                      <li className="submenu-title">
                        <Link to="/">Electronics</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Desktop</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Laptop</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Camera</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Tablet</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Headphone</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">
                          <img
                            src={ElectronicBanner}
                            alt="headphone collection"
                            width="250"
                            height="119"
                          />
                        </Link>
                      </li>
                    </ul>

                    <ul className="dropdown-panel-list">
                      <li className="submenu-title">
                        <Link to="/">Men's</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Formal</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Casual</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Sports</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Jacket</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Sunglasses</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">
                          <img
                            src={MenBanner}
                            alt="men's fashion"
                            width="250"
                            height="119"
                          />
                        </Link>
                      </li>
                    </ul>

                    <ul className="dropdown-panel-list">
                      <li className="submenu-title">
                        <Link to="/">Women's</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Formal</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Casual</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Perfume</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Cosmetics</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Bags</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">
                          <img
                            src={WomenBanner}
                            alt="women's fashion"
                            width="250"
                            height="119"
                          />
                        </Link>
                      </li>
                    </ul>

                    <ul className="dropdown-panel-list">
                      <li className="submenu-title">
                        <Link to="/">Electronics</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Smart Watch</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Smart TV</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Keyboard</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Mouse</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">Microphone</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/">
                          <img
                            src={ComputerBanner}
                            alt="mouse collection"
                            width="250"
                            height="119"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="menu-category">
                  <Link to="/" className="menu-title">
                    About
                  </Link>
                </li>

                <li className="menu-category">
                  <Link to="/" className="menu-title">
                    Contact
                  </Link>
                </li>

                <li className="menu-category">
                  <Link to="#" className="menu-title">
                    Categories
                  </Link>

                  <ul className="dropdown-list">

                    <li className="dropdown-item">
                      <Link to="/">Electronics</Link>
                    </li>
                     <li className="dropdown-item">
                      <Link to="/">Mouse</Link>
                    </li>
                     <li className="dropdown-item">
                      <Link to="/">Microphone</Link>
                    </li>
                     <li className="dropdown-item">
                      <Link to="/">Keyboard</Link>
                    </li>
                     <li className="dropdown-item">
                      <Link to="/">Smart TV</Link>
                    </li>

                  </ul>
                </li>

                <li className="menu-category">
                  <Link to="/" className="menu-title">
                    Blog
                  </Link>
                </li>

                <li className="menu-category">
                  <Link to="/" className="menu-title">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
