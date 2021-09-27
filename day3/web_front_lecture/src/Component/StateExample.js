import React, { useState } from "react";

const StateExample = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((count) => count + 1);
    };
    const handleMinusClick = () => {
        setCount((count) => count - 1);
    };
    const handleResetClick = () => {
        setCount((count) => (count = 0));
    };
    const handleSquaredClick = () => {
        setCount((count) => count * count);
    };

    return (
        <>
            <h2>count is {count}</h2>
            <button onClick={handleClick}>+</button>
            <button onClick={handleMinusClick}>-</button>
            <button onClick={handleResetClick}>초기화</button>
            <button onClick={handleSquaredClick}>제곱</button>
        </>
    );
};

export default StateExample;
