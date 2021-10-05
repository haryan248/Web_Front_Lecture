import React from "react";

const ConditionalProps = (props) => {
    return (
        <>
            <h1>bool 사용법</h1>
            {props.isVip && <span>Hi Thanks for vip</span>}
            <p>My name is {props.name}</p>
            <p>I am {props.age} years old</p>
        </>
    );
};
export default ConditionalProps;
