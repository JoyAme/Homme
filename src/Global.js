import { createGlobalStyle } from "styled-components";
import {styled} from 'styled-components'


const Global= createGlobalStyle`
body{
    background:#FFFCF0;
    font-family:sora;
    margin:0;
    padding:0
}
a{
    text-decoration:none;
    margin-left:20px;
    color:black;
    font-size:18px;
    &:hover{
        color:red;
    }

}
h3{
        font-size:26px;
       
        /* background:white; */
    }
    img{
  width:100%;
}
@media screen and (max-width:468px) {
    img{
  width:400px;
}
}

`
export const Container=styled.div`
width:80%;
max-width:1200px;
position: relative;
margin:auto;

`
export const Row=styled.div`
display:flex;
gap:40px;
>div{
    flex:1;
}


@media screen and (max-width:768px) {
    flex-direction:column;
}

`


export const Rrow=styled(Row)`
gap:10px;
`
export const Rowwer=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
/* text-align:center; */

align-items:center;
padding-top:60px;
/* padding-bottom:10%; */
`



export default Global;