
import styled from '@emotion/styled'

export const CardOuter=styled.div`
@media (min-width: 1301px) and (max-width: 1500px)
{
    flex: 0 0 25%;
    max-width: 25%;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 30px;
}

@media (max-width: 1199px) and (min-width: 991px)
{
    flex: 0 0 25%;
    max-width: 25%;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
}
@media (min-width: 768px) and (max-width: 1300px)
 {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
}
@media (max-width: 767px)
{
    flex: 0 0 50%;
    max-width: 50%;
}

@media (max-width: 990px) {
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: -1px;
    margin-right: -1px;
    border: 1px solid rgb(241, 241, 241);
}

`
export const CardOuter1=styled.div`
height: 100%;
animation-fill-mode: both;
animation-duration: 800ms;
animation-delay: 0ms;
animation-iteration-count: 1;
opacity: 1;
animation-name: react-reveal-896266815278417-1;

`
export  const CardOuter2=styled.div`
height: 100%;
    width: 100%;
    background-color: rgb(255, 255, 255);
    position: relative;
    font-family: inherit;
    border-radius: 6px;
    cursor: pointer;
`
export const ImageContainer=styled.div`
height: 240px;
padding: 5px;
position: relative;
text-align: center;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
`
export const Image=styled.img`
max-width: 100%;
max-height: 100%;
display: inline-block;
position: relative;
`
export const Description=styled.div`
padding: 20px 25px 30px;
`
export const Title=styled.h3`
font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: rgb(13, 17, 54);
    margin: 0px 0px 7px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export const Measure=styled.span`
font-family: Lato, sans-serif;
font-size: 13px;
font-weight: 400;
color: rgb(119, 121, 140);
`
export const ProductMeta=styled.div`
margin-top: 30px;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: justify;
justify-content: space-between;
position: relative;
@media(max-width: 767px){
    margin-top:45px;
}
`
export const PriceOuter=styled.div`
position: relative;
display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const Price= styled.span`

    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: rgb(0, 158, 127);
`
export const ProductsOuter1=styled.div`
width: calc(100% - 280px);
height: auto;
min-height: 100vh;
padding: 30px 30px 50px;
@media only screen and (max-width:995px){
width: 100%;
height: auto;
min-height: 100vh;
padding: 0px 0px 0px;
}

`
export const ProductsOuter2=styled.div`
display: flex;
flex-wrap: wrap;
background-color: rgb(247, 247, 247);
position: relative;
margin: 0px -15px;
@media (max-width: 990px)
{
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    background-color: rgb(255, 255, 255);
}

`
export const LeftSidebarOuter1=styled.div`
background-color: rgb(255, 255, 255);
width: 280px;
@media only screen and (max-width:995px){
    display:none;
}
`
export const LeftSidebarOuter2=styled.div`
position: relative;
width: 100%;
`
export const LeftSidebarOuter3=styled.div`
padding-top: 45px;
@media (max-width: 1199px)
{
    padding: 40px 0px;
}

`

