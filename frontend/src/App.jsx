import './App.css';
import React, { useState,useEffect } from "react";
import { Routes,Route } from 'react-router-dom';
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {AccountAuthentication} from "./components/AccountAuthentication";


export const App=()=> {
    const [userName,setUserName]=useState("");
    const [loginSuccess,setLoginSuccess]=useState(false);

    return (
        <>
        <Header userName={userName} loginSuccess={loginSuccess}/>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/signUp" element={<AccountAuthentication pageName={"signUp"} userName={userName} setUserName={setUserName} loginSuccess={loginSuccess} setLoginSuccess={setLoginSuccess}/>} />
            <Route path="/login" element={<AccountAuthentication pageName={"login"} userName={userName} setUserName={setUserName} loginSuccess={loginSuccess} setLoginSuccess={setLoginSuccess}/>} />
        </Routes>
        <Footer/>
        </>
    );
}

