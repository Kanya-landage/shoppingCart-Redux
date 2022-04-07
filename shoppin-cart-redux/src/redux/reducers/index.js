import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";
const rootReducer = combineReducers({
  product: HomeReducer,
});
export default rootReducer;
