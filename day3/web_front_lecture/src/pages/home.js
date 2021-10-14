import { Link } from "react-router-dom";

const home = () => {
    return (
        <>
            <button>
                <Link to="props">3주차 실습</Link>
            </button>
            <button>
                <Link to="todo">4주차 실습</Link>
            </button>
            <button>
                <Link to="register">5주차 과제</Link>
            </button>
        </>
    );
};
export default home;
