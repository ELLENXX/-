import styled from 'styled-components';
import loginback from '../statics/loginbackground.jpg';
import loginpic from '../statics/loginpic.png';

export const LoginWrapper=styled.div`
    background:url(${loginback});
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center center;
    overflow: hidden;
    position: fixed;
    width:100%;
    height:100%;
    .miss{
        border:red solid 1px;
        box-shadow: 0 0 5px red;
    }
    .right{
        border:#00AFD9 solid 1px;
        box-shadow: 0 0 5px #00AFD9;
    }
`;

export const LoginMiss=styled.div`
position:relative;
top:25%;
left:49%;
width:100px;
height:30px;
line-height:30px;
background:rgba(255,255,255,0.1);
text-align:center;
font-family: "lucida grande", 
"lucida sans unicode", lucida,
helvetica, "Hiragino Sans GB", 
"Microsoft YaHei", "WenQuanYi Micro Hei", 
sans-serif;
color:#79CECA;
text-shadow:0 0 2px #fff;

`;

export const LoginModule=styled.div`
    position:relative;
    top:27%;
    left:40%;
    padding-top:10px;
    width:360px;
    height:300px;
    background:rgba(255,255,255,0.1);
    border-radius:5px;
 
`;

export const Loginpic=styled.div`
    background:url(${loginpic});
    margin:0 auto;
   
    width:60px;
    height:60px;
    border-radius:30px;
    background-size:cover;
    box-shadow: 0 0 5px #00AFD9;
`;

export const LoginName=styled.div`
    font-family: "lucida grande", 
                "lucida sans unicode", lucida,
                helvetica, "Hiragino Sans GB", 
                "Microsoft YaHei", "WenQuanYi Micro Hei", 
                sans-serif;
    color:#79CECA;
    font-size:20px;
    margin:10px auto;
    line-height:20px;
    width:340px;
    height:20px;
    text-align:center;
    text-shadow:0 0 2px #fff;
    
`;

export const Input=styled.input`
    display:block;
    margin:10px auto;
    &::placeholder{
        color:#88cbca;
    }
    width:220px;
    height:30px;
    background:rgba(0, 0, 0, 0);
    border:1px solid #00AFD9;
    border-radius:5px;
    box-shadow: 0 0 5px #00AFD9;
    padding-left:2px;
    color:#C2DFA3;  
`;

export const Button=styled.div`
display:block;
margin:10px auto;
    width:220px;
    height:35px;
    line-height:35px;
    font-size:15px;
    background:#119FBA;
    color:#fff;
    font-family: "幼圆";
    text-align:center;
    border-radius:5px;
    cursor:pointer;
`;

export const LoginCho=styled.div`
    width:220px;
    height:25px;
    border:1px soild red;
    margin:0 auto;
    overflow:hidden;
`;

export const Cho=styled.div`
    width:100px;
    line-height:25px;
    font-size:10px;
    margin-left:10px;
    font-family:"幼圆";
    float:left;
    color:#88cbca;
    input{
        margin-top:10px;
        
    }
`;