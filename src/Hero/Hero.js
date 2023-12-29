import {styled} from 'styled-components'


export const Homme=styled.div`

width:100%;
padding-top:120px;
.marq{
    position:absolute;
    bottom:10%;
}
.text{
   font-size:140px;
   font-weight:700px;
   font-family:roboto;
   text-transform:uppercase;
   -webkit-text-stroke:1px black;
   -webkit-text-fill-color:rgba(2555,255,255,0);
}
@media screen and (max-width:768px) {
  .marq{
  
} 
}
`;

export const Design=styled.div`
margin-top:50px;
margin-left:0px;
text-align:left;
/* display:block; */
h1{
  font-size:40px;
  width:490px;
  font-weight:700;
  text-transform:capitalize;
}
p{
  font-size:14px;
  width:450px;
  color:#000000;
}
@media screen and (max-width:768px) {
   
}
`;