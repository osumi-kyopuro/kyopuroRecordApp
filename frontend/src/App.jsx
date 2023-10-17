import './App.css';
import React, { useState } from "react";
import { Routes,Route } from 'react-router-dom';
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {AccountAuthentication} from "./components/AccountAuthentication";
import {Record} from "./components/Record";
import {RecordCreation} from "./components/RecordCreation";



export const App=()=> {
    const [userName,setUserName]=useState(localStorage.getItem("userName"));
    const [loginSuccess,setLoginSuccess]=useState(false);
    const [saveRecord,setSaveRecord]=useState({});

    return (
        <>
            <Header userName={userName}/>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/createRecord" element={<RecordCreation pageName={"createRecord"} userName={userName} saveRecord={saveRecord}/>} />
                <Route path="/editRecord" element={<RecordCreation pageName={"editRecord"} userName={userName} saveRecord={saveRecord} />} />
                <Route path="/record" element={<Record userName={userName} setSaveRecord={setSaveRecord}/>} />
                <Route path="/signUp" element={<AccountAuthentication pageName={"signUp"} setUserName={setUserName} setLoginSuccess={setLoginSuccess}/>} />
                <Route path="/login" element={<AccountAuthentication pageName={"login"} setUserName={setUserName} setLoginSuccess={setLoginSuccess}/>} />
            </Routes>
            <Footer/>
        </>
    );
}

