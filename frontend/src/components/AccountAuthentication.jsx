import React, { useState,useEffect } from "react";
import axios from "axios";

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

    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [loginFailure,setLoginFailure]=useState(false);
    const [loginSuccess,setLoginSuccess]=useState(false);
    const { pageName,loginSuccessFunction} = props;

    const createAccount=(userName,password)=>{
        const apiUrl="http://0.0.0.0/api/userInfo/";
        const accountData={'user_name':userName,'user_password':password};
        axios.post(apiUrl,accountData)
            .then(function (response) {
                window.location.href="/";
                setUserName("");
                setPassword("");
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    




    const loginAuthentication=(userName,password,props)=>{
        const apiUrl="http://0.0.0.0/api/userInfo/user/"+userName;
        axios.get(apiUrl)
            .then(function (response) {
                if(response.data.user_name===userName&&response.data.user_password===password){
                    console.log("認証成功！");
                    window.location.href="/record";
                    setUserName("");
                    setPassword("");
                    props.loginSuccessFunction();
                    //loginSuccessFunction();
                }
                else{
                    console.log("認証失敗");
                    setLoginFailure(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        
        <div style={accountAuthenticationStyle}>
            <div style={inputItem}>
                <label htmlFor="userName" style={itemNameStyle}>ユーザー名</label>
                <input type="text" placeholder="userName" value={userName} onChange={(event) => setUserName(event.target.value)}/>
            </div>
            <div style={inputItem}>
                <label htmlFor="password" style={itemNameStyle}>パスワード</label>
                <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            {loginSuccess===true&&<p style={{color:"red"}}>{userName}</p>}
            
            {loginFailure===true&&<p style={{color:"red"}}>ユーザー名かパスワードどちらか間違えています。</p>}
            {
                pageName==="signUp"&&<button style={signUpButtonStyle} onClick={()=>{createAccount(userName,password)}}>新規登録</button>
            }
            {
                pageName==="login"&&<button style={loginButtonStyle} onClick={()=>{loginAuthentication(userName,password,props)}}>ログイン</button>
            }
            
        </div>
    );
};