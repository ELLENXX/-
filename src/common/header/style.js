import styled from 'styled-components';
import loginpic from '../../statics/loginpic.png';
import head from '../../statics/head.jpg';


export const HeaderWapper=styled.div`
    background:url(${head});
    width:100%;
    background-size: cover;
    
    overflow:hidden;
    height:98px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.3);
   
    .text{
        color: transparent;
        background-color : black;       
        text-shadow : rgba(49,93,148,0.5) 0 5px 6px, rgba(49,93,148,0.2) 1px 3px 3px;       
        -webkit-background-clip : text;
        font-size:30px;
        line-height:97px;
    
    }
    .navchange{
        border-bottom:1px solid #2F5C93;

    }
    position:relative;
    z-index:0;
   
   
`;

export const HeaderTitle=styled.div`
    padding:0 20px;
    width:40%;
    padding-left:10px;
    font-family:"微软雅黑";
    height:97px;
    float:left;
    margin-left:0px;
   
    box-sizing: border-box; 
    position:relative;
    z-index:8;
`;

export const TitlePic=styled.div`
    background:url(${loginpic});
    margin:0 auto;
    width:97px;
    height:97px;
    background-size:cover;
    float:left;
   
`;
export const HeaderNav=styled.div`
    width:60%;
    box-sizing: border-box; 
    padding-right:20px;
    height:100%;
    overflow:hidden;
    position:relative;
    z-index:10;
  
   

    
`;

export const NavItem=styled.div`
    width:90%;
    float:right;
    color:#666;
    margin-top:30px;
    overflow:hidden;
  
    .nav{
        width:600px;
        display:block;
        list-style: none;
        oveflow:hidden;
        height:100%;
        float:right;
        
    }
    .nav_li{
        float: left;
        text-align: center;
        font-size: 15px;
        height:26px;
        margin: 0 30px;
        color:#666;
    }
    
    .nav_li a{
        display:block;
        height:26px;
       
    }
    .nav_li a:hover{
        text-shadow: black 0.1em 0.1em 0.2em;
    }
    position:relative;
    z-index:1;
    
`;



export const NavPic=styled.div`
    width:10%;
    float:right;
   margin-top:20px;
   position:relative;
   z-index:0;
    
`;