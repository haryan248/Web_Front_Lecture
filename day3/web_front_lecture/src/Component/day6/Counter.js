import React, { useReducer, useContext } from "react";
import counterReducer from "../../reducer/counterReducer";
import { loginContext } from "./loginContext";

const initialState = 0;
const Couter = () => {
    const [counter, counterDispatch] = useReducer(counterReducer, initialState);
    const { login, setLogin } = useContext(loginContext);
    const increase = () => counterDispatch({ type: "INCREASE" });
    const decrease = () => counterDispatch({ type: "DECREASE" });

    return (
        <div>
            <h1>useRedcuer 실습</h1>
            <div>{counter}</div>
            <button onClick={increase} disabled={!login}>
                +
            </button>
            <button onClick={decrease} disabled={!login}>
                -
            </button>
        </div>
    );
};
export default Couter;
