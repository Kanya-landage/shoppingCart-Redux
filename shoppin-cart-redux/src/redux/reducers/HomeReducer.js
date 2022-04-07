
import storage from "redux-persist/lib/storage";
import ActionsTypes from "../constants/ActionsTypes";

const initialState = {
  allProducts: [],
  cart: [],
};
const HomeReducer = (state = initialState, action) => {
   
  console.log(action.payload);
  switch (action.type) {
    case ActionsTypes.FETCH_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    case ActionsTypes.ADD_TO_CARTS:
      let inCart = state.cart.find((item) => item._id === action.payload._id);
     
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item._id === action.payload._id
                ? {

                    ...item,
                    qty: item.qty + 1,
                    total: parseFloat(item.total) + parseFloat(item.price),
                  }
                : item
            )
          : [
              ...state.cart,
              { ...action.payload, qty: 1, total: action.payload.price },
            ],
      };

    case ActionsTypes.REMOVE_FROM_CART: {
      
      
     
      return {
        ...state,
        cart: state.cart.filter((item,i) => i !== action.payload),
      };
    }

    case ActionsTypes.INCREMENT_CART:{

      let matchedProduct = state.cart.filter((item) => item._id === action.payload._id) 
     
      return{
        ...state,
        cart:matchedProduct &&
          state.cart.map((item) => item._id === action.payload._id ? { ...item, qty:item.qty+1, total:parseInt(item.total)+ parseInt(item.price)} : item)
        
        }
    }

    case ActionsTypes.DECREMENT_CART:{
      console.log("decrement")
      let matchedProduct = state.cart.filter((item) => item._id === action.payload._id) 
     
      return{
        ...state,
        cart:matchedProduct &&
          state.cart.map((item) => item._id === action.payload._id ? { ...item, qty:item.qty-1, total:parseInt(item.total)- parseInt(item.price)} : item)
        
        }
    }

    case ActionsTypes.POST_ORDER:{
      storage.removeItem('main-root')
      return{
        ...state,
        cart:[]
      }
    }
     default:
      return state;
  }
};
export default HomeReducer;
