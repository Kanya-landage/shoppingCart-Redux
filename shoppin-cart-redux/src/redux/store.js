import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import {persistStore,persistReducer} from "redux-persist"
import storage from'redux-persist/lib/storage';

const persistConfig = {
  key : 'main-root',
  storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  {},
  composeEnhancer(applyMiddleware(thunk))
);
const Persistore = persistStore(store);

export {Persistore}
export default store;
 