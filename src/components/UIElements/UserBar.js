import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch, BiUser, BiHeart, BiShoppingBag } from "react-icons/bi";
import { productList } from "../../assets/data/products";
import { CartContext } from '../../cartContext';

const UserBar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const { cart } = useContext(CartContext);


  const fetchData = (value) => {
    const results = productList.filter((product) => {
      return (
        value &&
        product &&
        product.title &&
        product.title.toLowerCase().includes(value)
      );
    });
    setResults(results);
  };

  const handleChange = (value) => {
    console.log(value, "val");
    setInput(value);
    fetchData(value.toLowerCase());
  };

  console.log(input.length, "results");

  const goToProduct = (prod) => {
    console.log(prod, 'prod data')
    navigate(`/product/${prod}`);
    setResults([]);
    setInput("");
  }

  return (
    <>
      <section className="userbar">
        <div className="container">
          <div className="row">
            <div className="col-full">
              <div className="userbar-content">
                <Link to="/" className="header-logo">
                  <img
                    src="https://www.beyoung.in/desktop/images/common/logo.png"
                    alt="Shop Store"
                    width="150"
                  />
                </Link>

                <div className="header-search-container">
                  <input
                    type="search"
                    className="search-field"
                    value={input}
                    placeholder="Enter your product name..."
                    onChange={(e) => handleChange(e.target.value)}
                  />

                  <button className="search-btn">
                    <BiSearch className="search-icon" />
                  </button>

                  {results.length > 0 && input.length > 1 && (
                    <div className="suggestions">
                      {results.map((result, id) => {
                        return (
                          <h4
                            onClick={() => goToProduct(result._id)}
                            className="search-result"
                            type="button"
                            key={result._id}
                          >
                            <p className="title-search">🔍 {result.title}</p>
                          </h4>
                        );
                      })}
                    </div>
                  )}

                  {results.length < 1 && input.length > 1 && (
                    <div className="suggestions">
                      <div className="not-found">
                        <p className="search-not-found">
                          🔍 No Product Found, Search Something Different
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="header-user-actions">
                  <button className="action-btn">
                    <Link to="/" className="user-icon">
                      <BiUser />
                    </Link>
                  </button>

                  <button className="action-btn">
                    <Link to="/">
                      <BiHeart />
                      <span className="count">
                        0
                      </span>
                    </Link>
                  </button>

                  <button className="action-btn">
                    <Link to="/cart">
                      <BiShoppingBag />
                      <span className="count">
                        {/* {cart[0]?.cartItems?.length
                          ? cart[0]?.cartItems?.length
                          : 0} */}
                          {cart?.length}
                      </span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserBar;
