import React, { useState } from"react";
import styled from '@emotion/styled'

import {TransitionGroup, CSSTransition} from 'react-transition-group';
import CartItem from "./CartItem";

const ModalOverlay=styled.div`

    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.7);
    z-index: 9999;
    position: fixed;
    @media(min-width:767px){
        display:none;
    }
`
const ReuseModal=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    Z-index:9999;
    position:fixed;
    top:0;
    left:0;

`
const ReuseModalHolder=styled.div`

height:598px;
width:100%;
position:relative;
margin-top:150px;

opacity: 1;
transform: scale3d(1, 1, 1);
background: rgb(255, 255, 255);

`
const InnerRAnd=styled.div`
width: 100%;
height: 100%;
box-sizing: content-box;
`
const CartStyle=styled.div`
height: auto;
display: flex;
flex-direction: column;
border-radius: 6px;
background-color: rgb(255, 255, 255);
box-sizing: content-box;
`
const Heading=styled.div`
-webkit-box-pack: center;
    justify-content: center;
    padding: 15px 25px;
    background-color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-align: center;
    align-items: center;

    border-bottom: 1px solid rgb(241, 241, 241);
`
const CartItemOuter=styled.div`
    height: 330px;
    
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    -moz-box-pack: start;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;

`
const CartPadding=styled.div`
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
    overflow: scroll;

`
const CartScroll=styled.div`
`
const ContentOut =styled.div`
    direction: inherit;
    box-sizing: border-box!important;
    position: relative;
    display: block;  
    visibility: visible;
`
const Content=styled.div`
    width: 100%;
    height: auto;
`
const ItemOuter=styled.div`
   font-size: 15px;
    font-weight: 700;
    padding: 15px 25px;
    border-bottom: 1px solid rgb(247, 247, 247);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`
const Quant=styled.div`
display: flex;
    font-size: 15px;
    font-weight: 700;
    border-radius: 200px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    flex-shrink: 0;
    width: 30px;
    height: 90px;
    flex-direction: column-reverse;
    background-color: rgb(247, 247, 247);
    color: rgb(13, 17, 54);
`
const QuantButt=styled.button`
border: none;
    background-color: transparent;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    padding: 10px;
    cursor: pointer;
    color: rgb(119, 121, 140);
`
const Num=styled.div`
font-size: 15px;
    font-weight: 700;
`
const ItemImg=styled.img`
 width: 60px;
    height: 60px;
    object-fit: cover;
    margin: 0px 15px;
`
const ItemDes=styled.div`
display: flex;
flex-direction: column;
margin-left: 15px;
font-family: Lato, sans-serif;
`
const ItemName=styled.span`
color: rgb(13, 17, 54);
margin-bottom: 0px;
line-height: 1.5;
`
const ItemPrice=styled.span`
color: rgb(0, 158, 127);
margin-top: 10px;
margin-bottom: 10px;
font-size: 15px;
font-weight: 700;
`

const ItemUnit=styled.span`
font-size: 13px;
font-weight: 400;
color: rgb(119, 121, 140);
margin-bottom: 5px;
}
`
const TotalItemPrice=styled.span`
color: rgb(13, 17, 54);
    margin-left: auto;
` 
const CrossButton=styled.button`
padding: 5px;
    border: 0px;
    outline: 0px;
    margin-left: 15px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.25);
    transition: all 0.4s ease 0s;
    background-color: transparent;
`
const CheckOutSection=styled.div`
width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: auto;
`
const GiftVouOut=styled.span`
margin: 20px 0px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
`
const GifButt=styled.button`
border: 0px;
    outline: 0px;
    box-shadow: none;
    background-color: transparent;
    display: inline-flex;
    cursor: pointer;
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: rgb(0, 158, 127);
    transition: color 0.35s ease 0s;
`
const CheckOutButt=styled.button`
height: 48px;
    width: calc(100% - 30px);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: rgb(0, 158, 127);
    padding: 0px;
    border-radius: 48px;
    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px;
    border: 0px;
    outline: 0px;
    cursor: pointer;
    margin-bottom: 15px;
    margin-left: 15px;
`
const CheckAnchor=styled.a`
width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-left: 30px;
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: rgb(255, 255, 255);
`
const CloseCart=styled.button`
position: absolute;
    top: -45px;
    background-color: rgb(255, 255, 255);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    color: rgba(0, 0, 0, 0.5);
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px;
    border: 0px;
    outline: 0px;
    flex-shrink: 0;
    cursor: pointer;
    transition: all 0.4s ease 0s;
`
const NumberOfItems=styled.div`
display: inline-flex;
-webkit-box-align: center;
align-items: center;
color: rgb(0, 158, 127);
`
const Ammount=styled.span`
width: auto;
    height: 44px;
    padding: 0px 30px;
    overflow: hidden;
    border-radius: 28px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: rgb(0, 158, 127);
    margin-right: 2px;
`
/*
const CartItem =()=>{
  return(
      <ItemOuter>
          <Quant>
              <QuantButt> <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="2px" viewBox="0 0 12 2">
        <rect data-name="Rectangle 522" width="12" height="2" rx="1" fill="currentColor">
        </rect>
      </svg></QuantButt>
              <Num>5</Num>
              <QuantButt><svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 12"><g id="Group_3351" data-name="Group 3351" transform="translate(-1367 -190)">
        <rect data-name="Rectangle 520" width="12" height="2" rx="1" transform="translate(1367 195)" fill="currentColor">
        </rect>
      <rect data-name="Rectangle 521" width="12" height="2" rx="1" transform="translate(1374 190) rotate(90)" fill="currentColor"></rect></g></svg></QuantButt>
          </Quant>
          <ItemImg src={"https://s3.amazonaws.com/redqteam.com/pickbazar/Jammie_Dodgers.jpg"}/>
          <ItemDes>
              <ItemName>Cookies</ItemName>
              <ItemPrice>$56</ItemPrice>
              <ItemUnit>5x2lb</ItemUnit>
          </ItemDes>
          <TotalItemPrice>$69</TotalItemPrice>
          <CrossButton>x</CrossButton>
      </ItemOuter>
  )
}*/
function MobileCart(props){
    const [blur,setBlur]=useState(false)
    return(
           
        <div style={{backgroundColor:"white"}}>

            {(blur||props.show)? (<ModalOverlay>
            </ModalOverlay>):""}
            <CSSTransition in={props.show} timeout={200} classNames="basket" unmountOnExit onEnter={()=>setBlur(true)} onExited={()=>{setBlur(false)}}>
            <ReuseModal>
                <ReuseModalHolder>
                    <InnerRAnd>
                        <CartStyle>
                            <Heading>
                                <NumberOfItems>
                                    <span>{props.cart?Object.keys(props.cart.products).length+"Items":""}</span>
                                </NumberOfItems>
                                <CloseCart onClick={()=>{props.closehello()}}>X</CloseCart>
                            </Heading>
                            <CartItemOuter>
                                <CartPadding>
                                    <CartScroll>
                                        <ContentOut>
                                            <Content>
                                            {props.cart? Object.keys(props.cart.products).map((key,item)=> {
                                                return(
                                                <CartItem product={props.cart.products[key]} incre={props.incre} decre={props.decre}/>
                                                )}):""}
                                            </Content>
                                        </ContentOut>
                                    </CartScroll>
                                </CartPadding>
                            </CartItemOuter>
                            <CheckOutSection>
                                <GiftVouOut>
                                    <GifButt>
                                    do you have a gift card
                                    </GifButt>
                                </GiftVouOut>
                                <CheckOutButt>
                                    <CheckAnchor>checkout</CheckAnchor>
                                    <Ammount>${props.cart?props.cart.total.toFixed(2):0.00}</Ammount>
                                </CheckOutButt>
                            </CheckOutSection>
                           

                        </CartStyle>
                    </InnerRAnd>
                    
                </ReuseModalHolder>
            </ReuseModal>
            </CSSTransition>

        </div>
    )
}
export default MobileCart;