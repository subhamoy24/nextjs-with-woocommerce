import React, {useState,useContext, useEffect} from"react";
import styled from '@emotion/styled'
import {AppContext} from './AppProvider'
import axios from "axios";

const FormBody=styled.div`
@media (min-width: 1000px) and (max-width: 1500px){
    padding: 130px 60px 60px;
 
}
width: 100%;
    display: flex;
    position: relative;
    padding: 130px 10px 10px;
@media(max-width:400px){
    padding:40px 10px 10px;
}
`
const FormBody1=styled.div`
@media (min-width: 1000px) and (max-width: 1500px){
    width: 970px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    counter-reset: section-counter 0;
}
@media (max-width: 999px){
width:100%;
display:flex;
flex-direction:column;
margin-left: auto;
margin-right: auto;
counter-reset: section-counter 0;
}

`

const Details=styled.div`
position: relative;
width: 100%;
overflow: hidden;
display: flex;
flex-direction: column;
margin-right: 20px;
padding: 20px;
`
const Container=styled.div`
background-color: rgb(255, 255, 255);
padding: 30px 30px 20px;
position: relative;
margin-bottom: 20px;
box-shadow: rgb(0 0 0 / 8%) 0px 2px 16px 0px;
`
const Heading=styled.h3`
font-family: Lato, sans-serif;
    font-size: 21px;
    font-weight: 400;
    color: rgb(13, 17, 54);
    line-height: 1.2;
    margin-bottom: 35px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`
const FlexBox=styled.div`
display: flex;
    flex-direction: column;
`
const FlexBoxInner=styled.div`

    flex-grow: 1;
    -webkit-box-pack: start;
    justify-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    @media (max-width:450px){
        flex-direction:column;
    }
`
const Box =styled.label`
@media (min-width:1000px){
    flex: 1 1 calc(33.3333% - 10px);
    max-width: calc(33.3333% - 10px);
}
@media (min-width:450px) and (max-width:999px) {
    flex: 1 1 calc(50% - 10px);
    max-width: calc(50% - 10px);
}

    word-break:break-word;
    margin-top: 0px;
margin-bottom: 15px;
flex-direction: column;
    text-align: left;
    align-items: flex-start;
    padding: 15px;
    display: inline-flex;
    -webkit-box-align: center;
    margin-right: 15px;
    position: relative;
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: rgb(13, 17, 54);
    cursor: pointer;
    width: 100%;
    transition: all 0.25s ease 0s;
    line-height: 24px;
`
const AddButton=styled.button`
width: auto;
height: auto;
display: flex;
-webkit-box-align: center;
align-items: center;
background-color: transparent;
border: 0px;
outline: 0px;
border-radius: 0px;
padding: 0px;
font-family: Lato, sans-serif;
font-size: 13px;
font-weight: 700;
color: rgb(0, 158, 127);
position: absolute;
top: 40px;
right: 30px;
cursor: pointer;
justify-content: center;
flex-shrink: 0;
text-align: center;
`


const Address=({handleOpen , address})=>{
    return(
       <Container>
           <Heading>Delivery Address</Heading>
           <FlexBox>
               <FlexBoxInner>
                 {address?address.first_name?(
                   <Box>
                    <span>{address.first_name+" "+address.last_name}</span>
                    <span>{address.address_1}</span>
                    <span>{address.address_2}</span>
                    <span>{address.city}</span>
                    <span>{address.state+"-"+address.postcode}</span>
                    <span>{address.country}</span>
                    <span>{address.phone}</span>
                    <EditCancel handleOpen={handleOpen}/>   
                   </Box>):"":""}
                   {address?address.first_name?
                  "": <AddButton onClick={handleOpen}>+add</AddButton>: <AddButton onClick={handleOpen}>+add</AddButton>}
               </FlexBoxInner>
           </FlexBox>
       </Container>
    )
}
const CartOuter=styled.div`
@media (min-width: 1000px) and (max-width: 1500px){

width: 270px;
    flex-shrink: 0;
    padding-top: 20px;
}
width: 100%;
flex-shrink: 0;
padding-top: 10px;
    

`
const Header=styled.div`
font-family: Lato, sans-serif;
font-size: 15px;
font-weight: 700;
color: rgb(13, 17, 54);
text-align: center;
margin-bottom: 40px;
`
const EditCancelWrap=styled.span`
position: absolute;
top: 10px;
right: 10px;
display: flex;
-webkit-box-align: center;
align-items: center;
transition: all 0.2s ease-in-out 0s;
`
const EditAdd=styled.span`
display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border: 0px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 5px;
    cursor: pointer;
    outline: 0px;
    padding: 0px;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 158, 127);
`
const CancelAdd=styled.span`
display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border: 0px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 5px;
    cursor: pointer;
    outline: 0px;
    padding: 0px;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 91, 96);
`
const EditCancel=({handleOpen})=>{
    return(
        <EditCancelWrap>
            <EditAdd onClick={handleOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 7.2 7.2"><path d="M64,69.7v1.5h1.5l4.42-4.42-1.5-1.5Zm7.08-4.08a.387.387,0,0,0,0-.56l-.94-.94a.387.387,0,0,0-.56,0l-.74.74,1.5,1.5Z" transform="translate(-64 -63.999)" fill="currentColor"></path></svg>
            </EditAdd>
        </EditCancelWrap>
    )
}
const CartOuterWrapper=styled.div`
@media (min-width: 1120px) and (max-width: 1500px){
width: 270px;
    flex-shrink: 0;
    padding-top: 20px;
}
`
const Contentp=styled.div`
width: 100%;
display: flex;
flex-direction: column;
`
const CartItemOuter=styled.div`
padding:10px;
display:flex;
max-height:300px;
flex-direction:column;
overflow:scroll;
`
const CartItem=styled.div`
display:flex;
display: flex;
width: 100%;
align-items: flex-start;
-webkit-box-pack: start;
justify-content: flex-start;
margin-bottom: 25px;
`
const Quant=styled.span`
font-family: Lato, sans-serif;
    font-size: calc(14px);
    font-weight: 700;
    color: rgb(13, 17, 54);
`
const Cross=styled.span`
font-family: Lato, sans-serif;
    font-size: calc(14px);
    font-weight: 400;
    color: rgb(119, 121, 140);
    margin: 0px 12px;
`
const Item=styled.span`
    font-family: Lato, sans-serif;
    font-size: calc(14px);
    font-weight: 400;
    color: rgb(119, 121, 140);
    margin-right: 15px;
`
const Price=styled.span`
    font-family: Lato, sans-serif;
    font-size: calc(14px);
    font-weight: 400;
    color: rgb(119, 121, 140);
    margin-left: auto;
`
const Bill=styled.div`
border-top: 1px solid rgb(230, 230, 230);
padding: 20px 15px 0px;
margin-top: 20px;
`
const SubTotal=styled.div`
display: flex;
width: 100%;
-webkit-box-pack: justify;
justify-content: space-between;
margin-bottom: 10px;
`
const Write=styled.div`
font-family: Lato, sans-serif;
font-size: calc(14px);
font-weight: 400;
color: rgb(119, 121, 140);
`
const AllTogether=styled.div`
display: flex;
width: 100%;
-webkit-box-pack: justify;
justify-content: space-between;
margin-bottom: 10px;
margin-top: 20px;
`
const Tot=styled.span`
font-family: Lato, sans-serif;
    font-size: calc(14px);
    font-weight: 700;
    color: rgb(13, 17, 54);
`
const ReuseModalClose=styled.button`
box-shadow: rgb(0 0 0 / 40%) 0px 2px 8px;
right: 10px !important;
background-color: rgb(255, 255, 255) !important;
color: rgb(34, 34, 34) !important;
border-radius: 15px !important;
padding: 0px 9px !important;
position: fixed;
top: 10px;
align-items: center;
outline: 0;
border: 0;
cursor: pointer;
z-index: 9999999;
justify-content: center;
width: 30px;
height: 30px;
`
const ReuseModalWrap= styled.div`
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    overflow: hidden;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
`
const ReuseHolder= styled.div`
@media (min-width: 1000px) and (max-width: 1500px){
    left: 35%;
    max-height: 595px;
width: 360px;
height: auto;
 
}
@media (min-width: 640px) and (max-width: 1000px){
    left: 25%;
    max-height: 595px;
width: 360px;
height: auto;
}
@media (min-width: 496px) and (max-width: 639px){
    left: 15%;
    max-height: 595px;
    width: 360px;
    height: auto;
}
@media (max-width: 495px){
    top: 80px;
    max-height: 595px;
width: 100%;
height: auto;
}


position: absolute;
top: 40px;
opacity: 1;
transform: scale3d(1, 1, 1);
box-shadow: rgb(0 0 0 / 16%) 0px 10px 40px;
border-radius: 3px !important;
z-index: 99999;
background: #f0f0f0;
overflow:scroll;
`
const InnerComponent=styled.div`
width: 100%;
    padding: 30px;
    height: auto;
    background-color: rgb(247, 248, 249);
    border: 0px;
    box-sizing: border-box;

`
const AddressHeading=styled.div`
font-family: sans-serif;
font-size: 19px;
font-weight: 700;
color: rgb(13, 17, 54);
margin-bottom: 15px;
`
const CardStyle=styled.div`
width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`
const TitleHead=styled.input`
display: block;
    width: 100%;
    padding: 0px 18px;
    appearance: none;
    font-family: Lato, sans-serif;
    font-size: 15px;
    line-height: inherit;
    border: 1px solid rgb(241, 241, 241);
    border-radius: 6px;
    background-color: rgb(255, 255, 255);
    color: rgb(13, 17, 54);
    height: 48px;
    transition: all 0.25s ease 0s;

`
const DetailAddress=styled.textarea`
height: auto;
    min-height: 171px;
    padding-top: 15px;
    resize: none;

`
const SaveAddress= styled.button`
padding: 0px 15px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 158, 127);
    transition: all 0.3s ease 0s;
    border-radius: 6px;
    appearance: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-shrink: 0;
    text-align: center;
    height: 38px;
    text-decoration: none;
    font-family: inherit;
    border: 0px;
    width: 100%;
    height: 44px;
`

const Cart=({cart})=>{

    return(
    (cart?( 
      <CartOuter>
            <CartOuterWrapper>
                <Contentp>
                <Header>
                    your order
                </Header>
                <CartItemOuter>
                {cart?(Object.keys(cart.products).map((key, item)=>{
                      return(
                        <CartItem>
                            <Quant>{cart.products[key].quant}</Quant>
                            <Cross>x</Cross>
                            <Item>{cart.products[key].title}</Item>
                            <Price>{cart.products[key].quant*cart.products[key].price}</Price>
                        </CartItem>
                )
                })):""}
                </CartItemOuter>
                <Bill>
                    <SubTotal>
                        <Write>
                         Sub Total 
                        </Write>
                        <Write>
                          ${cart?cart.total.toFixed(2):""}
                        </Write>
                    </SubTotal>
                    <SubTotal>
                        <Write>
                         Delivery fee
                        </Write>
                        <Write>
                         $0.00
                        </Write>

                    </SubTotal>
                    <SubTotal>
                        <Write>
                            Discount
                        </Write>
                        <Write>
                           $0.00
                        </Write>
                    </SubTotal>
                    <AllTogether>
                        <Tot>
                            Total(vat)
                        </Tot>
                        <Tot>
                            ${cart?cart.total.toFixed(2):0.00}
                        </Tot>
                    </AllTogether>
                </Bill>
                </Contentp>
            </CartOuterWrapper>
        </CartOuter>):"")
    )
}
const AddressPopup=({existing , setExisting , user_id})=>{
     const [tempAdd,setTempAdd] = useState(existing);


    const IsValid =() =>{
        if(!tempAdd.first_name){
           return false;
        }
        if(!tempAdd.last_name){
           return false;
        }   
        if(!tempAdd.phone){
            return false;
        } 
        if(!tempAdd.postcode){
            return false;
        } 
        
        if(!tempAdd.address_1){
            return false;
        }
        if(!tempAdd.city){
            return false;
        }
        if(!tempAdd.state){
            return false;
        }
        if(!tempAdd.country){
            return false;
        }
        return true;

    }
    const saveAdd=(e)=>{
        e.preventDefault();
        if(IsValid() && user_id){    
            console.log(tempAdd)

            var data = JSON.stringify({ id: user_id, address:{ "billing":{first_name:tempAdd.first_name,last_name:tempAdd.last_name,company:tempAdd.company
            ,address_1:tempAdd.address_1,address_2:tempAdd.address_2, city:tempAdd.city,postcode:tempAdd.postcode,country:tempAdd.country,state:tempAdd.state,phone:tempAdd.phone} } });
            var config = {
                method: 'post',
                url: 'http://localhost:3000/update-address',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : data
            };
            axios(config).then(function (response) {
                if(response.data.id){
                    console.log(response.data);
                    setExisting(tempAdd);
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
    const changeFirst=(e)=>{
        setTempAdd((prevState)=>({
            ...prevState,
            first_name:e.target.value
        }));
    }
    const changeLast=(e)=>{
        setTempAdd((prevState)=>({
            ...prevState,
            last_name:e.target.value
        }));

    }
    const changeMobile=(e)=>{
        setTempAdd((prevState)=>({
            ...prevState,
            phone:e.target.value
        }));

    }
    const changePin=(e)=>{
        setTempAdd((prevState)=>({
            ...prevState,
            postcode:e.target.value
        }));

    }
    const changeHouse=(e)=>{
        setTempAdd((prevState)=>({
            ...prevState,
            company:e.target.value
        }));

    }
    const changeAdd1=(e)=>{
        setTempAdd((prevState)=>({
            ...prevState,
            address_1:e.target.value
        }));

    }
    const changeAdd2=(e)=>{
        setTempAdd((prevState)=>({
            ...prevState,
            address_2:e.target.value
        }));
    }
    const changeCity=(e)=>{
        setTempAdd((prevState)=>({
            ...prevState,
            city:e.target.value
        }));

    }
    const changeState=(e)=>{
        setTempAdd((prevState)=>({
            ...prevState,
            state:e.target.value
        }));
    }
    const changeCountry=(e)=>{
        setTempAdd((prevState)=>({
            ...prevState,
            country:e.target.value
        }));
    }
    return(
        <ReuseModalWrap>
            <ReuseHolder>
                <InnerComponent >
                    <AddressHeading>
                         Add new Address
                    </AddressHeading>
                    <CardStyle>
                        <TitleHead placeholder="First name" type="text" onChange={changeFirst} value={tempAdd?tempAdd.first_name:""}/>
                    </CardStyle>
                    <CardStyle>
                        <TitleHead placeholder="Last name" onChange={changeLast} value={tempAdd?tempAdd.last_name:""}/>
                    </CardStyle>
                    <CardStyle>
                        <TitleHead placeholder="Mobile Number" onChange={changeMobile} value={tempAdd?tempAdd.phone:""}/>
                    </CardStyle>
                    <CardStyle>
                        <TitleHead placeholder="PIN code" onChange={changePin} value={tempAdd?tempAdd.postcode:""}/>
                    </CardStyle>
                    <CardStyle>
                        <TitleHead placeholder="FLat House no, Bilding" onChange={changeHouse} value={tempAdd?tempAdd.company:""}/>
                    </CardStyle>
                    <CardStyle>
                        <TitleHead placeholder="Area ,colony street,sector,village" onChange={changeAdd1} value={tempAdd?tempAdd.address_1:""}/>
                    </CardStyle>
                    <CardStyle>
                        <TitleHead placeholder="land mark eg. near apollo" onChange={changeAdd2} value={tempAdd?tempAdd.address_2:""}/>
                    </CardStyle>
                    <CardStyle>
                        <TitleHead placeholder="Town/city" onChange={changeCity} value={tempAdd?tempAdd.city:""}/>
                    </CardStyle>
                    <CardStyle>
                        <TitleHead placeholder="state" onChange={changeState} value={tempAdd?tempAdd.state:""}/>
                    </CardStyle>
                    <CardStyle>
                        <TitleHead placeholder="country" onChange={changeCountry} value={tempAdd?tempAdd.country:""}/>
                    </CardStyle>
                    <SaveAddress onClick={saveAdd}>
                        Save Address
                    </SaveAddress>
                </InnerComponent>
            </ReuseHolder>
        </ReuseModalWrap>
    )
}
const Overly=styled.div`
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.7);
    z-index: 9999;
    position: fixed;
`
const PlaceOrder=styled.button`
@media (max-width: 999px){
    display:none;
}
padding: 0px 30px;
font-size: 15px;
font-weight: 700;
cursor: pointer;
color: rgb(255, 255, 255);
background-color: rgb(0, 158, 127);
transition: all 0.3s ease 0s;
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
height: 48px;
width:100%;
`
const PlaceOrder1=styled.button`
@media (min-width:1000px){
    display:none;
}
padding: 0px 30px;
font-size: 15px;
font-weight: 700;
cursor: pointer;
color: rgb(255, 255, 255);
background-color: rgb(0, 158, 127);
transition: all 0.3s ease 0s;
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
height: 48px;
width:100%;
`
const Checkout=({info})=>{
  
    const [cart, setCart] = useContext(AppContext);
    const [close, setClose]= useState(true);
    const [address, setAddress ]= useState(info?info.billing:{});
    console.log(info);
    const handleClose=()=>{
        setClose(true);
    }
    const handleOpen=(e)=>{
        e.preventDefault();
        console.log("po")
        setClose(false)
    }
    const placeOrder=(e)=>{
        e.preventDefault()
        if(info){
            if(cart){
               var arr=[]; 
               Object.keys(cart.products).map((k)=>{
                   const d={
                     product_id:cart.products[k].id,
                     quantity:cart.products[k].quant
                   }
                   arr.push(d);
               })
               console.log(address.email);
               var data=JSON.stringify({"payment_method":"cod","payment_method_title":"Cash on delivery","set_paid":false,"customer_id":info.id,"billing":{"first_name":address.first_name,"last_name":address.last_name,"address_1":address.address_1,"address_2":address.address_2,"city":address.city,"state":address.state,"postcode":address.postcode,"country":address.country,"phone":address.phone},"line_items":arr,"total":info.total});
                console.log(data);
             var config = {
                method: 'post',
                url: 'http://localhost:3000/place-order',
                headers: { 
                    'Content-Type': 'application/json', 
                },
                data : data
             };
             axios(config).then(function (response) {
                console.log(response.data);
                if(response.data.id){
                    localStorage.removeItem('woo-next-cart');
                    setCart(null);
                }
            }).catch(function (error) {
                console.log(error);
            });
            }
        }
    }
    return(
        <>
        {!close?(
        <>
        <Overly/>
        <ReuseModalClose onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32"><path id="_ionicons_svg_ios-close_5_" data-name="_ionicons_svg_ios-close (5)" d="M179.418,175.84l10.925-10.925a2.56,2.56,0,0,0-3.62-3.62L175.8,172.22l-10.925-10.925a2.56,2.56,0,1,0-3.62,3.62l10.925,10.925-10.925,10.925a2.56,2.56,0,0,0,3.62,3.62L175.8,179.46l10.925,10.925a2.56,2.56,0,0,0,3.62-3.62Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg>
        </ReuseModalClose>
        <AddressPopup existing={address?address:{}} setExisting={setAddress} user_id={info?info.id:""}/>
        </>):""}
        <form style={{display:"block",marginTop:"0 rem" }}>
            <FormBody>
                <FormBody1>
                    <Details>
                     <Address handleOpen={handleOpen} address={address?address:{} } user_id={info?info.id:""}/>
                     <PlaceOrder onClick={placeOrder}> place order </PlaceOrder>
                    </Details>
                    <Cart cart={cart}/>
                    <PlaceOrder1 onClick={placeOrder}> place order </PlaceOrder1>
                </FormBody1>
            </FormBody>
        </form>
        </>
    )

}

export default Checkout