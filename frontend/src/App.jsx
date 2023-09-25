import './App.css';
import { Routes,Route } from 'react-router-dom';
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Check} from "./components/Check";

export const App=()=> {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/enjoy" element={<Check/>} />
      </Routes>
      <Footer/>
    </>
  );
}

