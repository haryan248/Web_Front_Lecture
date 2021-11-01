import { Link } from "react-router-dom";
import React from "react";
import "../style/home.css";
const home = () => {
    return (
        <>
            <div className="home-container">
                <button>
                    <Link to="props">3주차 실습</Link>
                </button>
                <button>
                    <Link to="todo">4주차 실습</Link>
                </button>
                <button>
                    <Link to="register">5주차 과제</Link>
                </button>
                <button>
                    <Link to="reducer">6주차 실습, 7주차 실습</Link>
                </button>
                <button>
                    <Link to="memo">8주차 실습</Link>
                </button>
            </div>
        </>
    );
};
export default home;
