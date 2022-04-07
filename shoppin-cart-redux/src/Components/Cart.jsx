import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart,incrementQty,decrementQty } from "../redux/actions/HomeActions";
function Cart() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let cartData = useSelector((state) => state.product.cart);
  console.log(cartData);
  
  const removeFromCart = (index) => {
    console.log(index);
    dispatch(deleteFromCart(index));
  };
 

  return (
    <div className="container">
      <div className="row">
        <h1>
          <a href="/">My Ecommerce Site</a>
          <span className="pull-right">
            <a href="cart.html">{cartData.length && cartData.length}</a>
          </span>
        </h1>
        <hr />
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">MY CART ({cartData.length})</div>
            <div className="panel-body">
              <form>
                {cartData.length
                  ? cartData.map((selectProduct, index) => {
                      return (
                        <div key={index}>
                          {console.log(selectProduct)}
                          <div className="row" >
                            <div className="col-md-3">
                              <img
                                src={`http://interviewapi.ngminds.com/${selectProduct.image}`}
                                width="100px"
                                height="200px"
                              />
                            </div>
                            <div className="col-md-3">
                              {selectProduct.name}
                              <br />
                              <i className="fa fa-inr"></i>
                              {selectProduct.price}
                            </div>
                            <div className="col-md-3">
                              {" "}
                              quantity
                              <br />
                              <button
                                type="button"
                                onClick={(e) => dispatch(decrementQty(selectProduct))}
                              >
                                -
                              </button>
                              <input
                                ng-model="qty"
                                type="number"
                                name="quantity"
                                className="qty"
                                size="5px"
                                value={selectProduct.qty ? selectProduct.qty : 1}
                              />
                              <button
                                type="button"
                                onClick={() => dispatch(incrementQty(selectProduct))}
                              >
                                +
                              </button>
                            </div>
                            <div className="col-md-3">
                              {" "}
                              <a
                                className="btn btn-warning"
                                onClick={() => removeFromCart(index)}
                              >
                                remove
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : console.log(null)}
              </form>
              <hr />
              <div className="row">
                <div className="col-md-9">
                  <label className="pull-right">Amount Payable</label>
                </div>
                <div className="col-md-3 ">
                  {cartData
                    .map((o) => o.total)
                    .reduce((a, b) => parseInt(a + b))}
                  {/* {products.reduce(function(a,b){
                        return{total:a.price+b.price}
                    })} */}
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <a className="btn btn-success" onClick={() => navigate("/home")}>
                Continue Shopping
              </a>
              <a
                className="pull-right btn btn-danger"
                onClick={() => navigate("/placeOrder")}
              >
                Place Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
