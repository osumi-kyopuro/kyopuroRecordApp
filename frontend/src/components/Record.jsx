import React, { useState ,useEffect} from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

const box={
    position:"relative",
    padding:"0% 10% 25% 10%"
};



export const Record=(props)=>{
    const { pageName,userName,setUserName,setLoginSuccess} = props;
    const [record,setRecord]=useState([]);
    useEffect(() => {
        const apiUrl='http://0.0.0.0/api/record/user/'+userName;
        axios.get(apiUrl)
        .then(res => setRecord(res.data));
      },[]);

    return (
        <div style={box}>
            <h1>精進記録</h1>
            <Link to="/createRecord">新規登録</Link>
                    
            <table border="2">
                <tr>
                    <th>カテゴリ</th>
                    <th>問題番号</th>
                    <th>問題名</th>
                    <th>コードリンク</th>
                    <th>メモ</th>
                    <th>解いた日</th>
                    <th>編集</th>
                    <th>削除</th>
                </tr>
                {
                    record.map((item)=>{
                        return (
                            <tr>
                                <th>{item.category}</th>
                                <th>{item.question_number}</th>
                                <th>{item.question_name}</th>
                                <th>{item.code_link}</th>
                                <th>{item.memo}</th>
                                <th>{item.ac_day}</th>
                                <th>編集リンク</th>
                                <th>削除リンク</th>
                            </tr>
                        )
                    })
                }
            </table>
            
        </div>
    );
};