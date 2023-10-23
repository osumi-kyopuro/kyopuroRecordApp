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
    const [createUserSuccess,setCreateUserSuccess]=useState(false);
    const [saveRecord,setSaveRecord]=useState({});
    const [createRecordSuccess,setCreateRecordSuccess]=useState(false);
    const [editRecordSuccess,setEditRecordSuccess]=useState(false);
    const [deleteRecordSuccess,setDeleteRecordSuccess]=useState(false);

    return (
        <>
            <Header userName={userName} />
            <Routes>
                <Route path="/" element={<Main createUserSuccess={createUserSuccess}/>} />
                <Route path="/createRecord" element={<RecordCreation pageName={"createRecord"} userName={userName} saveRecord={saveRecord} createRecordSuccess={createRecordSuccess} setCreateRecordSuccess={setCreateRecordSuccess} editRecordSuccess={editRecordSuccess} setEditRecordSuccess={setEditRecordSuccess} deleteRecordSuccess={deleteRecordSuccess} setDeleteRecordSuccess={setDeleteRecordSuccess}/>} />
                <Route path="/editRecord" element={<RecordCreation pageName={"editRecord"} userName={userName} saveRecord={saveRecord} createRecordSuccess={createRecordSuccess} setCreateRecordSuccess={setCreateRecordSuccess} editRecordSuccess={editRecordSuccess} setEditRecordSuccess={setEditRecordSuccess} deleteRecordSuccess={deleteRecordSuccess} setDeleteRecordSuccess={setDeleteRecordSuccess}/>} />
                <Route path="/record" element={<Record userName={userName} setSaveRecord={setSaveRecord} createRecordSuccess={createRecordSuccess} setCreateRecordSuccess={setCreateRecordSuccess} editRecordSuccess={editRecordSuccess} setEditRecordSuccess={setEditRecordSuccess} deleteRecordSuccess={deleteRecordSuccess} setDeleteRecordSuccess={setDeleteRecordSuccess} />} />
                <Route path="/signUp" element={<AccountAuthentication pageName={"signUp"} setUserName={setUserName} setCreateUserSuccess={setCreateUserSuccess}/>} />
                <Route path="/login" element={<AccountAuthentication pageName={"login"} setUserName={setUserName} setCreateUserSuccess={setCreateUserSuccess}/>} />
            </Routes>
            <Footer/>
        </>
    );
}

