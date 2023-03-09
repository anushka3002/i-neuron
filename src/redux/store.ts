import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducer/index.js";
import reduxThunk from "redux-thunk";
import thunk from "redux-thunk";

const middlewares = [reduxThunk]

// if(process.env.NODE_ENV === "development"){
//     mmiddlewares.push(logger)
// }

const store = createStore(rootReducer,applyMiddleware(...middlewares))
export default store;