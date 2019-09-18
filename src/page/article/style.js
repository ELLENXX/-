import styled from 'styled-components';

export const ArticleWapper=styled.div`
   height:100%;
   width:100%;
  
  
`;

export const ArticleHeader=styled.div`
    width:100%;
    height:98px;
   
`;

export const ArticleContent=styled.div`
    width:100%;
    overflow:hidden;
   
    
`;

export const ArticleRight=styled.div`
    width:20%;
    float:left;
    border-top:1px dashed #1E66AC;
    
`;

export const ArticleLeft=styled.div`
    width:76%;
    margin-right:4%;
    float:left;
    padding:20px 15%;
    box-sizing:border-box;
    border-top:1px dashed #1E66AC;
    img{
        width:100%;
    }
    
`;

export const ArticleFooter=styled.div`
  
    height:100px;
    width:100%;
`;

export const LeftTitle=styled.div`
    font-size:22px;
    line-heigt:30px;
    font-weight:900;
    text-align:center;
    color:#1E66AC;
   
`;

export const LeftDate=styled.div`
    margin:10px 0px;
    overflow:hidden;
   
    font-size:14px;
    .date{
        float:left;
        text-align:left;
    }
    .share{
        float:right;
        text-align:right;
        
    }

`;

export const LeftContent=styled.div`
    font-size:16px;
    img{
        margin:10px 0px;
    }
`;