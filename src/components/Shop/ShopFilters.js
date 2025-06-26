import React, { useRef, useState } from "react";
import { BsFillDice5Fill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import check from "../../assets/images/check.png";
import Backdrop from "../UIElements/Backdrop";
import ReactSlider from "react-slider";

const ShopFilters = ({

  categoryList,
  handleCategoryChange,

  selectedCategory,
  priceRange,
  minPriceValue,
  maxPriceValue,
  setPriceRange,

}) => {
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

  // console.log(categoryList, 'cat list')

  return (
    <>
      <div className="shop-filter-toggle" onClick={() => showHideFilter()}>
        <BsFillDice5Fill className="filter-toggle-icon" />
      </div>
      <div className="filter-select" ref={mainmenuRef}>
        <div className="shop-filters">
          {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

          <div className="main-heading">
            <h2>
              Filter Products by{" "}
              <span onClick={HideFilter}>
                <FaTimes className="close-shop-sidebar" />
              </span>
            </h2>
          </div>

          <div className="all-filters">
            <div className="filters-column category">
              <h3 className="column-title">Category</h3>
              <div className="category-flex">
                {categoryList.map((category) => (
                  <>
                    <label className="custom-checkbox" key={category._id}>
                      <input
                        type="checkbox"
                        checked={selectedCategory.includes(category._id)}
                        onChange={() => handleCategoryChange(category._id)}
                      />
                      <span className="custom-checkbox__checkmark">
                        <img
                          src={check}
                          alt="checkbox-check"
                          className="img-fluid"
                        />
                      </span>
                      {category.categoryname}
                    </label>
                  </>
                ))}
              </div>
            </div>


            <div className="filters-column size">
              <h3 className="column-title">Price Range (<span>₹{priceRange[0]} - ₹{priceRange[1]}</span>)</h3>
              <div className="filter price-range">
                {/* <label>Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label> */}
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="slider-thumb"
                  trackClassName="slider-track"
                  min={minPriceValue}
                  max={maxPriceValue}
                  value={priceRange}
                  onChange={(value) => setPriceRange(value)}
                  minDistance={10}
                  step={10}
                  pearling
                  withTracks
                  ariaLabel={["Lower thumb", "Upper thumb"]}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopFilters;
