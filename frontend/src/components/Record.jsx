import React, { useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import "./recordStyle.css";
import axios from "axios";
import Modal from "react-modal";

const recordApiUrl = process.env.REACT_APP_RECORD_API_URL;

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

const modalStyle = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.50)"
    },
    content: {
        position: "absolute",
        top: "10%",
        left: "5%",
        right: "5%",
        bottom: "30%",
        backgroundColor: "paleturquoise",
        borderRadius: "1%",
        padding: "2%"
    }
};

const modalYesButtonStyle={
    cursor:"pointer",
    backgroundColor:"red",
    color:"white",
    borderRadius:"10%",
    fontSize:"200%",
    fontWeight:"bold",
    float: "right",
    margin:"1%"
}

const modalNoButtonStyle={
    cursor:"pointer",
    backgroundColor:"gray",
    color:"white",
    borderRadius:"10%",
    fontSize:"200%",
    fontWeight:"bold",
    float: "right",
    margin:"1%"
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
    const { userName,setSaveRecord,createRecordSuccess,setCreateRecordSuccess,editRecordSuccess,setEditRecordSuccess, deleteRecordSuccess,setDeleteRecordSuccess} = props;
    const [record,setRecord]=useState([]);
    const [deleteConfirmRecord,setDeleteConfirmRecord]=useState([]);
    const [deleteId, setDeleteId] = useState(0);
    const [modalIsOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const apiUrl=`${recordApiUrl}user/${userName}`;
        axios.get(apiUrl)
        .then(res => setRecord(res.data));
    },[]);

    const initRecord=()=>{
        setSaveRecord({});
        navigate('/createRecord');
    }

    const editRecord=(id)=>{
        const apiUrl=`${recordApiUrl}id/${id}`;
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

    const deleteConfirm=(id)=>{
        const apiUrl=`${recordApiUrl}id/${id}`;
        axios.get(apiUrl)
            .then(function (res) {
                console.log(res.data);
                setDeleteConfirmRecord(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        setDeleteId(id);
        setIsOpen(true);
    }

    const deleteRecord=(id)=>{
        const apiUrl=`${recordApiUrl}id/${id}`;
        console.log(id);
        axios.delete(apiUrl)
            .then(function (res) {
                console.log(res.data);
                const apiUrl=`${recordApiUrl}user/${userName}`;
                axios.get(apiUrl)
                    .then(res => setRecord(res.data));
                initDeleteModal();
                initSuccess();
                setDeleteRecordSuccess(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const initDeleteModal=()=>{
        setIsOpen(false);
        setDeleteId(0);
    }

    const initSuccess=()=>{
        setCreateRecordSuccess(false);
        setEditRecordSuccess(false);
        setDeleteRecordSuccess(false);
    }

    return (
        <div style={box}>
            <h1>精進記録</h1>
            <button style={insertButton} onClick={()=>{initRecord()}}>新規登録</button>
            {createRecordSuccess&&<span style={{color:"green",fontWeight:"bold",marginLeft:"2%"}}>登録成功しました</span>}
            {editRecordSuccess&&<span style={{color:"green",fontWeight:"bold",marginLeft:"2%"}}>更新成功しました</span>}
            {deleteRecordSuccess&&<span style={{color:"green",fontWeight:"bold",marginLeft:"2%"}}>削除成功しました</span>}
            <Modal isOpen={modalIsOpen} style={modalStyle}>
                <h1>本当に削除しますか？</h1>
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
                        
                        <tr>
                            <td>{deleteConfirmRecord.category}</td>
                            <td>{deleteConfirmRecord.question_number}</td>
                            <td>{deleteConfirmRecord.question_name}</td>
                            <td>コードリンク</td>
                            <td>{deleteConfirmRecord.memo}</td>
                            <td>{deleteConfirmRecord.ac_day}</td>
                            <td>編集</td>
                            <td>削除</td>
                        </tr>
                        
                    }
                    </table>
                <button style={modalNoButtonStyle} onClick={() => initDeleteModal()}>NO</button>
                <button style={modalYesButtonStyle} onClick={() => deleteRecord(deleteId)}>YES</button>
            </Modal>
                    
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
                                <td><button style={editDeleteButton} onClick={()=>{deleteConfirm(item.record_id)}}>削除</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
};