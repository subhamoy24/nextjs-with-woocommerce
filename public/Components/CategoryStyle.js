import styled from '@emotion/styled'
export const CategoryOuter=styled.div`
margin-bottom: 15px;
padding-left: 0px;
position: relative;
overflow-x: hidden;
`
export  const CategoryHeader=styled.header`
    font-size: 15px;
    font-weight: 500;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 12px;
    color: rgb(13, 17, 54);
    cursor: pointer;
    transition: all 0.15s ease-in-out 0s;
    padding: 5px 0px;
    outline: 0px;
`
export const CateImg=styled.div`
width: 20px;
    height: auto;
    margin-right: 15px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
`
export const CateName=styled.span`
text-overflow: ellipsis;
white-space: nowrap;
vertical-align: middle;
overflow: hidden;
`
export const CateTog=styled.button`
color: rgb(13, 17, 54);
padding: 0px 5px;
margin-left: auto;
height: auto;
transition: transform 0.3s ease 0s;
font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 6px;
    appearance: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-shrink: 0;
    text-align: center;
    text-decoration: none;
    font-family: inherit;
    border: 0px;
    background-color: transparent;
`
export const CateSubOut1=styled.div`
opacity: 0;
height: 0;
will-change: transform, opacity, height;
    border-left: 0px;
    overflow: hidden;
`
export const CateSubOut2=styled.div`
transform: translate3d(20px, 0px, 0px);

`
export const CateSubItem=styled.div`

margin-bottom: 10px;
padding-left: 32px;
position: relative;
overflow-x: hidden;
`
export const CateSubItemHead=styled.header`
font-size: 13px;
    font-weight: 500;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 0px;
    color: rgb(119, 121, 140);
    cursor: pointer;
    transition: all 0.15s ease-in-out 0s;
    padding: 5px 10px;
    margin-left: -10px;
    border-radius: 6px;
    outline: 0px;
`
