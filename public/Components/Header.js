import React, { useEffect, useState } from"react";
import styled from '@emotion/styled'
import Link from "next/link";
import DrawBox from "./DrawerMobile";
import Cookie from 'js-cookie';
import { useRouter } from "next/router";
import Router from 'next/router';
const HeadOut=styled.div`
position: relative;
    z-index: 1001;
    top: 0px;
`

const Head=styled.header`
position: fixed;
background-color: transparent;
box-shadow: none;
transition: all 0.3s ease 0s;
z-index: 99999;
    top: 0px;
    left: 0px;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 20px 30px;
    display:flex;

`
const LeftHeadWrap=styled.div`

display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-shrink: 0;
    align-items: center;
`
const Logo=styled.span`
@media screen and (min-width: 991px) {
    margin-right: 40px;
}
@media screen and (min-width: 767px) {
    margin-right: 20px;
}
color: rgb(13, 17, 54);
font-size: 26px;
font-weight: 700;
cursor: pointer;
margin-right: 0px;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
`
const FilterOuter=styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
@media screen and (max-width: 800px) {
  display:none
}
`
const FilterIn=styled.div`
position: relative;
    cursor: pointer;
`
const FilterHandler=styled.div`
display: inline-block;
    cursor: pointer;
`
const FiletrButton=styled.button`
width: auto;
height: 38px;
display: flex;
-webkit-box-align: center;
align-items: center;
background-color: rgb(255, 255, 255);
border: 1px solid rgb(241, 241, 241);
padding: 0px 15px;
border-radius: 6px;
outline: 0px;
min-width: 150px;
cursor: pointer;
`
const CurrentEle=styled.span`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: rgb(0, 158, 127);
    text-decoration: none;
  first-child {
      margin-right: auto;
  }
`
const Icon=styled.div`
margin-right: 7px;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
min-width: 16px;
`
const Text=styled.span`
display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: rgb(0, 158, 127);
    text-decoration: none;
`
const Arrow=styled.span`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: rgb(0, 158, 127);
    text-decoration: none;
    width: 12px;
    margin-left: 16px;
`
const SearchWrap=styled.form`
display: flex;
margin: 0px 15px;
-webkit-box-align: center;
align-items: center;
border-radius: 6px;
overflow: hidden;
width: 100%;
color: rgb(119, 121, 140);
background-color: rgb(247, 247, 247);
border-width: 1px;
border-style: solid;
border-color: rgb(241, 241, 241)
max-width:270px;
@media screen and (max-width: 800px) {
  display:none
}
`
const InputSearch=styled.input`
-webkit-box-flex: 1;
    flex-grow: 1;
    font-size: 15px;
    height: 48px;
    color: rgb(119, 121, 140);
    background-color: inherit;
    appearance: none;
    border: 0px;
    max-width:270px;
    @media screen and (max-width: 800px) {
      display:none
  }
`
const RightHeadWraper=styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
flex-shrink: 0;
`
const MenuOffer=styled.a`
display: flex;
    align-items: center;
    margin-right: 35px;
    font-size: 15px;
    font-weight: 700;
    color: rgb(13, 17, 54);
    line-height: 1.2em;
    transition: all 0.15s ease-in-out 0s;
    font-family: Lato, sans-serif;
    @media screen and (max-width: 800px) {
      display:none
  }
`
const Login=styled.button`
padding: 0px 15px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    border-radius: 6px;
    appearance: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-shrink: 0;
    text-align: center;
    height: 38px;
    text-decoration: none;
    font-family: inherit;
    border: 0px;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 158, 127);
    margin-right:20px;
    @media screen and (max-width: 800px) {
      display:none
  }
`

const IconContent=styled.div`
width: 26px;
    cursor: pointer;
    display: block;
    position: relative;
    margin-right:10px;
`
const LineBars=styled.span`
display: block;
    background-color: rgb(13, 17, 54);
    border-radius: 6px;
    height: 3px;
    margin-bottom: 5px;
    transition: all 0.2s ease-in-out 0s;
`
const OuterIcon=styled.div`
  display:flex;
  margin-top:5px;
  @media (min-width: 800px){
    visibility:hidden;
  }
  @media (max-width: 800px){
    visibility:visible;
  }

`
const OuterIcon1=styled.div`
@media (min-width: 800px){
  display:none;
}
  @media (max-width: 799px){
    display:inline-block;
  }

`
export const logoutUser=(setLogged)=>{
  Cookie.remove('userId');
  Cookie.remove('token');
  setLogged(false)
  Router.push('/shops');
}
const IconBars=()=>{
  return(
  <OuterIcon>
    <OuterIcon1>
      <IconContent>
        <LineBars/>
        <LineBars/>
        <LineBars/>
      </IconContent>
    </OuterIcon1>
  </OuterIcon>
  )
}
const Search=()=>{
  return(
    <SearchWrap>
      <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="18px" viewBox="0 0 17.048 18" style={{marginLeft:"16px",marginRight:"16px",color:"#212121"}}><path id="Path_142" data-name="Path 142" d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z" transform="translate(-367.297 -371.285)" fill="currentColor"></path></svg>
      <InputSearch placeholder="search.."/>
    </SearchWrap>
  )
}
const ButtonPad=styled.div`
text-decoration: none;
    outline: none;
    border: none;
    background: none;
`
const LeftHead=({setOpenDrawer})=>{
  const onclickdraw=()=>{
    setOpenDrawer(true);
  }
  return(
    <LeftHeadWrap>
      <ButtonPad  onClick={onclickdraw}>
      <IconBars/>
      </ButtonPad>
      <Logo>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDkuMTI0IiBoZWlnaHQ9IjE4Ij48ZyBkYXRhLW5hbWU9Ikdyb3VwIDI4MjkiPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjkwIiBkPSJNMCAuNjUybDIuMDcyLjAyNkMzLjgxNC42OTkgNS41NjMuNjI3IDcuMjk2Ljc2M2E1LjIgNS4yIDAgMDE0LjggNC4xNjEgNS4yMjIgNS4yMjIgMCAwMS00LjQyMyA2LjQ4NCAyMS42NjIgMjEuNjYyIDAgMDEtMy40MjIuMTE3Yy0uMzkzIDAtLjQ4Ni4xMjQtLjQ4Mi41LjAxOSAxLjcuMDA4IDMuNDA2LjAwOCA1LjEwOXYuNTM0SDB6bTMuODMyIDcuNjY5Yy40NyAwIC45LjAxNyAxLjMxOCAwYTEwLjQ0OSAxMC40NDkgMCAwMDEuNzgxLS4xNTMgMS45NDQgMS45NDQgMCAwMDEuNTI3LTEuOTUgMS45NzQgMS45NzQgMCAwMC0xLjI5My0yLjA0IDEwLjc0OCAxMC43NDggMCAwMC0zLjMzMi0uMjI5eiIgZmlsbD0iIzBkMTEzNiIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjkxIiBkPSJNMTA5LjEyNCA5LjM2YTQuMjY5IDQuMjY5IDAgMDAtMi4wMTMtLjAxOSAyLjUyMSAyLjUyMSAwIDAwLTEuOSAyLjQzMWMtLjA2OSAxLjc0MS0uMDQ3IDMuNDg1LS4wNjMgNS4yMjd2LjYyN2gtMy41ODFWNS44MDRoMy40NjZ2MS40MjVhMy4yNjYgMy4yNjYgMCAwMTIuMzQ5LTEuNDc3IDEwLjk0NiAxMC45NDYgMCAwMTEuNzQuMDEzeiIgZmlsbD0iIzAwOGQ3MSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjkyIiBkPSJNNDguODIzLjY3OGguNTE2YzIuMjM2LjAyIDQuNDc4LS4wNjQgNi43LjA4OWE0LjQxMiA0LjQxMiAwIDAxNC4yODMgMy41ODUgMy44NzYgMy44NzYgMCAwMS0yLjE4MiA0LjQyNS40LjQgMCAwMC0uMDg5LjA2IDExLjAyOCAxMS4wMjggMCAwMTEuNTE1LjkyOSA0LjMzOSA0LjMzOSAwIDAxLjc2NCA1LjQzMSA0Ljc2MSA0Ljc2MSAwIDAxLTQuMTk1IDIuNDI1Yy0yLjM5My4wODQtNC43OTEuMDI3LTcuMTg3LjAzYS41NDYuNTQ2IDAgMDEtLjEzLS4wMzh6bTMuNjYzIDEzLjloMi4xYTcuMDgzIDcuMDgzIDAgMDAuOC0uMDMzIDEuOTMyIDEuOTMyIDAgMDAxLjgxLTEuOCAxLjgxNiAxLjgxNiAwIDAwLTEuNDA2LTJjLTEuMDc4LS4xNjQtMi4xODQtLjE1NS0zLjMwNS0uMjIyem0wLTcuMWMuNzU5IDAgMS40ODguMDE5IDIuMjE2LS4wMDlhMy4xMTkgMy4xMTkgMCAwMC45My0uMTkzIDEuNjUgMS42NSAwIDAwMS4wOTItMS42ODUgMS41NjcgMS41NjcgMCAwMC0xLjIxLTEuNjM0Yy0uOTg3LS4xNi0yLS4xNTktMy4wMjgtLjIyOXoiIGZpbGw9IiMwMDhkNzEiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjY5MyIgZD0iTTM4LjQ1OCA5LjY4NmMuODQ4LS45MzUgMS43NjEtMS44MiAyLjUyNS0yLjgxOWEyLjU0OCAyLjU0OCAwIDAxMi41LTEuMTE0YzEuMDI1LjEgMi4wNjYuMDIxIDMuMjA4LjAyMWwtNC42MzQgNC45ODIgNC43MzQgNi45Yy0xLjMgMC0yLjUxOS0uMDMtMy43MzcuMDE0YTEuMDY5IDEuMDY5IDAgMDEtMS4wOC0uNTc3Yy0uNzY0LTEuMjE0LTEuNTgzLTIuMzkzLTIuNDE2LTMuNjM5LS40LjQzNi0uNzgxLjgzNi0xLjEzOCAxLjI1OC0uMDcxLjA4NC0uMDU4LjI1Mi0uMDU5LjM4MnYyLjUzNmgtMy41NjdWLjM1OGgzLjU1NHY5LjN6IiBmaWxsPSIjMGQxMTM2Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI2OTQiIGQ9Ik03My40OTMgMTcuNjQ0aC0zLjE5NWwtLjEyNi0xLjE3NGExMi40MyAxMi40MyAwIDAxLTEuMTg1Ljk2OGMtMS40MS45LTQuNDU5Ljg3My01Ljc1Ny0xLjIzNWEzLjQ0NSAzLjQ0NSAwIDAxMi4zMjktNS4yMjhjMS4wNjktLjI1OCAyLjE3MS0uMzg0IDMuMjU3LS41Ny4wOTItLjAxNi4xODMtLjAzMy4yNzUtLjA0N2EuODA5LjgwOSAwIDAwLjc3MS0uNTg3IDEuMDE4IDEuMDE4IDAgMDAtLjI5NS0xLjAyMyAyLjA3MyAyLjA3MyAwIDAwLTIuMDg1LS40MjggMS44MTEgMS44MTEgMCAwMC0xLjMzOCAxLjM0NWMtLjAxNi4wNS0uMDEzLjEwNi0uMDI2LjE1N2ExLjE0MiAxLjE0MiAwIDAxLS4wNjMuMTQzbC0xLjU0Ny0uM2MtLjUxNy0uMS0xLjAxMS0uMjA5LTEuNTQ2LS4zMjFhMy42OSAzLjY5IDAgMDEuODU5LTIuMDc1IDQuNzg5IDQuNzg5IDAgMDEyLjgyMy0xLjY3OCA3LjIzIDcuMjMgMCAwMTQuMTIyLjI2NCAzLjkgMy45IDAgMDEyLjYyOSAzLjc4MWMuMDU5IDEuNjQ4LjAxIDMuMy4wMjQgNC45NS4wMSAxLjAwNy4wNDggMi4wMTYuMDc0IDMuMDU4em0tMy42MS01LjE3NmMtLjQyMy4wNjMtLjgyLjEtMS4yMDcuMTg1YTE0LjY4OCAxNC42ODggMCAwMC0xLjgzNy40NjhjLS40NDkuMTYxLS41NTcuNi0uNTQ4IDEuMDU5YTEuMTMxIDEuMTMxIDAgMDAuNTg1IDEuMDIxIDIuMjM1IDIuMjM1IDAgMDAyLjY1OC0uNzE5IDMuMTc4IDMuMTc4IDAgMDAuMzQ5LTIuMDEzeiIgZmlsbD0iIzAwOGQ3MSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjk1IiBkPSJNOTguNTA5IDE3LjYzOWgtMy4ybC0uMTI1LTEuMjI4YS44NjIuODYyIDAgMDAtLjE1NC4xMjljLTEuMzQ1IDEuOTM0LTQuOTE4IDEuODY5LTYuNDE3LjE1OGEzLjQyMyAzLjQyMyAwIDAxMS40NTctNS41NTQgMjkuNzI0IDI5LjcyNCAwIDAxMy4yMzYtLjY1NmMuMjc0LS4wNTMuNTUzLS4wODEuODI2LS4xMzhhLjg4OC44ODggMCAwMC40OS0xLjU2MyAyLjAyNiAyLjAyNiAwIDAwLTIuMDMxLS40ODYgMS44IDEuOCAwIDAwLTEuNDExIDEuMzE2Yy0uMDM0LjEtLjA1LjItLjA4Ni4zNTlsLTMuMTIzLS42MjlhMy45MzEgMy45MzEgMCAwMTEuOTU0LTMuMDM1IDYuNTI3IDYuNTI3IDAgMDE2LjM0My0uMjI0QTMuNjc1IDMuNjc1IDAgMDE5OC40IDkuNDk3Yy4wNjQgMS41ODEuMDIxIDMuMTY3LjAzNyA0Ljc1MS4wMTYgMS4xMTIuMDQ4IDIuMjMuMDcyIDMuMzkxem0tMy41NDUtNS4xODJjLS44LjEyNS0xLjUuMjEzLTIuMTg3LjM0OWEzLjU2MSAzLjU2MSAwIDAwLS45NjYuMzQgMS4wNDcgMS4wNDcgMCAwMC0uNSAxLjA5MiAxLjExNCAxLjExNCAwIDAwLjYzNS45OSAyLjEgMi4xIDAgMDAyLjg1My0xLjMgMTAuNzgyIDEwLjc4MiAwIDAwLjE2NS0xLjQ2OHoiIGZpbGw9IiMwMDhkNzEiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjY5NiIgZD0iTTMyLjM2NyA5LjU0NGwtMy4wNTguOTE4YTcuMDIzIDcuMDIzIDAgMDAtMS4wMDctMS4yMjcgMi42NTMgMi42NTMgMCAwMC00LjE0NyAxLjU3OCA0LjY0OSA0LjY0OSAwIDAwLS4wMDYgMS43NzMgMi41NjEgMi41NjEgMCAwMDIuMjIyIDIuMDUyIDIuNSAyLjUgMCAwMDIuODMtMS40NDRjLjA1My0uMS4yNDMtLjIyNi4zMy0uMi45NjkuMjc2IDEuOTMxLjU3OSAyLjk1Ni44OTRhNy43NzMgNy43NzMgMCAwMS0uMjguNzkyQTUuNTc2IDUuNTc2IDAgMDEyNi45NTQgMThhNi4yODcgNi4yODcgMCAxMS0uMTYzLTEyLjU2OSA1Ljc1MyA1Ljc1MyAwIDAxNC42MzggMi4wODUgNC42MjUgNC42MjUgMCAwMS45MzggMi4wMjh6IiBmaWxsPSIjMGQxMTM2Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI2OTciIGQ9Ik03NS45NDcgNS43OTJoOS42NzRjLjAwNi4xMjYuMDE4LjI1Mi4wMTguMzc5IDAgLjYzOS0uMDM4IDEuMjgxLjAxMyAxLjkxNmExLjQyNCAxLjQyNCAwIDAxLS40ODMgMS4xODVjLTEuNTcyIDEuNjI3LTMuMTIzIDMuMjc0LTQuNjgxIDQuOTE0LS4wODguMDkzLS4xNjkuMTkyLS4zMDcuMzUxSDg1Ljd2My4xaC05LjljLS4wMS0uMTUtLjAyNi0uMjkxLS4wMjYtLjQzMiAwLS43MzIuMDIyLTEuNDY1LS4wMS0yLjJhMS4yNDEgMS4yNDEgMCAwMS40LS45ODNjMS41MjYtMS42IDMuMDM2LTMuMjA5IDQuNTUxLTQuODE3LjA4LS4wODUuMTU1LS4xNzUuMjc5LS4zMTdoLTUuMDUzeiIgZmlsbD0iIzAwOGQ3MSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjk4IiBkPSJNMTQuNDg1IDE3LjYyNlY1LjgwNWgzLjU2N3YxMS44MjF6IiBmaWxsPSIjMGQxMTM2Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI2OTkiIGQ9Ik0xOC4zODYgMi4xMzhhMi4xIDIuMSAwIDAxLTIuMTQ4IDIuMSAyLjEzOSAyLjEzOSAwIDAxLTIuMDc4LTIuMTRBMi4xNDEgMi4xNDEgMCAwMTE2LjI4Ni4wMDVhMi4wODIgMi4wODIgMCAwMTIuMSAyLjEzM3oiIGZpbGw9IiMwMDhkNzEiLz48L2c+PC9zdmc+" alt="Shop Logo" class="logostyle__LogoImage-sc-14em7a1-1 kkfezX"></img>
      </Logo>
      <FilterOuter>
        <FilterIn>
          <FilterHandler>
            <FiletrButton>
              <CurrentEle>
                <Icon>
                 <svg  style={{minWidth: "15px",
    maxWidth: "20px",
    maxHeight: "19px"}} xmlns="http://www.w3.org/2000/svg" width="20.347" height="24.101" viewBox="0 0 20.347 24.101"><g id="Grocery" transform="translate(-39.481 0.052)"><path id="Path_17386" data-name="Path 17386" d="M349.261,399.988a.469.469,0,1,1,.461-.385A.473.473,0,0,1,349.261,399.988Z" transform="translate(-294.289 -380.346)" fill="currentColor" stroke="currentColor" stroke-width="0.1"></path><path id="Path_17387" data-name="Path 17387" d="M58.743,8.638A6.2,6.2,0,0,0,55.4,6.3a6.662,6.662,0,0,0-3.058.055h0l-.034.008-.091.02c-.074.017-.188.045-.31.076-.16.041-.323.078-.485.108q0-.182-.014-.374a6.162,6.162,0,0,1,1.87-3.956A6.643,6.643,0,0,1,55.212.9.469.469,0,0,0,54.87.032a7.448,7.448,0,0,0-2.223,1.509,7.229,7.229,0,0,0-1.659,2.437,4.837,4.837,0,0,0-1.119-1.837C47.744.019,43.762.68,43.527.721h0a.457.457,0,0,0-.367.314.6.6,0,0,0-.017.066c-.027.151-.573,3.346.8,5.557a7.353,7.353,0,0,0-3.914,6.923,11.6,11.6,0,0,0,1.142,4.581,14.2,14.2,0,0,0,2.744,4.091A5.044,5.044,0,0,0,47.309,24a6.6,6.6,0,0,0,1.88-.276A3.331,3.331,0,0,1,51,23.691l.006,0,.11.031A6.6,6.6,0,0,0,53,24a4.912,4.912,0,0,0,3.25-1.608,13.985,13.985,0,0,0,4.029-8.812A8.163,8.163,0,0,0,58.743,8.638ZM49.206,2.8a5.247,5.247,0,0,1,1.256,3.409c-.017.211-.025,1.132-.025,1.132L46.881,3.794a.469.469,0,0,0-.663.663L49.8,8.033c-1.224.066-3.343-.027-4.572-1.255C43.75,5.3,43.912,2.552,44.02,1.6c.953-.108,3.709-.27,5.185,1.2ZM55.6,21.716A4.033,4.033,0,0,1,53,23.062a5.728,5.728,0,0,1-1.609-.236l-.141-.04h0a4.269,4.269,0,0,0-2.329.04,5.728,5.728,0,0,1-1.609.236A4.172,4.172,0,0,1,44.58,21.59a13.058,13.058,0,0,1-3.612-8.009c0-3.445,1.878-5.444,3.571-6.163l.024.024a6.632,6.632,0,0,0,4.665,1.547A9.91,9.91,0,0,0,50.9,8.863c.374-.082.365-.256.388-.364V8.482a9.219,9.219,0,0,0,.107-.965.475.475,0,0,0,.083-.007c.22-.038.441-.085.658-.142.084-.022.165-.042.232-.058,1.934.674,3.846,2.849,3.846,6.269a9.857,9.857,0,0,1-.747,3.455.469.469,0,1,0,.874.339,10.789,10.789,0,0,0,.811-3.795,7.594,7.594,0,0,0-3.162-6.493,4.317,4.317,0,0,1,1.17.122c2.013.521,4.18,2.737,4.18,6.371A13.138,13.138,0,0,1,55.6,21.716Z" transform="translate(-0.5)" fill="currentColor" stroke="currentColor" stroke-width="0.1"></path></g></svg>
                </Icon>
                <Text>
                  Grossery
                  </Text>
                <Arrow>
                <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="6px" viewBox="0 0 12 6"><path id="Path_2897" data-name="Path 2897" d="M0,63.75l6,6,6-6Z" transform="translate(0 -63.75)" fill="currentColor"></path></svg>
                </Arrow>
              </CurrentEle>
            </FiletrButton>
          </FilterHandler>
        </FilterIn>
      </FilterOuter>
    </LeftHeadWrap>
  )
}
const RightHead=({logged, setLogged})=>{
  return(
  <RightHeadWraper>
    <div>
      <MenuOffer>
        offer
      </MenuOffer>
    </div>
    {!logged?
    <>
    <Link href={"/login"}>
    <Login>
      login
    </Login>
    </Link>
    <Link href={"/sign-up"}>
    <Login >
      sign up
    </Login>
    </Link>
    </>:""}
    {logged?(<Login onClick={()=>{logoutUser(setLogged)}}>
      logout
    </Login>):""}
  </RightHeadWraper>)
}

function Header(){
   const [openDrawer, setOpenDrawer]=useState(false)
   const [logged, setLogged]= useState(false);
   useEffect(()=>{
     const p=Cookie.get('userId');
     if(p){
       setLogged(true)
     }
   })
    return (
      <>
      {openDrawer?<DrawBox setOpenDrawer={setOpenDrawer}/>:""}
        <HeadOut>
          <Head>
            <LeftHead  setOpenDrawer={setOpenDrawer}/>
            <Search/>
            <RightHead logged={logged} setLogged={setLogged}/>
          </Head>
        </HeadOut>
      </>
)
}
  export default Header;