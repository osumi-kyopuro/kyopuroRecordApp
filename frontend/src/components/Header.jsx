import React from "react";

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
    width:"80%"
};


const startLists={
    width:"20%",
    display:"flex",
    listStyle:"none"
};

const startList={
    width:"30%"
};

export const Header=()=>{
    return (
        <div style={headerStyle}>
            <div style={headerTitleStyle}>
                kyopuroRecordApp
            </div>
            <ul style={startLists}>
                <li style={startList}><a style={{textDecoration:"none", color:"white",fontSize:"80%"}}href="">新規登録</a></li>
                <li style={startList}><a style={{textDecoration:"none", color:"white",fontSize:"80%"}} href="">ログイン</a></li>
            </ul>
        </div>
    );
};