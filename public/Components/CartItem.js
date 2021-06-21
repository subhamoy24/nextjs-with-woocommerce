import React, { useState } from"react";

import styled from '@emotion/styled'
import { decreaseStorage } from "./Functions";

const IncreDecre=styled.button`
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
const RemoteWrap=styled.div`
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
const Image=styled.img`
width: 60px;
height: 60px;
object-fit: cover;
margin: 0px 15px;
`
const ItemDetailsContainer=styled.div`
display: flex;
flex-direction: column;
margin-left: 15px;
`
const ItemTitle=styled.span`
color: rgb(13, 17, 54);
margin-bottom: 0px;
line-height: 1.5;
`
const ItemPrice=styled.span`
color: rgb(0, 158, 127);
margin-top: 10px;
margin-bottom: 10px;
`
const ItemMeasure=styled.span`
font-size: 13px;
font-weight: 400;
color: rgb(119, 121, 140);
margin-bottom: 5px;
`
const ItemTotal=styled.span`
color: rgb(13, 17, 54);
margin-left: auto;
font-size: 15px;
font-weight: 700;
`
const ItemCancel=styled.button`
padding: 5px;
border: 0px;
outline: 0px;
margin-left: 15px;
cursor: pointer;
color: rgba(0, 0, 0, 0.25);
transition: all 0.4s ease 0s;
background-color: transparent;
`
const OuterWrap=styled.div`
font-size: 15px;
font-weight: 700;
padding: 15px 25px;
border-bottom: 1px solid rgb(247, 247, 247);
display: flex;
-webkit-box-align: center;
align-items: center;
`
function RemoteCartButton({product,incre,decre}){
  return(
    <RemoteWrap>
      <IncreDecre onClick={()=>decre(product)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="2px" viewBox="0 0 12 2">
        <rect data-name="Rectangle 522" width="12" height="2" rx="1" fill="currentColor">
        </rect>
      </svg>
      </IncreDecre>
      <span>{product.quant}</span>
      <IncreDecre onClick={() =>incre(product)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 12"><g id="Group_3351" data-name="Group 3351" transform="translate(-1367 -190)">
        <rect data-name="Rectangle 520" width="12" height="2" rx="1" transform="translate(1367 195)" fill="currentColor">
        </rect>
      <rect data-name="Rectangle 521" width="12" height="2" rx="1" transform="translate(1374 190) rotate(90)" fill="currentColor"></rect></g></svg>
      </IncreDecre>
  </RemoteWrap>
  )
}
function ItemDetail({title,price,measure}){

  return(
    <ItemDetailsContainer>
      <ItemTitle>
      {title}
      </ItemTitle>
      <ItemPrice>
       ${price}
      </ItemPrice>
      <ItemMeasure>
       {measure}
      </ItemMeasure>
    </ItemDetailsContainer>
  )
}
export default function CartItem({product,incre,decre}){
  return(
  <OuterWrap>
    <RemoteCartButton product={product} incre={incre} decre={decre}/>
    <Image src={product.image}/>
    <ItemDetail title={product.title} price={product.price} measure={"89*99"}/>
    <ItemTotal >
    {product.quant*product.price}
    </ItemTotal>
    <ItemCancel>
    <svg xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10">
        <path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor">
        </path>
    </svg>
    </ItemCancel>
  </OuterWrap>
  )
}