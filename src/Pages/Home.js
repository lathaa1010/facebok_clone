import React from "react";
import { useSelector } from "react-redux";
import Login from "./../Components/Login/Login";
import "./../Components/Login/Login.css";
// import { userReducer } from "../store/reducers/users";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import Feed from "../Components/Feed/Feed";
import "../App.css";
import Widget from "../Components/Widget/Widget";


const Home=()=>{
    const user=useSelector((state)=>state.user);
    console.log(user)
    return(
        <div className="app">
            {!user ? (<Login/>) :(
                <>
               < Header/>
               <div className="app_body">
                <h1>Home</h1>
                <Sidebar/>
                <Feed/>
                <Widget/>

               </div>
                </>
            )}
        </div>
      
    )
}

export default Home;