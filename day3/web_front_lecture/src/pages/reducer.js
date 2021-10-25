import React from "react";
import Counter from "../Component/day6/Counter";
import Login from "../Component/day6/Login";
import { LoginProvider } from "../Component/day6/loginContext";
import Todo from "../Component/day7/Todo";
import { StoreProvider } from "../hook/useStore";
import { RootStore } from "../mobx/RootStore";

const Reducer = () => {
    const rootStore = new RootStore();
    return (
        <div>
            <LoginProvider>
                <Login />
                <hr />
                <Counter />
                <hr />
                <StoreProvider value={rootStore}>
                    <Todo />
                </StoreProvider>
            </LoginProvider>
        </div>
    );
};
export default Reducer;
