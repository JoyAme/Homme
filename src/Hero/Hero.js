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
@media screen and (max-width:478px) {
  .text{
    font-size:40px;
} 
.star{
   width:40px;
} 
.heroimg{
   width:100%;
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
@media screen and (max-width:478px) {
   .Design{
    font-size:30px;
    width:380px;
   }
   .Design-i{
    font-size:12px;
    width:380px;
   }
}
`;