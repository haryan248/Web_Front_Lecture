import React, { useReducer, useState } from "react";
import { observer } from "mobx-react";
import { StoreProvider } from "../hook/useStore";
import { RootStore } from "../mobx/RootStore";
import MemoList from "../Component/day8/MemoList";

const memo = () => {
    const rootStore = new RootStore();
    return (
        <div>
            <StoreProvider value={rootStore}>
                <MemoList />
            </StoreProvider>
        </div>
    );
};
export default observer(memo);
