import React from "react";
import {Button} from "@mui/material";
import {auth, provider} from "../../firebase.js";
import {addUser} from "../../store/actions/users";
import { useDispatch } from "react-redux";
import { initializeApp } from 'firebase/app';



const Login=()=>{

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch(addUser(result.user));
            })
            .catch((err) => {
                console.error(err);
            });
    }; 
    return(
        <div className="login">
            <div className="login_logo">
                <div className="image">
                <img src="https://t4.ftcdn.net/jpg/05/32/20/03/360_F_532200355_odKN9Ou3WB6iHWJTFIElFtJbTuzJspY6.jpg" alt="">

                </img>
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo-2015-present.jpg" alt="">

                </img>
                </div>

            </div>
            <Button onClick={signIn}>
                Sign In
            </Button>

        </div>
    )
}

export default Login;