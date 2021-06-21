import React from "react";
import App from '../../public/Components/App'
import Layout from '../../public/Components/Layout'
import { getCategories, getProducts } from "../api/RestAPI";
function Shops({products,categories}){
    if(!products){
        return(<h1>vvhhhyhfy</h1>)
    }else{
        return(
        <Layout>
           <App product={products} category={categories}/>
        </Layout>
        )
    }
}
export async function getStaticProps(){
    const products=await getProducts();
    const categories=await getCategories();
    return {props:{
            products,
            categories
    }};
    
}
export default Shops