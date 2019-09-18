import styled from 'styled-components';





export const HomeWapper=styled.div`
font-family: "lucida grande", 
"lucida sans unicode", lucida,
helvetica, "Hiragino Sans GB", 
"Microsoft YaHei", "WenQuanYi Micro Hei", 
sans-serif;

.over:hover{
    text-shadow:0 0 3px #fff;
}
.click{
    text-shadow:0 0 3px #fff;
}
width:100%;
   .clear{
       clear:both;
   }
`;

export const HomeContent=styled.div`
    width:92%;
    margin-left:4%;
    padding: 40px 0px;
`;

export const HomeNews=styled.div`
    width:100%;
    margin-top:30px;
    
    
    overflow:hidden;
   
`;

export const NewItem=styled.div`
    width:40%;
    float:left;
    margin-right:10%;
    li{
        font-size:15px;
        line-hight:20px;
        height:20px;
        color:#003366;
    }
    ul{
        margin-top:20px;
    }

`;

export const ItemTit=styled.div`
    width:100%；
    background:#256B9E;
    color:#fff;
    line-height:30px;
    height:30px;
    text-align:left;
    padding-left:5px;
`;

export const HomeSreach=styled.div`
    width:100%;
    margin-top:40px;
`;

export const NewsTitle=styled.div`
    width:100%;
    height:26px;
    text-align:left;  
    ul{
    width:300px;
   display:inline-block;  
    list-style: none;
    oveflow:hidden;
    height:100%;
    }
    li{

        float: left;
        text-align: center;
        font-size: 20px;
        height:26px;
  font-weight:700;
         color:#666;
        cursor:pointer;
    }
`;
