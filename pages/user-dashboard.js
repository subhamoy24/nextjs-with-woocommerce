import React, { useState } from "react";
import axios from 'axios';
import Layout from '../public/Components/Layout'
import Profile from '../public/Components/Profile'
import { ParseCookie } from "../public/Components/ParseCookie";
import { getUser } from "./api/RestAPI";
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

export async function getServerSideProps({req}){
    const cookies = ParseCookie(req);
    console.log(cookies.userId)
    console.log(cookies.token)
    if(cookies.userId && cookies.token){
        const info = await getUser(cookies.userId)
        return {props:{
            userId:cookies.userId,
            info:info
        }};

    }
    return {props:{
        userId:cookies.userId,
        info:{}
    }};
}
export default UserDashboard;