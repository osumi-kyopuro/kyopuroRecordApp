import React from "react";
import { Link } from 'react-router-dom'

const headerStyle={
    backgroundColor:"#000000",
    color:"#ffffff",
    width: "100%",
    height: "10%",
    position: "sticky",
    zIndex: "999",
    top: "0",
    left: "0",
    padding:"1%",
    fontSize:"150%",
    display:"flex"
};

const headerTitleStyle={
    padding:"1%",
    top: "0",
    left: "0",
    width:"70%",
    fontWeight:"bold"
};


const startLists={
    width:"25%",
    display:"flex",
    listStyle:"none"
};

const startList={
    width:"30%",
    textDecoration:"none", 
    color:"white",
    fontSize:"80%",
    padding:"0 1%"
};

const userNameText={
    width:"30%",
    textDecoration:"none", 
    color:"white",
    fontSize:"80%",
    padding:"0 5%",
    fontWeight:"bold"
};

export const Header=(props)=>{
    const {userName}=props;
    return (
        <div style={headerStyle}>
            <div style={headerTitleStyle}>
                kyopuroRecordApp
            </div>
            <ul style={startLists}>
                {
                    userName===""&&
                    <>
                        <Link to="/signUp" style={startList}>新規登録</Link>
                        <Link to="/login" style={startList}>ログイン</Link>
                    </>
                }
                {   
                    userName!==""&&
                    <>
                        <Link to="/record" style={userNameText}>{userName}</Link>
                        <a href="/" style={startList} onClick={()=>{localStorage.setItem("userName","")}}>ログアウト</a>
                    </>
                }
            </ul>
        </div>
    );
};