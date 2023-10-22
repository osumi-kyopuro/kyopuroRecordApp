import React, { useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import "./recordStyle.css";
import axios from "axios";

const box={
    position:"relative",
    padding:"0% 10% 25% 10%"
};

const editDeleteButton={
    cursor:"pointer",
    backgroundColor:"gray",
    color:"white",
    borderRadius:"10%",
    fontWeight:"bold"
}

const insertButton={
    cursor:"pointer",
    backgroundColor:"blue",
    color:"white",
    marginBottom:"3%",
    borderRadius:"10%",
    fontSize:"100%",
    fontWeight:"bold"
}

export const columns = [
    { header: "カテゴリ", accessor: "category" },
    { header: "問題番号", accessor: "questionNumber" },
    { header: "問題名", accessor: "questionName" },
    { header: "コードリンク", accessor: "codeLink" },
    { header: "メモ", accessor: "memo" },
    { header: "解いた日", accessor: "acDay" },  
    { header: "編集", accessor: "editLink" },
    { header: "削除", accessor: "deleteLink" }, 
];

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
            <button style={insertButton} onClick={()=>{initRecord()}}>新規登録</button>
                    
            <table border="2">
                <tr>
                {
                    columns.map((item)=>{
                        return(
                            <th>{item.header}</th>
                        )
                    })
                }
                </tr>
                {
                    record.map((item)=>{
                        return (
                            <tr>
                                <td>{item.category}</td>
                                <td>{item.question_number}</td>
                                <td>{item.question_name}</td>
                                <td><a href={item.code_link} target="_blank">コードリンク</a></td>
                                <td>{item.memo}</td>
                                <td>{item.ac_day}</td>
                                <td><button style={editDeleteButton} onClick={()=>{editRecord(item.record_id)}}>編集</button></td>
                                <td><button style={editDeleteButton} onClick={()=>{deleteRecord(item.record_id)}}>削除</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
};