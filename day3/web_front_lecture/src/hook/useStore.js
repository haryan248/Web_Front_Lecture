import { createContext, useContext } from "react";

const storeContext = createContext();

export const StoreProvider = storeContext.Provider;

export default (mapState) => {
    const store = useContext(storeContext);

    return mapState(store);
};
