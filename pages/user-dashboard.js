import React, { useState } from "react";
import Layout from '../public/Components/Layout'
import Profile from '../public/Components/Profile'
import { ParseCookie } from "../public/Components/ParseCookie";
import { getUser } from "./api/RestAPI";
import { useRouter } from "next/router";
/*import '../styles/App.css'
import '../styles/filter.css'
import '../styles/mobilecart.css'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
*/
function UserDashboard({userId,info}){
    return(
        <Layout>
            <Profile user_id={userId} info={info}/>
        </Layout>
    )
}

export async function getServerSideProps({req,res}){
    const cookies = ParseCookie(req);
    console.log(cookies.userId)
    console.log(cookies.token)
    if(cookies.userId){
        const info = await getUser(cookies.userId)
        if(info.id){
            return {props:{
                userId:cookies.userId,
                info:info
            }};
        }else{
            res.setHeader('Location','/shops')
            res.statusCode=302;
            res.end()
            return {props:{
                userId:null,
                info:{}
            }} 
        }

    }
    res.setHeader('Location','/shops')
    res.statusCode=302;
    res.end()
    return {props:{
        userId:null,
        info:{}
    }};
}
export default UserDashboard;