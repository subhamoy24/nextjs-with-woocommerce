import React,{useState} from"react";
import styled from '@emotion/styled'


function ShowBasket(props){
    const Button =styled.button`
    width: calc(100% - 60px);
    height: 45px;
    padding: 2px 2px 2px 30px;
    bottom: 30px;
    right: 30px; 
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(0, 158, 127);
    border-radius: 60px;
    box-shadow: rgb(0 0 0 / 16%) 0px 21px 36px;
    border: 0px;
    outline: 0px;
    cursor: pointer;
    position: fixed;
    z-index: 999;
    @media (min-width:767px){
        display:none;
    }
    `

    const Span= styled.span`
    font-family: Lato, sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    padding-left: 5px;
    padding-right: 10px;
    `
    const Tio=styled.span`
    width: 90px;
    height: 41px;
    margin-left: auto;
    margin-right: 0px;
    overflow: hidden;
    border-radius: 28px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    font-family: Lato, sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: rgb(0, 158, 127);
    box-sizing: border-box;
    `
    
    return(
        <Button onClick={()=>{props.hello()}}>
            <Span>
            </Span>
            <Tio>
            </Tio>
        </Button>
    )

}
export default ShowBasket;