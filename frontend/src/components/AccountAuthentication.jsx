import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
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
    const [password,setPassword]=useState("");
    const [password2,setPassword2]=useState("");
    const [loginFailure,setLoginFailure]=useState(false);
    const [usedUserName,setUsedUserName]=useState(false);
    const [notMatchPassword,setNotMatchPassword]=useState(false);
    const navigate = useNavigate();
    const { pageName,userName,setUserName,loginSuccess,setLoginSuccess} = props;


    const createAccount=(userName,password,password2)=>{
        const apiUrl="http://0.0.0.0/api/userInfo/user/"+userName;
        axios.get(apiUrl)
            .then(function (response) {
                if(response.data.user_name===userName){
                    setUsedUserName(true);
                }
            })
            .catch(function (error) {
                setUsedUserName(false);
                console.log(error);
            });
        if(!usedUserName&&password===password2){
            const apiUrl="http://0.0.0.0/api/userInfo/";
            const accountData={'user_name':userName,'user_password':password};
            axios.post(apiUrl,accountData)
                .then(function () {
                    navigate('/');
                    setUserName("");
                    setPassword("");
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else if(!usedUserName){
            setNotMatchPassword(true);
        }
    }
    




    const loginAuthentication=(userName,password)=>{
        const apiUrl="http://0.0.0.0/api/userInfo/user/"+userName;
        axios.get(apiUrl)
            .then(function (response) {
                if(response.data.user_password===password){
                    console.log("認証成功！");
                    navigate('/record');
                    setLoginSuccess(true);
                    setUserName(userName);
                }
                else{
                    console.log("認証失敗");
                    setLoginFailure(true);
                }
            })
            .catch(function (error) {
                setLoginFailure(true);
                console.log(error);
            });
    }


    return (
        
        <div style={accountAuthenticationStyle}>
            <div style={inputItem}>
                <label htmlFor="userName" style={itemNameStyle}>ユーザー名</label>
                <input type="text" placeholder="userName" value={userName} maxLength="20" required onChange={(event) => setUserName(event.target.value)}/>
            </div>
            <div style={inputItem}>
                <label htmlFor="password" style={itemNameStyle}>パスワード</label>
                <input type="password" placeholder="password" value={password} minLength="3" maxLength="30" required onChange={(event) => setPassword(event.target.value)}/>
            </div>
            {loginSuccess&&<p style={{color:"red"}}>{userName}</p>}
            
            {
                pageName==="signUp"&&
                <>
                    <div style={inputItem}>
                        <label htmlFor="password2" style={itemNameStyle}>パスワード確認</label>
                        <input type="password" placeholder="password2" value={password2} minLength="3" maxLength="30" required onChange={(event) => setPassword2(event.target.value)}/>
                    </div>
                    <button style={signUpButtonStyle} onClick={()=>{createAccount(userName,password,password2)}}>新規登録</button>
                </>
                
            }
            {
                pageName==="login"&&<button style={loginButtonStyle} onClick={()=>{loginAuthentication(userName,password)}}>ログイン</button>
            }

            {loginFailure&&<p style={{color:"red"}}>ユーザー名かパスワードどちらか間違えています。</p>}
            {usedUserName&&<p style={{color:"red"}}>ユーザー名がすでに使われています。</p>}
            {notMatchPassword&&<p style={{color:"red"}}>パスワードが一致していません。</p>}
        </div>
    );
};