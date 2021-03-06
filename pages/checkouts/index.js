import React,{useState,useEffect} from "react";
import Checkout from '../../public/Components/Checkout'
import Layout from "../../public/Components/Layout";
import { ParseCookie } from "../../public/Components/ParseCookie";
import { getUser } from "../api/RestAPI";
export default function Checkouts({info}){
    
    return(
        <Layout>
            <Checkout info={info}/>
        </Layout>
    )
}
export async function getServerSideProps({req}){
    const cookies = ParseCookie(req);
    console.log(cookies.userId)
    console.log(cookies.token)
    if(cookies.userId && cookies.token){
        const info = await getUser(cookies.userId);
        return {props:{
            userId:cookies.userId,
            info:info
        }};

    }
    return {props:{
        userId:"",
        info:{}
    }};
}