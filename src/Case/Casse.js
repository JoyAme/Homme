import {styled} from 'styled-components'


export const CaseFile=styled.div`
 width:100%;
 padding-top:40px;
 .Lounge{
    text-align:start;
  line-height:7px;
    p{
      font-size:12px;
    }
 }
 .client{
  line-height:1rem;
    display:flex;
    flex-direction:column;
    text-align:center;
    /* width:512px; */
    margin:auto;
    padding-bottom:30px;
    font-size:12px;
}
.apartment{
  width:100%;
}
@media screen and (max-width:478px) {
.apart-ment{
  width:100%;
}
}

`