import React, { useState, useEffect } from "react";
import "../style/register.css";
import { AREACODE, AREA } from "../util/constantVal";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [areaNumber, setAreaNumber] = useState("");
    const [number, setNumber] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [errorList, setErrorList] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setErrorList(validate());
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errorList).length === 0 && isSubmitting) {
            alert(`이름 : ${name},이메일 : ${email}, 전화번호 : ${(areaNumber, number)}, 주소 : ${(city, address)}`);
        }
    }, [errorList]);

    const handleName = (e) => {
        setName(() => e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(() => e.target.value);
    };

    const handleAreaCode = (e) => {
        let area = e.target.value;
        setAreaNumber(() => AREACODE[area]);
        if (area !== "휴대폰") setCity(() => area);
        else setCity("");
    };

    const handleNumber = (e) => {
        setNumber(() => e.target.value);
    };

    const handleAddress = (e) => {
        setAddress(() => e.target.value);
    };

    const validateName = () => {
        if (name.length < 3 || name.length > 5) return "이름은 3-5글자로 입력해주세요.";
    };

    const validateEmail = () => {
        let emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*(\.(com|net|io)$)/i;
        if (email.length === 0) {
            return "이메일을 입력해주세요.";
        } else if (email.match(emailRule) === null) {
            return "정확한 이메일을 입력해주세요.";
        }
    };

    const validateNumber = () => {
        let numberRule = /^[0-9]*$/;
        if (number.length < 7 || number.length > 8) return "번호는 7~8자로 입력해주세요.";
        else if (number.match(numberRule) === null) {
            return "숫자만 입력가능합니다.";
        }
    };

    const handleAddressSelect = (e) => {
        setCity(e.target.value);
    };

    const validateAddress = () => {
        if (address.length === 0) return "빈칸은 입력하실 수 없습니다.";
    };

    const validate = () => {
        let errors = {};
        if (validateName()) errors.name = validateName();
        if (validateEmail()) errors.email = validateEmail();
        if (validateNumber()) errors.number = validateNumber();
        if (validateAddress()) errors.address = validateAddress();
        return errors;
    };

    const AreaCodeList = Object.keys(AREACODE).map((key) => (
        <option key={key} value={key}>
            {AREACODE[key]}
        </option>
    ));

    const AddressList = AREA.map((item) => (
        <option key={item} value={item}>
            {item}
        </option>
    ));

    return (
        <>
            <div className="register-container">
                <h1>useEffect 실습</h1>
                <div className="register-input--container">
                    <form className="form-container">
                        <div className="register-input-name">
                            <div>이름</div>
                            <input type="text" onChange={handleName} value={name}></input>
                            {errorList.name && <div className="error">{errorList.name}</div>}
                        </div>
                        <div className="register-input-email">
                            <div>이메일</div>
                            <input type="text" onChange={handleEmail} value={email}></input>
                            {errorList.email && <div className="error">{errorList.email}</div>}
                        </div>
                        <div className="register-input-number">
                            <div>전화번호</div>
                            <select onChange={handleAreaCode} value={areaNumber}>
                                {AreaCodeList}
                            </select>
                            <input type="text" onChange={handleNumber} value={number}></input>
                            {errorList.number && <div className="error">{errorList.number}</div>}
                        </div>
                        <div className="register-input-address">
                            <div>주소</div>
                            <select onChange={handleAddressSelect} value={city}>
                                {AddressList}
                            </select>
                            <input type="text" onChange={handleAddress} value={address}></input>
                            {errorList.address && <div className="error">{errorList.address}</div>}
                        </div>
                        <button onClick={onSubmit}>저장하기</button>
                    </form>
                </div>
            </div>
        </>
    );
};
export default Register;
