import React, { useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const box={
    position:"relative",
    padding:"0% 10% 25% 10%"
};


export const Record=(props)=>{
    const { userName,setSaveRecord} = props;
    const [record,setRecord]=useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const apiUrl='http://0.0.0.0/api/record/user/'+userName;
        axios.get(apiUrl)
        .then(res => setRecord(res.data));
    },[]);

    const initRecord=()=>{
        setSaveRecord({});
        navigate('/createRecord');
    }


    const editRecord=(id)=>{
        const apiUrl="http://0.0.0.0/api/record/id/"+id;
        console.log(id);
        axios.get(apiUrl)
            .then(function (res) {
                setSaveRecord(res.data);
                console.log(res.data);
                navigate('/editRecord');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const deleteRecord=(id)=>{
        const apiUrl="http://0.0.0.0/api/record/id/"+id;
        console.log(id);
        axios.delete(apiUrl)
            .then(function (res) {
                console.log(res.data);
                const apiUrl='http://0.0.0.0/api/record/user/'+userName;
                axios.get(apiUrl)
                    .then(res => setRecord(res.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div style={box}>
            <h1>精進記録</h1>
            <button onClick={()=>{initRecord()}}>新規登録</button>
                    
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
                                <th><button onClick={()=>{editRecord(item.record_id)}}>編集リンク</button></th>
                                <th><button onClick={()=>{deleteRecord(item.record_id)}}>削除リンク</button></th>
                            </tr>
                        )
                    })
                }
            </table>
            
        </div>
    );
};