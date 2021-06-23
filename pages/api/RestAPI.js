const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const axios = require('axios');
const url='https://wordpress-617744-2004760.cloudwaysapps.com';
const ck='ck_f5dd227798c47e6ae86d0e996ee5d462b913c245';
const cs='cs_e17b27de5e6902a13809849631c946375205fac6';
const WooCommerce = new WooCommerceRestApi({
    url: url, // Your store URL
    consumerKey: ck,
    consumerSecret: cs, 
    version: 'wc/v3' // WooCommerce WP REST API version
});
//let cancelToken;
export const  getProducts= async (query)=>{
    /*
    if(typeof cancelToken != typeof undefined){
        cancelToken.cancel("Operation cancel  due to new request");
    }
    cancelToken=axios.CancelToken.source();*/
    if(query){
         return await WooCommerce.get(`products?${query.category?`category=${query.category}`:""}${query.page?`page=${query.page}`:""}`).then((response) => {
         //console.log(response.data);
          var kj=response.data.map((data)=>{
          data['price']=parseFloat(data['price'])
            return data
          })
        return kj
    }).catch(
        (err)=>{
           console.log(err)
           return {};
        }
    )
    }else{
       return await WooCommerce.get(`products`)
    .then((response) => {
    //console.log(response.data);
       var kj=response.data.map((data)=>{
        data['price']=parseFloat(data['price'])
            return data
        })
        return kj
    }).catch(
        (err)=>{
           console.log(err)
           return {"error":"lop"};
        }
    )
    }
}
export  async function getCategories(){
    return await WooCommerce.get("products/categories")
    .then((response) => {
        console.log(response.data);
        var arr={}
        //arr.lo="io";
        response.data.map((data)=>{
            //console.log(data.parent)
            if(data.parent==0){
                var p= data.id
                //console.log(p);
                if(p in arr){
                    arr[p]["obj"]=data
                }else{
                  arr[p]={}
                  arr[p]["obj"]=data
                }
            }else{
                var p1=data.parent
                if(p1 in arr){
                    //console.log([...arr])
                    if("child" in arr[p1]){
                        arr[p1]["child"].push(data)
                        //console.log(arr[p1]["child"])
                    }else{
                        arr[p1]["child"]=[]
                        arr[p1]["child"].push(data)
                    }
                }else{
                    arr[p1]={}
                    arr[p1]["child"]=[]
                    arr[p1]["child"].push(data)
                }
            }
        })
        console.log(arr)
       // console.log(arr.toString())
        //arr=JSON.stringify(arr.toString())
        return arr;
    }).catch((error) => {
        console.log(error);
        return {"error":"lop"};
    });
}

export async function registerUser(req) {
    console.log(req)
    return await WooCommerce.post("customers",req).then(
         (response)=>{
            console.log(response.data);
            /*if(response.data.id){
             return  await axios.post(`${url}/wp-json/jwt-auth/v1/token`,{
                  username: req.body.email,
                  password: req.body.password
              }).then((response)=>{
                  console.log(response);
                  return response.data;
              }).catch(
                  (err)=>{
                      console.log(err)
                      return {}
                  }
              )
            }else{
                return response.data
            }*/
           if(response.data && response.data.id){
                return  {
                    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2hvcC1ub3ctMjQuMDAwd2ViaG9zdGFwcC5jb20iLCJpYXQiOjE2MjQzNjE0ODMsIm5iZiI6MTYyNDM2MTQ4MywiZXhwIjoxNjI0OTY2MjgzLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIyIn19fQ.8fNe1NmsWpelRdAcRaREMqMfRkgMAh--bidLFDJPUEI",
                    user_email:response.data.email,
                    user_nicename: response.data.username,
                    user_display_name: response.data.first_name+" "+response.data.last_name ,
                    user_id: response.data.id
                }
            }else{
                return  null
            }
        }
    ).catch(
        (err)=>{
            console.log("pop")
            console.log(err)
            console.log("lop")
            console.log(err.response)

            return null
        }
    )
}

export async function getUser(id){
    return await WooCommerce.get(`customers/${id}`).then(
        (response)=>{
            console.log(response.data);
            return response.data;
        }
    ).catch(
        (err)=>{
            console.log(err)
            return {}
        }
    )
}

export async  function updateAddress(req){ 
    console.log(req.address)
    console.log(req.id)
    return await WooCommerce.post(`customers/${req.id}`,req.address).then(
        (response)=>{
            console.log(response.data);
            if(response.data.id){
                return response.data
            }else{
                return {}
            }
        }
    ).catch(
        (err)=>{
            console.log(err)
            console.log(err.response)
            return {}
        }
    )
}

export async function placeOrderApi(req){
    
    console.log(req.body)
    return await WooCommerce.post(`orders`,req).then(
        (response)=>{
            console.log(response.data);
            if(response.data.id){
                return response.data
            }else{
                return {}
            }
        }
    ).catch(
        (err)=>{
            console.log(err)
            console.log(err.response)
            return {}
        }
    )
}

export async function customerOrders(id){
 
    console.log(id)
    return await WooCommerce.get(`orders?customer=${id}`).then(
        (response)=>{
            console.log(response.data);
            if(response.data.id){
                return response.data
            }else{
                return {}
            }
        }
    ).catch(
        (err)=>{
            console.log(err)
            console.log(err.response)
            return {}
        }
    )
}


