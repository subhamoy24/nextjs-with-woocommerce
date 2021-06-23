
import Router from 'next/router';
import React,{ useEffect } from "react"

function Profile({user_id,info}){
    useEffect(()=>{
        if(!user_id){
            console.log("poo")
            Router.push('/shops');
        }
    },)
     return(
         <>
         <h3>{info.first_name}</h3>
         <h3>{info.last_name}</h3>
         </>
     )
}

export default Profile