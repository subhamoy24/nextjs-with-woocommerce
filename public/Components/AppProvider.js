import React, { useEffect, useState, createContext } from 'react';

const AppContext = createContext();

const AppProvider = (props)=>{
    const [cart ,setCart ]= useState(null);
    useEffect(
        ()=>{
            if(process.browser){
                let  cartData = localStorage.getItem('woo-next-cart');
                if( cartData){
                    cartData = JSON.parse(cartData)
                }else{
                    cartData = ''
                }
                setCart(cartData);
            }
        },[]
    );
    return <AppContext.Provider value={[cart, setCart]}>{props.children}</AppContext.Provider>
}
export default AppProvider
export {AppContext}