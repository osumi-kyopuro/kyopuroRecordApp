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

export const Footer=()=>{
    const {alt,width,height}=imgStyle;
    return (
        <div style={footerStyle}>
            <div style={footerIconStyle}>
                <p>kyopuroRecordApp</p>
                <img src={icon} alt={alt} width={width} height={height}/>    
            </div>
            <div style={footerListStyle}>
                <p>運営者「WAジロー」のアカウントリンク集</p>
                <ul style={accountListStyle}>
                    <li><a style={{textDecoration:"none"}} href="https://atcoder.jp/users/osumi" target="_blank">AtCoder</a></li>
                    <li><a style={{textDecoration:"none"}} href="https://github.com/osumi-kyopuro" target="_blank">GitHub</a></li>
                    <li><a style={{textDecoration:"none"}} href="https://twitter.com/wajiro_kyopro" target="_blank">X</a></li>
                </ul>
            </div>
        </div>
    );
};