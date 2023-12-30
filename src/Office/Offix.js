import {styled} from 'styled-components'

export const Officee=styled.div`
width:100%;
padding:70px 0px;
img{
    /* width:700px; */
}
.scroll{
    display:flex;
    width:60%;
    gap:30px;
    justify-content:end;
    overflow:hidden
}
.right-side{
   display:block;
   justify-content:center;
}
.right-p{
    width:200px;
    margin-top:0px;
}
.top{
    /* line-height:1rem; */
}
.center{
    background: #000000;
    height:30vh;
    /* padding:2px; */
    border:none;
    margin-left:80px;
    width:2px;
    text-align:center;
}
p{
    font-size:12px;
}
.topic{
    text-transform:uppercase;
   margin-bottom:0px;
   color:#000000;
   font-family:sora;
   font-weight:300px;
}
.topi{
    font-size:14px;
    margin-bottom:0px;
}
.topi-p{
    margin-top:0px;
}
.intu{
    font-size:28px;
    margin-bottom:0px;
    text-transform:uppercase;
    /* width:210px; */
}
.intui{
    width:360px;
    font-size:12px;
}




@media screen and (max-width:478px) {
    .intu{
        font-size:18px;
 }
 .intui{
   width:260px;
    font-size:10px;
}
.topic{
    
   font-size:18px;
}
.topi-p{
    font-size:10px;
}
.topi{
    font-size:10px;
   
}
}
`
export const Offe=styled.div`
display:flex;
gap:40px;
justify-content:end;
/* align-items:center; */

@media screen and (max-width:478px) {
gap:10px;
justify-content:space-between;
}

`
export const Slide=styled.div`
width:100%;
height:400px;
background:red;
background-image:url(${(props)=>props.bg});
`
export const Roller=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
/* align-items:center; */
`