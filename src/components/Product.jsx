import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  console.log(item, 'item data')
  return (
    <>
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

          {item?.new && <p className="product-badge angle pink">new</p>}

          <div className="product-actions">
            <button className="btn-action">
              <AiOutlineHeart className="wishlist-icon" />
            </button>
          </div>
        </div>
        <div className="product-content">
          <Link to={`/product/${item._id}`}>
            <h3 className="product-title">{item.title}</h3>
          </Link>

          <div className="product-rating">
            <div className="rating-sec">
              <AiFillStar className="product-stars" />
             <p> {item.rating.toFixed(1)}</p>
            </div>
            <div className="review-sec">
              <p>| {item?.numReviews?.length} Reviews</p>
            </div>
          </div>
        

          <div className="price-box">
            <p className="price">₹ {item.price}</p>
          </div>
          <div className="product-btn"></div>
        </div>
      </div>
    </>
  );
};

export default Product;
