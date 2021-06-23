
import styled from '@emotion/styled'
import Link from 'next/link';
import React, { useEffect, useState } from"react";
import Cookie from 'js-cookie';
import {logoutUser} from "./Header";
const DrawerWholeWraper=styled.div`
width: 100%;
`
const  DrawerContentWraper=styled.div`
width: 316px;
box-shadow: 2px 0 8px rgb(0 0 0 / 15%);
height: 100%;
position: fixed;
background: #fff;
z-index: 9999;
`
const DrawerContent=styled.div`
overflow: auto;
position: relative;
height: 100%;
`
const DrwerScrollbar=styled.div`
align-items: flex-start;
align-content: flex-start;
-webkit-box-align: start;
justify-content: flex-start;
flex-wrap: nowrap;
flex-direction: column;
position: relative;
overflow: visible!important;
height: 100%;
`
const MainContentWrap=styled.div`
direction: inherit;
position: absolute;
overflow: visible;
padding: 0;
margin: 0;
left: 0;
top: 0;
bottom: 0;
right: 0;
width: auto!important;
height: auto!important;
z-index: 0;
`
const MainContentWrap1=styled.div`
direction: inherit!important;
-moz-box-sizing: inherit!important;
box-sizing: inherit!important;
resize: none!important;
outline: none!important;
position: absolute;
overflow: hidden;
top: 0;
left: 0;
bottom: 0;
right: 0;
padding: 0;
margin: 0;
`
const MainContentWrap2=styled.div`
box-sizing: border-box!important;
    position: relative;
    display: block;
    visibility: visible;
    padding: 0px;
    height: auto;
    width: 100%;
`
const MainContentWrap3=styled.div`
padding-top: 60px;
`
const JoinSection=styled.div`
background-color: rgb(247, 247, 247);
padding: 45px;
`
const ListWrap=styled.div`
padding: 40px 0px;
direction:inherit;
::before, ::after {
    box-sizing: border-box;
}
`
const ListItem=styled.a`
display: flex;
align-items: center;
padding: 5px 45px;
font-weight: 400;
color: rgb(13, 17, 54);
margin-bottom: 19px;
position: relative;
cursor:pointer;
transition: all 0.15s ease-in-out 0s;
:hover,:focus,:active{
    text-decoration:none;
    color:inherit;
}

`
const DrwerClose=styled.button`
display: block;
    position: absolute;
    left: 35px;
    top: 10px;
    color: rgb(119, 121, 140);
    cursor: pointer;
    padding: 10px;
    z-index: 1;
    text-decoration: none;
    outline: none;
    border: none;
    background: none;
`
const DrwerClose1=styled.button`
    text-decoration: none;
    outline: none;
    border: none;
    background: none;
`
const DrawBox=({setOpenDrawer})=>{
  const [logged, setLogged]= useState(false);
   useEffect(()=>{
     const p=Cookie.get('userId');
     if(p){
       setLogged(true)
     }
   })
    return(
        <DrawerWholeWraper>
            <DrawerContentWraper>
                <DrawerContent>
                    <DrwerScrollbar>
                        <MainContentWrap>
                            <MainContentWrap1>
                                <MainContentWrap2>
                                    <MainContentWrap3>
                                        <JoinSection>
                                            <div>
                                             <DrwerClose onClick={()=>{setOpenDrawer(false)}}>
                                             <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 10.003 10"><path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg>
                                             </DrwerClose>
                                            </div>
                                        </JoinSection>
                                        <ListWrap>
                                            {!logged?
                                            <>
                                                <div>
                                                <Link href='/login'>
                                                <ListItem>
                                                    Login
                                                </ListItem>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link href="/sign-up">
                                                <ListItem>
                                                    sign up
                                                </ListItem>
                                                </Link>
                                            </div>
                                            </>:""}
                                            <div>
                                                <Link href="checkouts">
                                                <ListItem>
                                                    checkout
                                                </ListItem>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link href="user-dashboard">
                                                <ListItem>
                                                    profile
                                                </ListItem>
                                                </Link>
                                            </div>
                                            {logged?
                                            <>
                                            <div>
                                                <Link href="user-dashboard">
                                                <ListItem>
                                                    profile
                                                </ListItem>
                                                </Link>
                                            </div>
                                            <div>
                                            <div onClick={()=>{logoutUser(setLogged)}}>
                                            <ListItem>
                                                logout
                                            </ListItem>
                                            
                                        </div>
                                        </div>
                                            </>
                                            :""}

                                        </ListWrap>
                                    </MainContentWrap3>
                                </MainContentWrap2>
                            </MainContentWrap1>
                        </MainContentWrap>
                    </DrwerScrollbar>
                </DrawerContent>
            </DrawerContentWraper>
        </DrawerWholeWraper>
    )
}
export default DrawBox;