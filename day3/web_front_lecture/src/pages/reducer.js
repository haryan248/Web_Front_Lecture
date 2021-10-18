import React from "react";
import Counter from "../Component/day6/Counter";
import Login from "../Component/day6/Login";
import { loginContext, LoginProvider } from "../Component/day6/loginContext";
const userInfo = { id: "react", pw: "react" };

const Reducer = () => {
    return (
        <div>
            <LoginProvider>
                <Login />
                <hr />
                <Counter />
            </LoginProvider>
        </div>
    );
};
export default Reducer;
