import {styled} from 'styled-components'

export const ExploreWrap=styled.div`
width:100%;
.explore-D{
   
    line-height:1rem;
    padding-bottom:20px;
    display:flex;
    flex-direction:column;
    text-align:center;
    /* width:512px; */
    margin:auto;
    font-size:12px;
}
.explore-designs{
    width:602px;
}
.Explore-r{
    /* width:420px; */
    /* background:red; */
   text-align:left;
}
.names{
   font-family:Montserrat;
    margin-bottom:0;
    font-size:24px;
    font-weight:400;
    line-height:29px;
}
hr{
  /* background:black; */
  width:65px;
  /* height:2px; */
 margin-left:0;
}
.info{
   text-align:left;
   margin-top:0px;
}
`

export const ContainerOne=styled.div`
overflow:hidden;
`
export const ContainerTwo=styled.div`
position:relative;
width:100%;
`
export const Slider=styled.div`
width:100%;
height:500px;
background:red;
background-image:url(${(props)=>props.bg});
`

export const Icon=styled.div`
display:flex;
position:absolute;
bottom:16%;
text-align:flex-start;
left:30px;
gap:10px;
z-index:100;
.icon-slide{
    /* background:#FFFFFF; */
    background:#FFFFFF;
}
`

export const Iccon=styled.div`
display:flex;
position:absolute;
bottom:16%;
text-align:flex-start;
/* left:-70px; */
gap:10px;
z-index:100;
.icon-slide{
    /* background:#FFFFFF; */
    background:#FFFFFF;
}
`