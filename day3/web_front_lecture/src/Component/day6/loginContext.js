import { createContext, useState } from "react";

const loginContext = createContext(null);

const LoginProvider = ({ children }) => {
    const [login, setLogin] = useState(false);
    return <loginContext.Provider value={{ login, setLogin }}>{children}</loginContext.Provider>;
};

export { loginContext, LoginProvider };
