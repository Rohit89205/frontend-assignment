import React from "react";
import { BiMap, BiPhone, BiEnvelope } from "react-icons/bi";
import Payment from "../assets/images/payment.png";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-full">
              <div className="footer-content">
                
                <div className="footer-nav">
                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <h2 className="nav-title">Popular Categories</h2>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/" className="footer-nav-link">
                        Fashion
                      </Link>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/" className="footer-nav-link">
                        Electronic
                      </Link>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/" className="footer-nav-link">
                        Cosmetic
                      </Link>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/" className="footer-nav-link">
                        Health
                      </Link>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/" className="footer-nav-link">
                        Watches
                      </Link>
                    </li>
                  </ul>

                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <h2 className="nav-title">Products</h2>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/" className="footer-nav-link">
                        Prices drop
                      </Link>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/" className="footer-nav-link">
                        New products
                      </Link>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/" className="footer-nav-link">
                        Best sales
                      </Link>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/" className="footer-nav-link">
                        Contact us
                      </Link>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/" className="footer-nav-link">
                        Sitemap
                      </Link>
                    </li>
                  </ul>

                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <h2 className="nav-title">Our Company</h2>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/" className="footer-nav-link">
                        Delivery
                      </Link>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/" className="footer-nav-link">
                        Legal Notice
                      </Link>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/" className="footer-nav-link">
                        Terms and conditions
                      </Link>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/" className="footer-nav-link">
                        About us
                      </Link>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/" className="footer-nav-link">
                        Secure payment
                      </Link>
                    </li>
                  </ul>

                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <h2 className="nav-title">Services</h2>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/login" className="footer-nav-link">
                        Login
                      </Link>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/register" className="footer-nav-link">
                        Register
                      </Link>
                    </li>

                   

                    <li className="footer-nav-item">
                      <Link to="/reset-password" className="footer-nav-link">
                        Reset Password
                      </Link>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/" className="footer-nav-link">
                        Contact us
                      </Link>
                    </li>

                    <li className="footer-nav-item">
                      <Link to="/" className="footer-nav-link">
                        Sitemap
                      </Link>
                    </li>
                  </ul>

                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <h2 className="nav-title">Contact</h2>
                    </li>

                    <li className="footer-nav-item flex">
                      <div className="icon-box">
                        <BiMap />
                      </div>

                      <address className="content">
                        New Delhi, 110045, INDIA
                      </address>
                    </li>

                    <li className="footer-nav-item flex">
                      <div className="icon-box">
                        <BiPhone />
                      </div>

                      <a href="tel:+918920511882" className="footer-nav-link">
                        (+91) 89205-11882
                      </a>
                    </li>

                    <li className="footer-nav-item flex">
                      <div className="icon-box">
                        <BiEnvelope />
                      </div>

                      <a
                        href="mailto:rohit892051182@gmail.com"
                        className="footer-nav-link"
                      >
                        rohit892051182@gmail.com
                      </a>
                    </li>
                  </ul>

                
                </div>
                <div className="footer-bottom">
                  <img
                    src={Payment}
                    alt="payment method"
                    className="payment-img"
                  />

                  <p className="copyright">
                    Copyright &copy; <Link to="/">Shop</Link> all rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
