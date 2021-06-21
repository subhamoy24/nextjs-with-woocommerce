
import React, { useEffect, useState, useContext } from 'react';
const iu ='/img/1.jpg'
import $, { data } from 'jquery';
import Filter from './Filter'
import ShowBasket from './ShowBasket'
import MobileCart from './MobileCart'
import styled from '@emotion/styled'
import Skeleton from 'react-loading-skeleton'
import parse from 'html-react-parser'
import { AppContext } from './AppProvider';
import {addFirstItem,updateStorage,reduceStorage,decreaseStorage} from './Functions'
import CartItem from './CartItem';
import Link from 'next/link';
import './Product'
import { CardOuter, CardOuter1, CardOuter2, Description, ImageContainer , Image,Title,Measure, ProductMeta, PriceOuter,Price, ProductsOuter1,ProductsOuter2, LeftSidebarOuter1 } from './Product';
import { getProducts } from '../../pages/api/RestAPI';
const CategoryOuter=styled.div`
margin-bottom: 15px;
padding-left: 0px;
position: relative;
overflow-x: hidden;
`
const CategoryHeader=styled.header`
    font-size: 15px;
    font-weight: 500;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 12px;
    color: rgb(13, 17, 54);
    cursor: pointer;
    transition: all 0.15s ease-in-out 0s;
    padding: 5px 0px;
    outline: 0px;
`
const CateImg=styled.div`
width: 20px;
    height: auto;
    margin-right: 15px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
`
const CateName=styled.span`
text-overflow: ellipsis;
white-space: nowrap;
vertical-align: middle;
overflow: hidden;
`
const CateTog=styled.button`
color: rgb(13, 17, 54);
padding: 0px 5px;
margin-left: auto;
height: auto;
transition: transform 0.3s ease 0s;
font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 6px;
    appearance: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-shrink: 0;
    text-align: center;
    text-decoration: none;
    font-family: inherit;
    border: 0px;
    background-color: transparent;
`
const CateSubOut1=styled.div`
opacity: 0;
height: 0;
will-change: transform, opacity, height;
    border-left: 0px;
    overflow: hidden;
`
const CateSubOut2=styled.div`
transform: translate3d(20px, 0px, 0px);

`
const CateSubItem=styled.div`

margin-bottom: 10px;
padding-left: 32px;
position: relative;
overflow-x: hidden;
`
const CateSubItemHead=styled.header`
font-size: 13px;
    font-weight: 500;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 0px;
    color: rgb(119, 121, 140);
    cursor: pointer;
    transition: all 0.15s ease-in-out 0s;
    padding: 5px 10px;
    margin-left: -10px;
    border-radius: 6px;
    outline: 0px;
`
const EmptyCartWrap=styled.div`
max-height: calc(100vh - 245px);
background-color: rgb(255, 255, 255);
width:100%;
height:auto;
`
const EmptyCartOuter=styled.div`
display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 50px;
`
const EmptyMessage=styled.span`
font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: rgb(119, 121, 140);
    display: block;
    width: 100%;
    padding: 40px 0px;
    text-align: center;

`
const EmptyCart=()=>{
  return (
    <EmptyCartWrap>
      <EmptyCartOuter>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 231.91 292"><defs><linearGradient id="linear-gradient" x1="1" y1="0.439" x2="0.369" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#029477"></stop><stop offset="1" stop-color="#009e7f"></stop></linearGradient></defs><g id="no_cart_in_bag_2" data-name="no cart in bag 2" transform="translate(-1388 -351)"><ellipse id="Ellipse_2873" data-name="Ellipse 2873" cx="115.955" cy="27.366" rx="115.955" ry="27.366" transform="translate(1388 588.268)" fill="#ddd" opacity="0.25"></ellipse><path id="Path_18691" data-name="Path 18691" d="M29.632,0H170.368A29.828,29.828,0,0,1,200,30.021V209.979A29.828,29.828,0,0,1,170.368,240H29.632A29.828,29.828,0,0,1,0,209.979V30.021A29.828,29.828,0,0,1,29.632,0Z" transform="translate(1403 381)" fill="#009e7f"></path><path id="Rectangle_1852" data-name="Rectangle 1852" d="M30,0H170a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30H12.857A12.857,12.857,0,0,1,0,47.143V30A30,30,0,0,1,30,0Z" transform="translate(1403 381)" fill="#006854"></path><path id="Rectangle_1853" data-name="Rectangle 1853" d="M42,0H158a42,42,0,0,1,42,42v0a18,18,0,0,1-18,18H18A18,18,0,0,1,0,42v0A42,42,0,0,1,42,0Z" transform="translate(1403 381)" fill="#006854"></path><path id="Path_18685" data-name="Path 18685" d="M446.31,246.056a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,246.056Zm0-53.294A23.3,23.3,0,1,0,469.9,216.056,23.471,23.471,0,0,0,446.31,192.762Z" transform="translate(1056.69 164.944)" fill="#006854"></path><path id="Path_18686" data-name="Path 18686" d="M446.31,375.181a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,375.181Zm0-53.294A23.3,23.3,0,1,0,469.9,345.181,23.471,23.471,0,0,0,446.31,321.887Z" transform="translate(1057.793 95.684)" fill="#009e7f"></path><circle id="Ellipse_2874" data-name="Ellipse 2874" cx="28.689" cy="28.689" r="28.689" transform="translate(1473.823 511.046)" fill="#006854"></circle><circle id="Ellipse_2875" data-name="Ellipse 2875" cx="15.046" cy="15.046" r="15.046" transform="translate(1481.401 547.854) rotate(-45)" fill="#009e7f"></circle><path id="Path_18687" data-name="Path 18687" d="M399.71,531.27a71.755,71.755,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.392,78.392,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z" transform="translate(1060.579 -35.703)" fill="#006854"></path><path id="Path_18688" data-name="Path 18688" d="M412.913,527.786a78.419,78.419,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.785,71.785,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z" transform="translate(1060.566 -35.704)" fill="#006854"></path><path id="Path_18689" data-name="Path 18689" d="M583.278,527.786a78.417,78.417,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.768,71.768,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z" transform="translate(970.304 -35.704)" fill="#006854"></path><path id="Path_18690" data-name="Path 18690" d="M570.075,531.27a71.77,71.77,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.407,78.407,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z" transform="translate(970.318 -35.703)" fill="#006854"></path><path id="Path_18692" data-name="Path 18692" d="M301.243,287.464a19.115,19.115,0,0,1,8.071,9.077,19.637,19.637,0,0,1,1.6,7.88v26.085a19.349,19.349,0,0,1-9.672,16.957c-10.048-6.858-16.544-17.742-16.544-30S291.2,294.322,301.243,287.464Z" transform="translate(1292.301 101.536)" fill="url(#linear-gradient)"></path><path id="Path_18693" data-name="Path 18693" d="M294.371,287.464a19.115,19.115,0,0,0-8.071,9.077,19.637,19.637,0,0,0-1.6,7.88v26.085a19.349,19.349,0,0,0,9.672,16.957c10.048-6.858,16.544-17.742,16.544-30S304.419,294.322,294.371,287.464Z" transform="translate(1118.301 101.536)" fill="url(#linear-gradient)"></path></g></svg>
      </EmptyCartOuter>
      <EmptyMessage>
        No products found
      </EmptyMessage>
    </EmptyCartWrap>
  )
}
function App(props) {
  var ui=0;
  const [flag, setFlag]=useState(false)
  const [loadf, setloadf]=useState(true)
  const [popf, setPopf]=useState(false)
  const [categoryId,setCategoryId]=useState('all')
  const [prod, setProd]=useState(props.product?props.product[0]:{})
  const [products,setProducts]=useState(props.product?props.product:[])
  const [cart, setCart] = useContext(AppContext)
  const [page,setPage]=useState(props.product?2:1)
  const [lock,setLock]=useState(false)
  let cancelToken;
  const [hj, setHj]=useState(false);
  const Main=styled.main`

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(247, 247, 247);
  padding-right: 0px;
  transition: padding-right 0.35s ease-in-out 0s;
  `
  function fixedside() {
 
    var top = 830;
    var y = $(window).scrollTop();
    console.log(y)
    if (y >= top) {
      console.log("po");
      setHj(true);
    } else {
      setHj(false);
      $('#ld').css("position","relative");
      $('#ld').css("top","0");
    }
    
    
  }


  function nav() {
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
     if (startchange.length){ 
       scroll_start = $(window).scrollTop();
       if(scroll_start > offset.top) {
           $(".navbar-default").css('background-color', '#f0f0f0');
        } else {
           $('.navbar-default').css('background-color', 'gray');
        }
     }
  }
  const showMenu=()=>{
    setFlag(true)
    
  }
  const closeMenu=()=>{
    setFlag(false)
  }
  const ko =(index)=>{
    console.log("po")
    var ip=products[index]
    setProd(ip);
    $(".overlay").css('opacity', 1);
    $(".overlay").css('visibility', 'inherit');
    setPopf(true)
  }
  const incre=(product)=>{
    if(process.browser){
      const p=updateStorage(product)
      setCart(p);
    }
    fixedside()
  }
  const decre=(product)=>{
    if(process.browser){
      const p = decreaseStorage(product)
      setCart(p);
    }
    fixedside()
  }
  const addToCart=(product)=>{
    if(process.browser){
      let cartData=localStorage.getItem('woo-next-cart');
      if(cartData){
        const p = updateStorage(product)
        setCart(p);
      }else{
        const p = addFirstItem(product);
        setCart(p);
      }
    }
    fixedside()
  }
  const filterCat=(e)=>{
    e.preventDefault();
     console.log("pp")
      var o=e.target.id;
      setCategoryId(o);
      setProducts(null);
      setPage(1);
      fetchProducts(o)
    
  }
  const kartButton=(product)=>{
    return(<button class="cart-button" onClick={()=>{addToCart(product)}}>
  <i className="fa fa-cart"></i>
    <span>Cart</span></button>)
  }
  const QuantButton=(store,product)=>{
     return(
       <div className="quant">
      <button class="decre" onClick={()=>{decre(product)}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="2px" viewBox="0 0 12 2">
        <rect data-name="Rectangle 522" width="12" height="2" rx="1" fill="currentColor"></rect>
        </svg>
    </button>
    <span class="counterstyle__CounterValue-sc-8iu0h2-2 fWCkFI">{store.quant}</span>
    <button class="incre" onClick={()=>{incre(product)}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 12">
          <g id="Group_3351" data-name="Group 3351" transform="translate(-1367 -190)">
          <rect data-name="Rectangle 520" width="12" height="2" rx="1" transform="translate(1367 195)" fill="currentColor">
                      </rect>
                      <rect data-name="Rectangle 521" width="12" height="2" rx="1" transform="translate(1374 190) rotate(90)" fill="currentColor">
                        </rect>
          </g></svg>
    </button>
    </div>
     )
  }
  
  const lo=()=>{
    $(".overlay").css('opacity', 0);
    $(".overlay").css('visibility', 'hidden');
  }
  const disPlaybusket=()=>{
    $(".op").css('right',"-4px");
    
  }
  const closeBusket=()=>{
    $(".op").css('right',"-500px");
  }
  useEffect(()=>{
    window.onscroll=function() {
      if ((window.innerHeight+window.scrollY)>=document.body.scrollHeight) {
        console.log("896")
        if(!lock) {
          fetchProducts()
        }
      }
      fixedside()
    }
    //imagepopup();
  });
  const hu=()=> {
    console.log("po")
    $('#oli').css("visibility","visible");
    $("#oli").css("transform","translate(-50%,-50%) scale(4)");
  }
  const [show, setShow]=useState(false)
  const hello=()=>{
    setShow(true)
  }
  const closehello=()=>{
    setShow(false)
  }
  const openSub=(id)=>{
    var p="#subs"+id;
    var p1="#togcat"+id;
    var p2="#cathead"+id;
    var p3="#di"+id;
    var t=$(p).attr("isopen");
    if(t=="false" || t==null){
      $(p).css("opacity","1");
      $(p).attr("isopen","true");
      $(p3).css("transform","translate3d(0px, 0px, 0px)")
      $(p).css("height","auto");
      $(p1).css("transform","rotate(90deg)");
      $(p2).css("color","rgb(0, 158, 127)")
    }else{
      $(p).attr("isopen","false");
      $(p).css("opacity","0");
      $(p).css("height","0");
      $(p3).css("transform","translate3d(20px, 0px, 0px)")
      $(p1).css("transform","");
      $(p2).css("color","rgb(13, 17, 54)")
    } 
  }
  function fetchProducts(o){
    console.log(o?o:"");
      if(o){
        if(o!="all"){
          const query={page:1, category:o}
          getProducts(query).then(
            (res)=>{
              console.log(res);
              setProducts(res);
              setPage(2);
              setLock(false);
              fixedside();
            }
          )
        }else{
          const query={page:1}
           getProducts(query).then(
              (res)=>{
                console.log(res);
                setProducts(res);
                setPage(2);
                setLock(false);
                fixedside();
              }
          )
        }
      }else{
        if(categoryId!="all"){
          const query={page:page, category:categoryId}
          getProducts(query).then(
          (res)=>{
            console.log(res)
            console.log(products)
            setProducts([...products,...res])
            const k=page+1
            setPage(k);
            setLock(false);
            fixedside();
          }
        )
      }else{
          const query={page:page}
          getProducts(query).then(
          (res)=>{
            console.log(res)
            setProducts([...products,...res])
            const k=page+1
            setPage(k);
            setLock(false);
            fixedside();
          })
        }

      }
  }
  
  return (
  <>
    <div className="po">
    <div className="ko">
    <button onClick={()=>{hu()}} style={{marginTop:"50px", marginLeft:"20px"}}>click</button>
    <div id="oli">

    </div>

    
    </div>
     </div>

     <div style={{height:"200px",display:"flex",flexDirection:"column"}}>
       <div>

       </div>
       <div style={{display:"flex",justifyContent:"space-between" ,padding:"0px 20px 15px",marginTop:"20px"}}>
         <div>
           biscuit
         </div>
         <div style={{cursor:"pointer"}} onClick={()=>{showMenu()}}>
           filter
         </div>
        

       </div>
       
     


     </div>
  <Filter is_true={flag} closeMenu={closeMenu} category={props.category} openSub={openSub}/>
     

  <MobileCart show={show}  closehello={closehello} cart={cart} incre={incre} decre={decre} />

<button class="product-cart" onClick={disPlaybusket}>
  <span class="cart-popup">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="12.686" height="16" viewBox="0 0 12.686 16"></svg>
    </span>
    {cart?Object.keys(cart.products).length:0}Items
  </span>
  <span class="cart-price">${cart?(cart.total.toFixed(2)):0.00}</span>
</button>


{popf?(<div id="popup1" class="overlay">
	<div class="popup">
    
      <h2>{prod.name}</h2>
      <div className="container-fluid lp" >
       
          <div className="oi">
          <img src={prod.images?prod.images[0].src:""} style={{width:"100%",height:"auto"}}>
           </img>
          </div>
          <div className="oi jk">
          <div class="shop padd">
            <div class="content">
              <h3>{prod.name}</h3>
            </div>
            <div class="unit"> {prod.weight!=""?prod.weight:"0.6lb"}</div>
            <p class="despro">{parse(prod.description)}</p>
            <div class="quick-viewstyle__ProductMeta-d67ysb-16 gIBFsL">
                <div class="quick-viewstyle__MetaSingle-d67ysb-17 dyPuuD">
                  {prod.categories?prod.categories.map((d)=>
                  <span class="quick-viewstyle__MetaItem-d67ysb-18 AhjRa">{d.name}</span>):
                  ""}
                </div>
            </div>
            <div class="price_quant">
              <div class="price">
                <div class="quick-viewstyle__ProductPrice-d67ysb-9 CIPBX">{prod.regular_price}</div>
                  <span class="quick-viewstyle__SalePrice-d67ysb-10 wgEPt">{prod.price}</span>
              </div>
              <div class="quant_handler">
                <div class="quant">
                  <button class="incre">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="2px" viewBox="0 0 12 2">
                      <rect data-name="Rectangle 522" width="12" height="2" rx="1" fill="currentColor"></rect>
                      </svg>
                  </button>
                  <span class="counterstyle__CounterValue-sc-8iu0h2-2 fWCkFI">2</span>
                  <button class="decre">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 12">
                        <g id="Group_3351" data-name="Group 3351" transform="translate(-1367 -190)">
                        <rect data-name="Rectangle 520" width="12" height="2" rx="1" transform="translate(1367 195)" fill="currentColor">
                                    </rect>
                                    <rect data-name="Rectangle 521" width="12" height="2" rx="1" transform="translate(1374 190) rotate(90)" fill="currentColor">
                                      </rect>
                        </g></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    <span class="close" onClick={lo}>&times;</span>
  </div>
</div>):""}



<ShowBasket hello={hello}/>
<Main >
  
    <LeftSidebarOuter1>
      <div className={(hj?"ui":"poi")}  id="ld" >
        <div className="pl" style={{paddingLeft:"50px",paddingRight:"20px"}}>
        <CategoryOuter>
              <CategoryHeader id={"cathead"+"all"}>
                <CateImg>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24.003" height="24" viewBox="0 0 24.003 24"><g id="Meat_Fish" data-name="Meat &amp; Fish" transform="translate(-100.274 -126.786)"><path id="Path_17433" data-name="Path 17433" d="M152.165,147.238c-.186,0-.366-.005-.542-.016a.465.465,0,0,1-.27-.108c-.525-.442-1.049-.911-1.546-1.38-.508-.508-.952-1.036-1.383-1.546a.545.545,0,0,1-.124-.289c-.234-3.811,2.129-10.143,4.769-12.784a9.528,9.528,0,0,1,1.8-1.453.463.463,0,1,1,.5.781,8.639,8.639,0,0,0-1.629,1.318c-2.42,2.42-4.661,8.375-4.515,11.929.4.474.8.944,1.236,1.378.439.414.907.835,1.379,1.236,3.5.153,9.508-2.1,11.919-4.506a8.691,8.691,0,0,0,1.328-1.638.463.463,0,1,1,.781.5,9.625,9.625,0,0,1-1.462,1.8C161.888,144.973,156.01,147.238,152.165,147.238Z" transform="translate(-42.009 -2.453)" fill="currentColor"></path><path id="Path_17434" data-name="Path 17434" d="M105.065,249.978a2.457,2.457,0,0,1-1.745-.729,2.547,2.547,0,0,1-.707-1.61,2.454,2.454,0,0,1-2.338-2.483,2.479,2.479,0,0,1,3.513-2.21l2.637-2.663a.464.464,0,0,1,.659.653l-2.889,2.916a.465.465,0,0,1-.592.055,1.547,1.547,0,0,0-2.4,1.257,1.544,1.544,0,0,0,.457,1.114,1.572,1.572,0,0,0,1.365.416.463.463,0,0,1,.535.536,1.592,1.592,0,0,0,.425,1.374,1.54,1.54,0,0,0,2.355-1.963.464.464,0,0,1,.062-.583l2.916-2.888a.463.463,0,1,1,.652.658l-2.668,2.644a2.487,2.487,0,0,1-.491,2.778A2.454,2.454,0,0,1,105.065,249.978Z" transform="translate(0 -99.192)" fill="currentColor"></path><path id="Path_17435" data-name="Path 17435" d="M206.374,138.769a5.236,5.236,0,0,1-2-.475A14.609,14.609,0,0,1,200,135.177c-2.193-2.193-3.6-4.707-3.593-6.4a1.862,1.862,0,0,1,1.989-1.987h.018c1.7,0,4.2,1.408,6.385,3.593l0,0c2.629,2.655,4.592,6.308,3.05,7.848A2.011,2.011,0,0,1,206.374,138.769Zm-7.96-11.056H198.4a.948.948,0,0,0-1.067,1.066c-.008,1.439,1.327,3.747,3.322,5.743a13.669,13.669,0,0,0,4.084,2.92c1.138.483,2.054.532,2.455.133.814-.814-.239-3.7-3.054-6.541C202.153,129.045,199.854,127.713,198.414,127.713Z" transform="translate(-84.117 0)" fill="currentColor"></path><path id="Path_17436" data-name="Path 17436" d="M216.843,148.223h0c-1.039,0-2.9-1.214-4.749-3.084-1.538-1.518-3.09-3.585-3.079-4.77a.963.963,0,0,1,.283-.715.95.95,0,0,1,.7-.266H210c1.187,0,3.243,1.544,4.76,3.081,1.868,1.845,3.079,3.707,3.082,4.746a.944.944,0,0,1-1,1.008Zm-6.811-7.916a.268.268,0,0,0-.1.017c-.133.33.7,2.069,2.815,4.161,2.27,2.3,3.912,2.933,4.181,2.8.115-.253-.521-1.895-2.816-4.159l0,0C212.174,141.163,210.54,140.306,210.032,140.306Z" transform="translate(-95.146 -11.027)" fill="currentColor"></path><path id="Path_17437" data-name="Path 17437" d="M181.251,168.174l-.83-.41a5.223,5.223,0,0,1,.391-.689.464.464,0,0,1,.755.539A4.148,4.148,0,0,0,181.251,168.174Z" transform="translate(-70.129 -35.084)" fill="currentColor"></path><path id="Path_17438" data-name="Path 17438" d="M164.789,189.173a.478.478,0,0,1-.095-.01.463.463,0,0,1-.359-.548,18.285,18.285,0,0,1,1.23-3.8.464.464,0,0,1,.845.381,17.358,17.358,0,0,0-1.168,3.611A.463.463,0,0,1,164.789,189.173Z" transform="translate(-56.046 -50.535)" fill="currentColor"></path><path id="Path_17439" data-name="Path 17439" d="M239.96,170.8a.463.463,0,0,1-.328-.136l-.382-.382a.463.463,0,0,1,.655-.655l.382.382a.464.464,0,0,1-.328.791Z" transform="translate(-121.487 -37.372)" fill="currentColor"></path></g></svg>
                </CateImg>
                <CateName id="all" onClick={filterCat}>
                all
                </CateName>
              </CategoryHeader>
        </CategoryOuter>
        { props.category?
          Object.entries(props.category).map(([k,v])=>(
            <CategoryOuter>
              <CategoryHeader id={"cathead"+k}>
                <CateImg>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24.003" height="24" viewBox="0 0 24.003 24"><g id="Meat_Fish" data-name="Meat &amp; Fish" transform="translate(-100.274 -126.786)"><path id="Path_17433" data-name="Path 17433" d="M152.165,147.238c-.186,0-.366-.005-.542-.016a.465.465,0,0,1-.27-.108c-.525-.442-1.049-.911-1.546-1.38-.508-.508-.952-1.036-1.383-1.546a.545.545,0,0,1-.124-.289c-.234-3.811,2.129-10.143,4.769-12.784a9.528,9.528,0,0,1,1.8-1.453.463.463,0,1,1,.5.781,8.639,8.639,0,0,0-1.629,1.318c-2.42,2.42-4.661,8.375-4.515,11.929.4.474.8.944,1.236,1.378.439.414.907.835,1.379,1.236,3.5.153,9.508-2.1,11.919-4.506a8.691,8.691,0,0,0,1.328-1.638.463.463,0,1,1,.781.5,9.625,9.625,0,0,1-1.462,1.8C161.888,144.973,156.01,147.238,152.165,147.238Z" transform="translate(-42.009 -2.453)" fill="currentColor"></path><path id="Path_17434" data-name="Path 17434" d="M105.065,249.978a2.457,2.457,0,0,1-1.745-.729,2.547,2.547,0,0,1-.707-1.61,2.454,2.454,0,0,1-2.338-2.483,2.479,2.479,0,0,1,3.513-2.21l2.637-2.663a.464.464,0,0,1,.659.653l-2.889,2.916a.465.465,0,0,1-.592.055,1.547,1.547,0,0,0-2.4,1.257,1.544,1.544,0,0,0,.457,1.114,1.572,1.572,0,0,0,1.365.416.463.463,0,0,1,.535.536,1.592,1.592,0,0,0,.425,1.374,1.54,1.54,0,0,0,2.355-1.963.464.464,0,0,1,.062-.583l2.916-2.888a.463.463,0,1,1,.652.658l-2.668,2.644a2.487,2.487,0,0,1-.491,2.778A2.454,2.454,0,0,1,105.065,249.978Z" transform="translate(0 -99.192)" fill="currentColor"></path><path id="Path_17435" data-name="Path 17435" d="M206.374,138.769a5.236,5.236,0,0,1-2-.475A14.609,14.609,0,0,1,200,135.177c-2.193-2.193-3.6-4.707-3.593-6.4a1.862,1.862,0,0,1,1.989-1.987h.018c1.7,0,4.2,1.408,6.385,3.593l0,0c2.629,2.655,4.592,6.308,3.05,7.848A2.011,2.011,0,0,1,206.374,138.769Zm-7.96-11.056H198.4a.948.948,0,0,0-1.067,1.066c-.008,1.439,1.327,3.747,3.322,5.743a13.669,13.669,0,0,0,4.084,2.92c1.138.483,2.054.532,2.455.133.814-.814-.239-3.7-3.054-6.541C202.153,129.045,199.854,127.713,198.414,127.713Z" transform="translate(-84.117 0)" fill="currentColor"></path><path id="Path_17436" data-name="Path 17436" d="M216.843,148.223h0c-1.039,0-2.9-1.214-4.749-3.084-1.538-1.518-3.09-3.585-3.079-4.77a.963.963,0,0,1,.283-.715.95.95,0,0,1,.7-.266H210c1.187,0,3.243,1.544,4.76,3.081,1.868,1.845,3.079,3.707,3.082,4.746a.944.944,0,0,1-1,1.008Zm-6.811-7.916a.268.268,0,0,0-.1.017c-.133.33.7,2.069,2.815,4.161,2.27,2.3,3.912,2.933,4.181,2.8.115-.253-.521-1.895-2.816-4.159l0,0C212.174,141.163,210.54,140.306,210.032,140.306Z" transform="translate(-95.146 -11.027)" fill="currentColor"></path><path id="Path_17437" data-name="Path 17437" d="M181.251,168.174l-.83-.41a5.223,5.223,0,0,1,.391-.689.464.464,0,0,1,.755.539A4.148,4.148,0,0,0,181.251,168.174Z" transform="translate(-70.129 -35.084)" fill="currentColor"></path><path id="Path_17438" data-name="Path 17438" d="M164.789,189.173a.478.478,0,0,1-.095-.01.463.463,0,0,1-.359-.548,18.285,18.285,0,0,1,1.23-3.8.464.464,0,0,1,.845.381,17.358,17.358,0,0,0-1.168,3.611A.463.463,0,0,1,164.789,189.173Z" transform="translate(-56.046 -50.535)" fill="currentColor"></path><path id="Path_17439" data-name="Path 17439" d="M239.96,170.8a.463.463,0,0,1-.328-.136l-.382-.382a.463.463,0,0,1,.655-.655l.382.382a.464.464,0,0,1-.328.791Z" transform="translate(-121.487 -37.372)" fill="currentColor"></path></g></svg>
                </CateImg>
                <CateName id={k} onClick={filterCat}>
                {v["obj"].name?v["obj"].name:""}
                </CateName>
                {v.child?<CateTog onClick={()=>{openSub(k)}} id={"togcat"+k}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16px"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" fill="currentColor" stroke="currentColor"></path></svg>
                </CateTog>:""}
              </CategoryHeader>
              {v.child?
                  <CateSubOut1 id={"subs"+k}>
                     <CateSubOut2 id={"di"+k}>
                     {v.child.map((sub)=>(
                       <CateSubItem>
                         <CateSubItemHead>
                           {sub.name}
                         </CateSubItemHead>
                       </CateSubItem>
                     ))}
                      </CateSubOut2>
                  </CateSubOut1>
          :""}
            </CategoryOuter>
          ))
         :""}
          </div>
      </div>
    </LeftSidebarOuter1>
    <ProductsOuter1>
         <ProductsOuter2>
         {products?products.map((data,index) => (
           <CardOuter  id={data.id} >
             <CardOuter1>
               <CardOuter2>
           <ImageContainer>
           <Image src={data.images?data.images[0].src:""} onClick={()=>{ko(index)}}/>
           </ImageContainer>
           <Description>
           <Title>{data.name}
           </Title>
           <Measure>
             {data.weight!=""?data.weight:"5 lb"}
             </Measure>
           <ProductMeta>
           <PriceOuter><Price>{data.price}</Price></PriceOuter>
           {cart?(cart.products[data.id]?QuantButton(cart.products[data.id],data):kartButton(data)):kartButton(data)}
           </ProductMeta>

           </Description>
         </CardOuter2>
         </CardOuter1>
         </CardOuter>)):Array(12).fill().map((item,index) =>( <li className="card">
      <Skeleton height={180}/>
      <h4 className="card-title">
        <Skeleton circle={true} height={50} width={50}/>
        <Skeleton height={36} width={`80%`}/>
      </h4>
      <p className="card-channel">
        <Skeleton width={`60%`}/>
      </p>
      <div className="card-metrics">
        <Skeleton width={`90%`}/>
      </div>
    </li>))}
    </ProductsOuter2>
    </ProductsOuter1>
     

  </Main>
  
  <div className="op">
    <div className="kj">
      <div className="heading">
      <div class="cart_p">
        <svg xmlns="http://www.w3.org/2000/svg" width="19px" height="24px" viewBox="0 0 23.786 30">
          
                    </svg>
        <span>6 Items</span>
                      
      </div>
      
      </div>
      <div role="presentation" class="cart-menu">
        <div className="os-padding">
        <div className="os-viewport">
          <div className="os-content">
            <div className="os-wrapper">
            <div className="heading">
              <div class="cart_p">
                <svg xmlns="http://www.w3.org/2000/svg" width="19px" height="24px" viewBox="0 0 23.786 30">
                  </svg>
              <span>{cart?Object.keys(cart.products).length+"Items":""}</span>
            </div>
      <button class="cartstyle__CloseButton-sc-1cp3kia-3 jBjqrl" onClick={closeBusket}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10">
          <path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"
          ></path>
          </svg></button>
          </div>  

          {cart? Object.keys(cart.products).map((key,item)=> {
            return(
              <CartItem product={cart.products[key]} incre={incre} decre={decre}/>
            )}):<EmptyCart/>}
            </div>
            </div>
          </div>
        </div>
      </div>

      <div class="checkout">
        <span class="giftoffer">
          <button class="voucher">Do you have a voucher?</button>
          </span>
        <Link href={"/checkouts"}>
          <button class="check">
            <a class="billing">Checkout</a>
            <span class="amount">${cart?cart.total.toFixed(2):0.00}
            </span>
          </button>
        </Link>
      </div>
  
</div>

  </div>



</>);
}

export default App;
