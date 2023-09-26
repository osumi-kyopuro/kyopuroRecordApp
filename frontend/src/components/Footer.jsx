import React from "react";
import icon from "./icon.jpeg";

const footerStyle={
    backgroundColor:"#808080",
    color:"#ffffff",
    width: "100%",
    height: "20%",
    display:"flex",
    padding:"1%"
};

const imgStyle={
    alt:"運営者のアイコン",
    width:"30%",
    height:"60%"
};

const footerIconStyle={
    padding:"1%"
};


const footerListStyle={
    padding:"1%",
};

const accountListStyle={
    listStyle:"none"
};

const onClickLink=(id)=>{
    const linkList=[
        "https://atcoder.jp/users/osumi",
        "https://github.com/osumi-kyopuro",
        "https://twitter.com/wajiro_kyopro"
    ];
    return (window.open(linkList[id], '_blank'));
}

export const Footer=()=>{
    const {alt,width,height}=imgStyle;
    return (
        <div style={footerStyle}>
            <div style={footerIconStyle}>
                <p>kyopuroRecordApp</p>
                <img src={icon} alt={alt} width={width} height={height}/>    
            </div>
            <div style={footerListStyle}>
                <p>開発者「WAジロー」のアカウントリンク集</p>
                <ul style={accountListStyle}>
                    <li style={{cursor:"pointer"}} onClick={()=>{onClickLink(0)}}>AtCoder</li>
                    <li style={{cursor:"pointer"}} onClick={()=>{onClickLink(1)}}>GitHub</li>
                    <li style={{cursor:"pointer"}} onClick={()=>{onClickLink(2)}}>X</li>
                </ul>
            </div>
        </div>
    );
};