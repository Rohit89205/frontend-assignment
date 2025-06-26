import React, { useState } from "react";
import Product from "./Product";

const Products = ({ products }) => {
  const [visible, setVisible] = useState(10);

    const showMoreProducts = () => {
    setVisible((oldValue) => oldValue + 10);
  };


  console.log(products, 'prod in lists')
  return (
    <section className="product-list">
      <div className="product-grid">
        {products.slice(0, visible)?.map((item, index) => (
          <Product item={item} key={index} />
        ))}
      </div>

        {visible <= products.length ? (
        <div className="loadmore-btn">
          <div style={{ textAlign: "center" }} className="col-12  pt-3">
            <button onClick={showMoreProducts} className="btn btn-loadmore">
              Load More <i className="fa fa-refresh" />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Products;
