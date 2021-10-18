import { loginContext } from "./loginContext";
import { useContext, useState } from "react";
const userInfo = { id: "react", pw: "react" };

export default function Login() {
    // const { id, pw } = useContext(loginContext);
    const { login, setLogin } = useContext(loginContext);
    const [auth, setAuth] = useState({ id: "", pw: "" });

    const checkLogin = () => {
        if (userInfo.id === auth.id && userInfo.pw === auth.pw) {
            setLogin(!login);
            alert("login success !!!");
        } else {
            alert("login fail !!!");
        }
    };
    return (
        <div>
            <h1>contextAPI 실습</h1>
            <label>ID</label>
            <div>
                <input type="text" onChange={(e) => setAuth({ ...auth, id: e.target.value })} />
            </div>
            <label>PASSWORD</label>
            <div>
                <input type="text" onChange={(e) => setAuth({ ...auth, pw: e.target.value })} />
            </div>
            <button onClick={checkLogin}>login</button>
        </div>
    );
}
