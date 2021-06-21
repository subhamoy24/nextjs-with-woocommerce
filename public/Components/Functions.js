

export const addFirstItem=(product)=>{
   const prodinfo = createProduct(product);
   var arr={};
   arr[product.id]=prodinfo
   let cart={products:arr, total:product.price, count:1,}
   localStorage.setItem('woo-next-cart', JSON.stringify(cart));
   return cart
}

const createProduct=(product)=>{
  return {
      id:product.id,
      title: product.name,
      image: product.images[0].src,
      quant: 1,
      price: product.price
  }
}

export const updateStorage=(product)=>{
    let existingCart = localStorage.getItem('woo-next-cart');
    existingCart=JSON.parse(existingCart);
    let updatedCart = existingCart;
    if(product.id in existingCart.products){
        updatedCart.products[product.id].quant += 1
        updatedCart.count += 1;
        updatedCart.total += product.price;
        localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));
    }else{
        const p = createProduct(product);
        updatedCart.products[product.id]=p;
        updatedCart.total += product.price;
        updatedCart.count += 1;
        localStorage.setItem('woo-next-cart',JSON.stringify(updatedCart));
    }
    return updatedCart
}
export const decreaseStorage=(product)=>{
    let existingCart= localStorage.getItem('woo-next-cart')
    existingCart=JSON.parse(existingCart);
    if(product.id in existingCart.products){
        let updatedCart=existingCart;
        updatedCart.products[product.id].quant-=1;
        updatedCart.total -= product.price
        updatedCart.count -= 1
        if( updatedCart.products[product.id].quant==0){
            if(Object.keys(updatedCart.products).length==1){
                localStorage.removeItem('woo-next-cart')
                return null
            }else{
                delete updatedCart.products[product.id]
                localStorage.setItem('woo-next-cart',JSON.stringify(updatedCart));
                return updatedCart
            }
        }else{
            localStorage.setItem('woo-next-cart',JSON.stringify(updatedCart));
            return updatedCart;
        }
    }else{
        return existingCart;
    }

}
export const reduceStorage=(product)=>{
    let existingCart= localStorage.getItem('woo-next-cart')
    existingCart=JSON.parse(existingCart);
    if(existingCart.products.length==1){
        localStorage.removeItem('woo-next-cart');
        return null;
    }else{
        
        if(product.id in existingCart.products){
            let updatedCart=existingCart;
            const p = existingCart.products[product.id];
            delete updatedCart.products[product.id]
            const amountTobereduced = (p.price*p.quant)
            const countTobereduced = p.quant
            updatedCart.total -= amountTobereduced;
            updatedCart.count -= countTobereduced;
            localStorage.setItem('woo-next-cart',JSON.stringify(updatedCart));
            return updatedCart;
        }else{
            return existingCart;
        }
    }
}