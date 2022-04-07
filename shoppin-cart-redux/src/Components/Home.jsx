import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addToCart } from "../redux/actions/HomeActions";
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sortedData, setSortedData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(
    JSON.parse(localStorage.getItem("selectedProductArray")) || []
  );
  const [sorting, setSorting] = useState("default");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [pages, setPages] = useState([]);
  const [paginatedRecords, setPaginatedRecords] = useState([]);

  const allProductsFromRedux = useSelector(
    (state) => state.product.allProducts
  );

  const allProducts = useSelector(
    (state) => state
  );
  console.log(allProducts)
  let cartData = useSelector((state) => state.product.cart);
  console.log(cartData);
  

 
  

  useEffect(() => {
    dispatch(fetchProducts());
    }, []);


 useEffect(() => {
  setPages(parseInt(allProductsFromRedux.length / itemsPerPage));
  setPaginatedRecords(allProductsFromRedux.slice(0, 5));
 },[allProductsFromRedux])

 

  const handleSorting = (e) => {
    setSorting(e.target.value);
    if (e.target.value === "default") {
      getAllProducts();
    }

    if (e.target.value === "high to low") {
      let highToLow = allProductsFromRedux.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      setSortedData(highToLow);
    }

    if (e.target.value === "low to high") {
      let lowToHigh = allProductsFromRedux.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      setSortedData(lowToHigh);
    }
  };

  const navigateToCart = () => {
    navigate("/Cart");
  };

  const fetchLatestProduct = (startIndex, endIndex, data) => {
    setPaginatedRecords(data.slice(startIndex, endIndex));
  };

  return (
    <div>
      <div className="container">
        <h1>
          <a href="/">My Ecommerce Site</a>
          <span className="pull-right">
            <a onClick={() => navigateToCart()}>Cart ({cartData ? cartData.length : 0})</a>
          </span>
        </h1>
        <hr />
        <select
          style={{ float: "left" }}
          value={sorting}
          onChange={(e) => handleSorting(e)}
        >
          <option value="default">Default</option>
          <option value="high to low">High to Low</option>
          <option value="low to high">Low to High</option>
        </select>
        <br />
        <div className="row">
          {paginatedRecords?.map((product, index) => {
           
            return (
              <div className="col-md-3" key={index}>
                <div
                  className={
                    (index % 4 === 0 && "bg-info") ||
                    (index % 4 === 1 && "bg-success") ||
                    (index % 2 === 0 && "bg-warning") ||
                    (index % 2 === 1 && "bg-danger")
                  }
                >
                  <div style={{ float: "left" }}></div>
                  <img
                    src={`http://interviewapi.ngminds.com/${product.image}`}
                    width="100"
                    height="200"
                  />
                  <br />
                  <p>{product.name}</p>
                  <p>
                    <i className="fa fa-inr"></i>
                    {product.price}
                  </p>
                  <a
                    className="btn btn-warning"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to Cart
                  </a>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
        <div className="footer">
          <Pagination
            itemsPerPage={itemsPerPage}
            pages={pages}
            fetchLatestProduct={fetchLatestProduct}
            sortedData={sortedData}
          />

          <label className="itemsPerPage" style={{ float: "right" }}>
            Items per Page
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(e.target.value)}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
export default  React.memo(Home);
function addNewItem(product, setSelectedProduct, selectedProduct) {
  let productWithQuantity = {
    ...product,
    qty: 1,
    total: parseInt(product.price * 1),
  };
  setSelectedProduct([...selectedProduct, productWithQuantity]);
}
