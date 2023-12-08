import React from "react";
import{BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { userReducer } from "./store/reducers/users";
import "./App.css";

const store=createStore(userReducer);


const App=()=>{
  return(
    <Provider store={store}>
      <div className="app_body">
    <Router>
      <Routes>
        <Route path="/" exact Component={Home}>

        </Route>
      </Routes>
    </Router>
    </div>
    </Provider>
   
  )
}

export default App;