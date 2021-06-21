import React from "react";
import App from '../../public/Components/App'
import Layout from '../../public/Components/Layout'
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
    const res=await fetch('http://localhost:3000/getProducts')
    const products=await res.json()
    const res1=await fetch('http://localhost:3000/getCategories')
    const categories=await res1.json()
    return {props:{
        products,
        categories
    }};
}
export default Shops