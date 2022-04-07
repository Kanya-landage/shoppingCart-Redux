import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector , useDispatch } from "react-redux";
 import { postOrder } from "../redux/actions/HomeActions";
function PlaceOrder() {
  const navigate = useNavigate();
  let cartData = useSelector((state) => state.product.cart);
  console.log(cartData);
  const [finalProducts, setFinalProducts] = useState([]);
  const [copiedProducts, setCopiedProducts] = useState([]);
  const [personName, setPersonName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const dispatch = useDispatch();
  console.log(finalProducts);

  useEffect(() => {
    setCopiedProducts([...finalProducts]);
  }, []);

  const PlaceOrder = async () => {
    const orderObject = {
      personName: personName,
      deliveryAddress: deliveryAddress,
      productsOrdered: cartData.map(function (product) {
        console.log(product._id);
        product["productID"] = product["_id"];
        delete product._id;
        delete product.name;
        delete product.image;
        return product;
      }),
    };
   
    dispatch(postOrder(orderObject));
    // const response = await axios.post(
    //   " http://interviewapi.ngminds.com/api/placeOrder",
    //   orderObject
    // );
    // console.log(response);
    navigate("/home");
  };
  return (
    <div class="container">
      <div class="row">
        <h1>
          <a href="/">My Ecommerce Site</a>

          <span class="pull-right">
            <a onClick={() => navigate("/Cart")}>
              Cart ({cartData.length && cartData.length})
            </a>
          </span>
        </h1>
        <hr />
        <div class="col-md-12">
          <div class="panel panel-default">
            <div class="panel-heading">Place Order</div>
            <div class="panel-body">
              <form class="form-horizontal" role="form">
                <table class="table table-striped">
                  <thead class="table-head">
                    <tr>
                      <td>Product Name</td>
                      <td> Quntity</td>
                      <td> SubTotal</td>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData.length
                      ? cartData.map((product) => {
                          return (
                            <tr>
                              <td>{product.name} </td>
                              <td>{product.qty}</td>
                              <td>
                                <i class="fa fa-inr"></i>
                                {product.price}
                              </td>
                            </tr>
                          );
                        })
                      : console.log(null)}

                    <tr>
                      <td>
                        <strong>total</strong>
                      </td>
                      <td>
                        <strong>
                          {cartData
                            .map((o) => o.qty)
                            .reduce((a, b) => parseInt(a + b))}
                        </strong>
                      </td>
                      <td>
                        <strong>
                          <i class="fa fa-inr"></i>
                          {cartData
                            .map((o) => o.total)
                            .reduce((a, b) => parseInt(a + b))}
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />

                <br />
                <div class="form-group">
                  <label htmlFor="inputName3" class="col-sm-2 control-label">
                    Enter Order Details
                  </label>
                </div>
                <div class="form-group">
                  <label htmlFor="inputName3" class="col-sm-2 control-label">
                    Name
                  </label>
                  <div class="col-sm-6">
                    <input
                      class="form-control"
                      id="inputName3"
                      placeholder="Name"
                      onChange={(e) => setPersonName(e.target.value)}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label htmlFor="inputEmail3" class="col-sm-2 control-label">
                    Address
                  </label>
                  <div class="col-sm-6">
                    <textarea
                      class="form-control"
                      id="inputEmail3"
                      placeholder="Deliver Address"
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label"></label>
                  <div class="col-sm-6">
                    <a class="btn btn-warning" onClick={() => PlaceOrder()}>
                      Confirm Order
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
