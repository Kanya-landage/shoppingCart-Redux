import axios from "axios";
import ActionsTypes from "../constants/ActionsTypes";

export const fetchProducts = () => {
 
  return async function (dispatch) {
    const response = await axios.get(
      "http://interviewapi.ngminds.com/api/getAllProducts"
    );

    dispatch({
      type: ActionsTypes.FETCH_PRODUCTS,
      payload: response.data.products,
    });
  };
};

export const addToCart = (product) => {
  console.log("Add to cart action");

  return { type: ActionsTypes.ADD_TO_CARTS, payload: product };
};

export const deleteFromCart = (index) => {
  return {
    type: ActionsTypes.REMOVE_FROM_CART,
    payload: index,
  };
};


export const incrementQty = (product) => {
  console.log(product);
  return{
     type:ActionsTypes.INCREMENT_CART,
     payload:product,
  }
}

export const decrementQty = (product) => {
  return{
    type:ActionsTypes.DECREMENT_CART,
    payload:product,
  }
}

export const postOrder = (order) =>{
  console.log("post action")
  return async function(dispatch) {
    const response = await axios.post("http://interviewapi.ngminds.com/api/placeOrder",order);
    console.log(response);

    dispatch({
      type:ActionsTypes.POST_ORDER,
      payload:order
    })

  }
}