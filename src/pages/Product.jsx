import React, { useState, useEffect, useContext  } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import {  AiFillStar } from "react-icons/ai";
import { BsTwitter, BsLinkedin, BsEnvelope } from "react-icons/bs";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import ReactHtmlParser from "react-html-parser";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SimilarProductSlider from "../components/SingleProduct/SimilarProductSlider";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { productList } from "../assets/data/products";
import { CartContext } from '../cartContext';

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const { addToCart } = useContext(CartContext);

  const product = productList.find((product) => product._id === productId);

  console.log(product, "product details")

  return (
    <>
      <Breadcrumb
        activeName={product?.title}
        middleName={"Shop"}
        middleUrl={"/products"}
      />
      <section className="product-details">
        <div className="container">
          <div className="row product-detail-row">
            <div className="col-half product-detail-col">
              <div className="product-detail-image">
                <div className="product-main-image">
                  <img
                    src={product?.image}
                    alt={product?.title}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-half product-detail-col">
              <div className="product-detail-content">
                <h3 className="product-detail-title">{product?.title}</h3>
                <div className="product-detail-rating">
                  <div className="product-rate">
                    <AiFillStar className="product-stars" />
                    <p>{product.rating.toFixed(1)}</p>
                  </div>

                  <div className="product-review">
                    <p>{product?.numReviews?.length} Reviews</p>
                  </div>
                </div>
                <div className="product-detail-price">
                  <span>₹ {product?.price}</span>{" "}
                  {product?.oldPrice > 0 ? (
                    <del>₹ {product?.oldPrice}</del>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div className="product-detail-desc">
                    {ReactHtmlParser(product?.desc)}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1990
                  </div>
                </div>
                <div className="add-container">
                  <button className="btn" onClick={() => addToCart(product)}>
                    ADD TO CART
                  </button>
                </div>
                <div className="product-social-share">
                  <h4>Share on : </h4>
                  <ul className="product-social-container">
                    <li>
                      <a href="#" className="social-link">
                        <FaFacebookF />
                      </a>
                    </li>

                    <li>
                      <a href="#" className="social-link">
                        <BsTwitter />
                      </a>
                    </li>

                    <li>
                      <a href="#" className="social-link">
                        <BsEnvelope />
                      </a>
                    </li>

                    <li>
                      <a href="#" className="social-link">
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-link">
                        <FaWhatsapp />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-extra-details">
        <div className="container">
          <div className="row">
            <div className="col-full">
              <Tabs>
                <TabList>
                  <Tab>Description</Tab>
                  <Tab>Benefits</Tab>
                </TabList>

                <TabPanel>{ReactHtmlParser(product?.desc)}</TabPanel>
                <TabPanel>{ReactHtmlParser(product?.benefits)}</TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <SimilarProductSlider />
    </>
  );
};

export default Product;
