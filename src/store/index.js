import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";


// const middlewares = [thunk];
// const middlewareEnhancer = applyMiddleware(...middlewares);
const middlewareEnhancer = applyMiddleware(thunk);

export const store = createStore(rootReducer, composeWithDevTools(middlewareEnhancer))