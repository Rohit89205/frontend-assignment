import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import ShopFilters from "../components/Shop/ShopFilters";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { productList } from '../assets/data/products';
import { categoryList } from '../assets/data/category';

const ProductList = () => {
  console.log(productList, 'productsData')

  const [selectedCategory, setSelectedCategory] = useState([]);

  const [products, setProducts] = useState(productList);
  const [sorting, setSort] = useState("default");


  const minPriceValue = 0;
  const maxPriceValue = Math.max(...productList.map(p => p.price));

  const [priceRange, setPriceRange] = useState([minPriceValue, maxPriceValue]);

  console.log(categoryList, 'categoryList')


  // handle category checkbox change
  const handleCategoryChange = (category) => {
    console.log(category, "cat checked");
    const updatedCategories = [...selectedCategory];
    if (updatedCategories.includes(category)) {
      updatedCategories.splice(updatedCategories.indexOf(category), 1);
    } else {
      updatedCategories.push(category);
    }
    setSelectedCategory(updatedCategories);
  };


  const sortProducts = (e) => {
    let newsortData;
    setSort(e.target.value);
    console.log(sorting);
    if (e.target.value === "a-z") {
      newsortData = products.slice().sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setProducts(newsortData);
    }
    if (e.target.value === "z-a") {
      newsortData = products.slice().sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
      setProducts(newsortData);
    }
    if (e.target.value === "low") {
      newsortData = products.slice().sort((a, b) => {
        return a.price - b.price;
      });
      setProducts(newsortData);
    }
    if (e.target.value === "high") {
      newsortData = products.slice().sort((a, b) => {
        return b.price - a.price;
      });
      setProducts(newsortData);
    }
  };

  useEffect(() => {
    // setProducts();
  }, [sorting]);

  // const filteredProducts = products.filter((product) => {
  //   if (
  //     (selectedCategory.length === 0 ||
  //       selectedCategory.some((category) =>
  //         product.categories.map((c) => c._id).includes(category)
  //       ))
  //   ) {
  //     return true;
  //   }
  //   return false;
  // });

  const filteredProducts = products.filter((product) => {
    const inCategory =
      selectedCategory.length === 0 ||
      selectedCategory.some((cat) => product.categories.map((c) => c._id).includes(cat));
    const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    return inCategory && inPriceRange;
  });

  console.log(filteredProducts, 'filteredProducts')

  console.log(products, 'products data after filter')

  return (
    <>
      <Breadcrumb activeName={"Shop"} middleName={""} middleUrl={""} />
      <section className="product-list">
        <div className="container">
          <div className="row">
            <div className="col-full">
              <div className="product-list-data">
                <div className="product-filters">
                  <div className="filter-container">
                    <div className="filter">
                      <select onChange={sortProducts} value={sorting}>
                        <option value="default">Default</option>
                        <option value="low">Price (Low to High)</option>
                        <option value="high">Price (High to Low)</option>
                        <option value="a-z">Alphabet A-Z</option>
                        <option value="z-a">Alphabet Z-A</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="product-listing">
                  <ShopFilters
                    categoryList={categoryList}
                    handleCategoryChange={handleCategoryChange}
                    selectedCategory={selectedCategory}
                    priceRange={priceRange}
                    minPriceValue={minPriceValue}
                    maxPriceValue={maxPriceValue}
                    setPriceRange={setPriceRange}
                  />
                  <Products products={filteredProducts} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
