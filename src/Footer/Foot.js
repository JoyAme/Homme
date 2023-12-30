import {styled} from 'styled-components'

export const FooterField=styled.div`
width:100%;
 
 position:relative;
 bottom:0;
background:black;
text-align:center;
.logo{
  object-fit:contain;
  width:80px;
}
/* .fa{
    color:#787878;
    border-radius:999px;
   
    border:1px solid #787878;
    
    width:40px;
    line-height:40px;
    text-align:center;
    height:40px;

} */
height:442px;
color:white;
li{
    font-size:12px;
    list-style:none;
  color: #787878;
line-height:17px;
/* text-align:start; */
}
.Title{
    font-size:16px;
}
ul{
   text-align:start;
  margin-top:0px;
}
.Row{
    align-items:center;
}
.foot-i{
  /* display:inline-block;
  margin-left:0;
  gap:0px; */
  line-height:0px;
  text-align:start
}
.beauty{
 font-family:sora;
}
hr{
   margin:7% 0px;
  border:1px solid  #303030;;
}
/* .icony{
    padding-right:2px;
} */
h4{
    color: #787878;
    font-size:14px;
    font-family:sora;
    font-weight:400px;
}
.column{
    /* display:flex;
    flex-direction:column;
    gap:10%; */
}
.foot-it{

}
@media screen and (max-width:478px) {
height:100vh;
/* .foot-it{
text-align:left;
} */
}
`


export const Roww=styled.div`
display:flex;
gap:30px;
justify-content:space-between;
@media screen and (max-width:478px) {
  display:block;
 text-align:left;
 li{
    text-align:start;
}


}
`