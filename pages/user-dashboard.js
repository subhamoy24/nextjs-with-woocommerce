import React, { useState } from "react";
import axios from 'axios';
import Layout from '../public/Components/Layout'
import Profile from '../public/Components/Profile'
import { ParseCookie } from "../public/Components/ParseCookie";
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
        const info1 = await fetch(`http://localhost:3000/get-user?id=${cookies.userId}`)
        const info = await info1.json();
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