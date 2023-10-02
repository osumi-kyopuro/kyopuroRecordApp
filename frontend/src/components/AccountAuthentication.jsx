import React from "react";
import { Link } from 'react-router-dom'

const accountAuthenticationStyle={
    textAlign:"center",
    width:"100%",
    height:"100%",
    padding:"15% 0% 15% 0%"

}

const inputItem={
    padding:"1% 0% 1% 0%"
}

const signUpButtonStyle={
    backgroundColor:"green",
    cursor:"pointer",
    color:"white",
    borderRadius: "15%",
    padding: "0.5%",
    fontWeight:"bold"
}

const loginButtonStyle={
    backgroundColor:"blue",
    cursor:"pointer",
    color:"white",
    borderRadius: "15%",
    padding: "0.5%",
    fontWeight:"bold"
}

const itemNameStyle={
    padding: "0% 2%",
    fontWeight:"bold"
}



export const AccountAuthentication=(props)=>{
    const { pageName } = props;
    return (
        <div style={accountAuthenticationStyle}>
            <div style={inputItem}>
                <label htmlFor="userName" style={itemNameStyle}>ユーザー名</label>
                <input type="text" id="userName" placeholder="userName"/>
            </div>
            <div style={inputItem}>
                <label htmlFor="password" style={itemNameStyle}>パスワード</label>
                <input type="password" id="password" placeholder="password"/>
            </div>
            {
                pageName==="signUp"&&<Link to="/"><button style={signUpButtonStyle}>新規登録</button></Link>
            }
            {
                pageName==="login"&&<Link to="/record/"><button style={loginButtonStyle}>ログイン</button></Link>
            }
        </div>
    );
};