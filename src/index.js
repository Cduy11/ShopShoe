import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import  shoeReducer  from "./redux/shoeReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rootReducer = combineReducers({ shoeReducer });
// khi có nhiều reducer thì phải gộp nó thành rootReducer
// tạo store truyền vào Provider
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
