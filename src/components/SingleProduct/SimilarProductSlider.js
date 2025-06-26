import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import { productList } from "../../assets/data/products";

const SimilarProductSlider = () => {


  let similarProductSliderSettting = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };

  return (
    <>
      <section className="similar-product-section">
        <div className="container">
          <div className="row">
            <div className="col-full">
              <Title title="Similar Products" />

              <div className="similar-product-slider">
                <Slider {...similarProductSliderSettting}>
                  {productList.map((item, index) => {
                    return (
                      <div className="pro-slide" key={index}>
                      <div className="single-product-card">
                        <div className="product-img">
                          <Link to={`/product/${item._id}`}>
                            <img
                              src={item?.image}
                              alt={item.title}
                              width="300"
                              className="product-img default img-fluid"
                            />
                          </Link>

                          <p className="product-badge angle pink">new</p>

                        
                        </div>
                        <div className="product-content">
                         

                          <Link to={`/product/${item._id}`}>
                            <h3 className="product-title">{item.title}</h3>
                          </Link>

                          <div className="product-rating">
                            <AiFillStar className="product-stars" />
                            <AiFillStar className="product-stars" />
                            <AiFillStar className="product-stars" />
                            <AiOutlineStar className="product-stars" />
                            <AiOutlineStar className="product-stars" />
                          </div>

                          <div className="price-box">
                            <p className="price">₹ {item.price}</p>
                          </div>
                          <div className="product-btn"></div>
                        </div>
                      </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SimilarProductSlider;
