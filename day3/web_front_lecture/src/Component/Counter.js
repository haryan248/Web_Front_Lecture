import React, { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(0);
    const [diff, setDiff] = useState(1);

    const increase = () => {
        setNum(num + diff);
    };
    const decrease = () => {
        setNum(num - diff);
    };
    const reset = () => {
        setNum(0);
        setDiff(1);
    };
    const handleDiff = (e) => {
        let inputValue = Number(e.target.value);
        setDiff(inputValue);
    };

    return (
        <>
            {num}
            <button onClick={increase}>up</button>
            <button onClick={decrease}>down</button>
            <button onClick={reset}>reset</button>
            <input onChange={handleDiff} />
        </>
    );
};

export default Counter;
