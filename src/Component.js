import {styled} from 'styled-components'

export const Nabar=styled.div`
 background:#FFFCF0;
color:${(props)=> (props.type ==="primary"? "black":"white")};
position:fixed;
width:100%;
top:0px;
left:0px;
right:0px;
padding-top:20px;
z-index:100;
align-items:center;
span{
  color:#FFC701;
  /* font-size:35px; */
  /* padding:5px; */
}
.logo{
  object-fit:contain;
  width:120px;
}
.menu-icon{
  display:none;
  position:absolute;
  right:0px;
}
.show{
  display:block;
  
}
@media screen and (max-width:768px) {
  .menu-icon{
  display:block;
  cursor:pointer;
}
}
`;

export const Nabbar=styled.div`
align-items:center;
display:flex;
justify-content:space-between;
@media screen and (max-width:768px) {
  flex-direction:column;
  align-items:flex-start;
}
`;

export const Links=styled.div`


list-style:none;
text-decoration:none;
li{
  display:inline;
  padding: 0 15px;
}
@media screen and (max-width:768px) {
display:none;
ul{
  margin:0px;
  padding:0px;
}
li{
  padding: 15px 0px;
  display:block;
}
}

`

export const Cover=styled.div`
display:flex;
align-items:center;
@media screen and (max-width:768px) {
display:none;
flex-direction:column;
padding: 15px 0px;
gap:10px;

}
` 
export const ButtonStyle=styled.button`
background:${(props)=> (props.type === 'primary'? '#FFC701':'#FFFCF0') };
color:black;
font-size:16px;
border-radius:6px;
border:none;
padding:10px 20px;
font-weight:700;
cursor:pointer;
`
export const Buton=styled(ButtonStyle)`
/* background: #FFC701; */
padding:10px 20px;

` 
// export const Homee=styled.div`

// width:80%;
// margin:auto;
// display:flex;
// justify-content:space-between;


// `;
export const Homme=styled.div`

width:100%;
padding-top:120px;

`;
export const Modern=styled.div`
background:yellow;
justify-content:space-between;
margin:auto;
align-items:center;
display:flex;
position: relative;
width:80%;
bottom:23rem;
/* left:17rem; */
gap:100px;
h2{
  font-size:90px;
 
}
.fa-solid{
color:#FFC701;
font-size:110px;
/* width:0px; */
/* position: relative; */
background:red;
/* float:right;
align-items:flex-end; */
/* left:10rem; */
}
`;

