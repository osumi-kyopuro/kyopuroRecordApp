import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";

const recordCreationStyle={
    textAlign:"center",
    width:"100%",
    height:"100%",
    padding:"3% 0% 5% 0%"

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
    padding: "0% 0%",
    fontWeight:"bold"
}

const requireStyle={
    backgroundColor:"red",
    color:"white",
    fontWeight:"bold",
    margin:"0% 2% 0% 1%",
    borderRadius:"20%"
}

const noRequireStyle={
    backgroundColor:"yellow",
    color:"black",
    fontWeight:"bold",
    margin:"0% 2% 0% 1%",
    borderRadius:"20%"
}

export const RecordCreation=(props)=>{
    const [setPassword]=useState("");
    const [loginFailure,setLoginFailure]=useState(false);
    const [usedUserName,setUsedUserName]=useState(false);
    const [notMatchPassword,setNotMatchPassword]=useState(false);
    const navigate = useNavigate();
    const { pageName,userName,setUserName,setLoginSuccess} = props;
    const {register,handleSubmit,formState:{errors}}=useForm({});

    const createRecord=(data)=>{
        console.log(data.userName);
        const apiUrl="http://0.0.0.0/api/record/";
        const accountData={
            'user_name':data.userName,
            'category':data.category,
            'question_number':data.questionNumber,
            'question_name':data.questionName,
            'code_link':data.codeLink,
            'memo':data.memo,
            'ac_day':(data.acDay==""?null:data.acDay)
        };
        axios.post(apiUrl,accountData)
            .then(function () {
                console.log('success');
                navigate('/record');
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }
    

    const editRecord=(userName,password)=>{
        const apiUrl="http://0.0.0.0/api/userInfo/authenticate/?user_name="+userName+"&user_password="+password;
        axios.get(apiUrl)
            .then(function () {
                navigate('/record');
                setLoginSuccess(true);
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
                pageName==="createRecord"?createRecord(data):editRecord(data.userName,data.password);
            })}>
                <div style={recordCreationStyle}>
                    <h1>精進記録登録フォーム</h1>
                    <div style={inputItem}>
                        <label style={itemNameStyle}>カテゴリ</label>
                        <span style={requireStyle}>必須</span>
                        <input {...register("category",{
                            required:'必須項目です',
                            minLength:{value:3,message:'カテゴリは3文字以上で入力してください'},
                            maxLength:{value:20,message:'カテゴリは20文字以内で入力してください'}
                        })} placeholder="category" type="text"/>
                        <p style={{color:'red'}}>{errors.category?.message}</p> {/* エラー表示 */}
                    </div>
                    <div style={inputItem}>
                        <label style={itemNameStyle}>問題番号</label>
                        <span style={requireStyle}>必須</span>
                        <input {...register("questionNumber",{
                            required:'必須項目です',
                            minLength:{value:3,message:'問題番号は3文字以上で入力してください'},
                            maxLength:{value:20,message:'問題番号は20文字以内で入力してください'}
                        })} placeholder="questionNumber" type="text"/>
                        <p style={{color:'red'}}>{errors.questionNumber?.message}</p> {/* エラー表示 */}
                    </div>
                    <div style={inputItem}>
                        <label style={itemNameStyle}>問題名</label>
                        <span style={requireStyle}>必須</span>
                        <input {...register("questionName",{
                            required:'必須項目です',
                            minLength:{value:3,message:'問題名は3文字以上で入力してください'},
                            maxLength:{value:20,message:'問題名は20文字以内で入力してください'}
                        })} placeholder="questionName" type="text"/>
                        <p style={{color:'red'}}>{errors.questionName?.message}</p> {/* エラー表示 */}
                    </div>
                    <div style={inputItem}>
                        <label style={itemNameStyle}>コードリンク</label>
                        <span style={requireStyle}>必須</span>
                        <input {...register("codeLink",{
                            required:'必須項目です',
                            minLength:{value:3,message:'コードリンクは3文字以上で入力してください'},
                            maxLength:{value:30,message:'コードリンクは30文字以内で入力してください'}
                        })} placeholder="codeLink" type="text"/>
                        <p style={{color:'red'}}>{errors.codeLink?.message}</p> {/* エラー表示 */}
                    </div>
                    <div style={inputItem}>
                        <label style={itemNameStyle}>メモ</label>
                        <span style={noRequireStyle}>任意</span>
                        <textarea {...register("memo",{
                            maxLength:{value:20,message:'メモは20文字以内で入力してください'}
                        })} placeholder="memo" type="text"></textarea>
                        <p style={{color:'red'}}>{errors.memo?.message}</p> {/* エラー表示 */}
                    </div>
                    <div style={inputItem}>
                        <label style={itemNameStyle}>解いた日</label>
                        <span style={noRequireStyle}>任意</span>
                        <input {...register("acDay",{
                        })} placeholder="acDay" type="date"/>
                    </div>
                    <input {...register("userName",{})} value={userName} type="hidden"/>
                    {
                        pageName==="createRecord"&&<button style={signUpButtonStyle}>新規登録</button>
                    }
                    {
                        pageName==="editRecord"&&<button style={loginButtonStyle}>更新</button>
                    }
                </div>
            </form> 
        </>
    );
};