import './App.css';
import React from "react";
import axios from "axios";
import { Routes,Route } from 'react-router-dom';
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {AccountAuthentication} from "./components/AccountAuthentication";

const baseURL = ""

export const App=()=> {

  React.useEffect(()=>{
    axios.get(baseURL)
  })
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/signUp" element={<AccountAuthentication pageName={"signUp"}/>} />
        <Route path="/login" element={<AccountAuthentication pageName={"login"}/>} />
      </Routes>
      <Footer/>
    </>
  );
}

