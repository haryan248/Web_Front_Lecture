import React from "react";

const ManyProps = ({ name, age, ...props }) => {
    return (
        <>
            <h1>많은 props 사용법</h1>
            <p>My name is {props.name}</p>
            <p>I am {props.age} years old</p>
        </>
    );
};
export default ManyProps;
