import { useEffect, useState, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { CartContext } from '../cartContext';

const Cart = () => {
  const [subTotalAmount, setSubTotalAmount] = useState(0);
  const { cart, removeFromCart } = useContext(CartContext);

  console.log(cart, 'cart data')

  useEffect(() => {
    let proLi = cart?.map(
      (product) => product?.price * product?.quantity
    );
    console.log(proLi, "proLi");
    parseInt(setSubTotalAmount(
      proLi?.reduce((partialSum, a) => partialSum + a, 0)
    ))
  }, [subTotalAmount, cart])

  return (
    <>
      <Breadcrumb activeName={"Cart"} middleName={""} middleUrl={""} />
      <section className="cart-section">
        <div className="container">
          <div className="row">
            <div className="col-full">
              <div className="cart-content">
                <div className="cart-data">
                  <h3 className="cart-page-title title mb-1">
                    Cart items ({cart?.length})
                  </h3>
                  <div className="table-data">
                    <table className="cart-table">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart?.map((product, index) => (
                          <tr key={index}>
                            <td className="cart-image">
                              <Link to={`/product/${product?.productId?._id}`}>
                                <img
                                  src={
                                    product.image
                                  }
                                  width="120"
                                  height="120"
                                />
                              </Link>
                            </td>
                            <td className="cart-title">
                              <Link to={`/product/${product._id}`}>
                                <span className="cart-product-title">
                                  {product?.title}, 
                                </span>
                              </Link>

                            </td>
                            <td className="cart-qty">
                              <span>{product?.quantity}</span>
                            </td>
                            <td className="cart-total">
                              <span>
                                {" "}
                                ₹ {product?.price * product?.quantity}
                              </span>
                            </td>
                            <td className="cart-action">
                              <FaTimes
                                className="close-icon"
                                onClick={() => removeFromCart(product._id)}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="cart-more-action">
                

                    <Link to="/" className="btn">
                      continue shopping
                    </Link>
                  </div>
                </div>
                <div className="cart-total-summary">
                  <h2 className="cart-page-title title mb-1">ORDER SUMMARY</h2>

                  <ul className="cart-summary-list">
                    <li>
                      <span>Subtotal</span>
                      <span>₹ {subTotalAmount === NaN || subTotalAmount === undefined ? 0 : subTotalAmount}</span>
                    </li>

                    <li>
                      <span>Shipping Charges</span>
                      <span>₹ 0.00</span>
                    </li>

                    <li>
                      <span>Coupon Discount</span>
                      <span>₹ 0.00</span>
                    </li>

                    <li>
                      <span>Total Pay Amount</span>
                      <span>₹ {subTotalAmount === NaN || subTotalAmount === undefined ? 0 : subTotalAmount}</span>
                    </li>
                  </ul>

                  <button className="btn w-100">
                    {" "}
                    <Link to="/">Proceed to pay</Link>
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

export default Cart;
