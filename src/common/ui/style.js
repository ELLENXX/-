import styled from 'styled-components';

export const HomePic=styled.div`
    width:100%;
    height:330px;
    overflow:hidden;
    .iconf{
        font-size:50px;
    }
    .clear{
        clear:both; 
     }
     
    
`;

export const PicL=styled.div`
    float:left;
    margin-top:150px;
    margin-left:5%;
    width:30px;
    height:25%;
    cursor:pointer;

`;

export const PicR=styled.div`
    float:right;
    margin-top:150px;

    margin-right:5%;
    width:30px;
    height:25%;
    cursor:pointer;


`;

export const PicPoint=styled.div`

  
  margin-top:310px;
  margin-left:43%;
    width:200px;
    overflow:hidden;
    .handle{
        background:rgb(110,109,108,1);
    }
    .lea{
        background:rgb(255,255,255,1);
    }
    
`;

export const PicIte=styled.div`
    width:16px;
    height:16px;
    float:left;
    border-radius:8px;
    background:rgb(255,255,255,0.5);
    margin-left:17px;
    margin-right:17px;
    cursor:pointer;
`;

export const TimeItem=styled.div`
margin-top:310px;
margin-left:43%;
  width:200px;
  
    font-size:15px;
    color:#1E66AC;
`;

export const NewWapper=styled.div`
    width:100%;

`;

export const NewsUl=styled.ul`
    width:100%; 
`;

export const NewsLi=styled.li`
    width:100%;
    height:120px;
    border-bottom:1px dashed #D6D6D6;
    margin:10px 0;
    overflow:hidden;
    
`;

export const LiItemL=styled.div`
    width:100px;
    float:left;
    overflow: hidden; 
   .pic{
       width:100px;
       height:100px;
       border-radius:5px;
       transition: all 0.6s;
   }
   .pic:hover{
    transform: scale(1.4);
   }
   


`;

export const LiItemR=styled.div`
    float:left;
    padding:0px 20px;
    width:80%;
    .title{
        font-size:20px;
        font-weight:800;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        cursor:pointer;
        
    }
    .lin{
        color:#CA0C16;
        textDecoration:none;
    }
    .lin:hover{
        color:#1E66AC;
    }
    .content{
       
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        width:100%; 
    }
    .bottom{
        margin-top:15px;
        font-size:14px;
        color:#D1D1D1;
    }
`;

export const CommentWapper=styled.div`
margin-top:50px;
    border-top:1px solid #1E66AC;
    padding:20px;
`;

export const ListWapper=styled.div`
    .dan{
       background:#fff;
    }
    .nong{
        background:#DEE1E6;
    }
`;
export const ListUl=styled.ul`


`;
export const ListLi=styled.li`
    height:40px;
    line-height:30px;
    font-size:15px;
    padding-left:5px;
`;

export const MNul=styled.div`
padding:20px;
`;
export const MNli=styled.div`
    height:50px;
    line-height:50px;
    font-size:18px;
`;




