import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
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
    const [setPassword]=useState("");
    const [loginFailure,setLoginFailure]=useState(false);
    const [usedUserName,setUsedUserName]=useState(false);
    const [notMatchPassword,setNotMatchPassword]=useState(false);
    const navigate = useNavigate();
    const { pageName,setUserName,setCreateUserSuccess} = props;
    const {register,handleSubmit,formState:{errors}}=useForm({});

    const createAccount=(userName,password,password2)=>{
        const apiUrl="http://127.0.0.1/api/userInfo/user/"+userName;
        axios.get(apiUrl)
            .then(function () {
                setUsedUserName(true);
            })
            .catch(function (error) {
                setUsedUserName(false);
                console.log(error);
            });
        if(!usedUserName&&password===password2){
            const apiUrl="http://127.0.0.1/api/userInfo/";
            const accountData={'user_name':userName,'user_password':password};
            axios.post(apiUrl,accountData)
                .then(function () {
                    setCreateUserSuccess(true);
                    navigate('/');
                    localStorage.setItem('userName',"");
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
        const apiUrl="http://127.0.0.1/api/userInfo/authenticate/?user_name="+userName+"&user_password="+password;
        axios.get(apiUrl)
            .then(function () {
                navigate('/record');
                localStorage.setItem('userName',userName);
                setUserName(userName);
            })
            .catch(function (error) {
                setLoginFailure(true);
                console.log(error);
            });
    }


    return (
        <>
            <form onSubmit={handleSubmit((data)=>{
                pageName==="signUp"?createAccount(data.userName,data.password,data.password2):loginAuthentication(data.userName,data.password);
            })}>
                <div style={accountAuthenticationStyle}>
                    <div style={inputItem}>
                        <label style={itemNameStyle}>ユーザー名</label>
                        <input {...register("userName",{
                            required:{
                                value:true,
                                message:'必須項目です'
                            },
                            minLength:{
                                value:3,
                                message:'ユーザー名は3文字以上で入力してください'
                            },
                            maxLength:{
                                value:20,
                                message:'ユーザー名は20文字以内で入力してください'
                            }
                        })} placeholder="userName" type="text"/>
                    </div>
                    <div style={inputItem}>
                        <label style={itemNameStyle}>パスワード</label>
                        <input {...register("password",{
                            required:{
                                value:true,
                                message:'必須項目です'
                            },
                            minLength:{
                                value:5,
                                message:'パスワードは5文字以上で入力してください'
                            },
                            maxLength:{
                                value:20,
                                message:'パスワードは20文字以内で入力してください'
                            },
                            pattern:{
                                value:/^(?=.*[0-9])(?=.*[a-zA-Z]).+$/,
                                message:"半角英字+半角数字で入力してください"
                            }
                        })} placeholder="password" type="password"/>
                        <p style={{color:'red'}}>{errors.password?.message}</p> {/* エラー表示 */}
                    </div>
                    {
                        pageName==="signUp"&&
                        <>
                            <div style={inputItem}>
                                <label style={itemNameStyle}>パスワード(確認)</label>
                                <input {...register("password2",{
                                    required:{
                                        value:true,
                                        message:'必須項目です'
                                    },
                                    minLength:{
                                        value:5,
                                        message:'パスワードは5文字以上で入力してください'
                                    },
                                    maxLength:{
                                        value:20,
                                        message:'パスワードは20文字以内で入力してください'
                                    },
                                    pattern:{
                                        value:/^(?=.*[0-9])(?=.*[a-zA-Z]).+$/,
                                        message:"半角英字+半角数字で入力してください"
                                    }
                                })} placeholder="password2" type="password"/>
                                <p style={{color:'red'}}>{errors.password2?.message}</p> {/* エラー表示 */}
                            </div>
                            <button style={signUpButtonStyle}>新規登録</button>
                        </>
                    }
                    {
                        pageName==="login"&&<button style={loginButtonStyle}>ログイン</button>
                    }
                    {loginFailure && <p style={{color:"red"}}>ユーザー名かパスワードどちらか間違えています。</p>}
                    {usedUserName && <p style={{color:"red"}}>ユーザー名がすでに使われています。</p>}
                    {notMatchPassword && <p style={{color:"red"}}>パスワードが一致していません。</p>}
                </div>
            </form> 
        </>
    );
};