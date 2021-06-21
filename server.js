const axios = require('axios');
const next = require( 'next' );
const express =require('express');
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const { query, response } = require('express');
const port=3000;
const dev=process.env.NODE_ENV !=='production';
const app = next({dev});
const handle=app.getRequestHandler();
const url='http://shop-here.atwebpages.com';
const ck='ck_7140ce73ca10a0920bb8fb16c08bfb0f8f26050e';
const cs='cs_c1aa4a44831055ca1a2b17624415e7cb88b70183';
app.prepare().then(()=>{
    const server =express();

    server.get('/uio', (req,res)=>{
        return(res.json("8899"))
    });
    server.get('/getProducts',(req,res)=>{
        console.log(req.query.page)
        var page1=req.query.page?req.query.page:1
        var per_page1=req.query.per_page?req.query.per_page:10
        const query={
            page:page1,
            per_page:per_page1
        }
        const WooCommerce = new WooCommerceRestApi({
            url: url, // Your store URL
            consumerKey: ck,
            consumerSecret: cs, 
            version: 'wc/v3', // WooCommerce WP REST API version
        });
        if(req.query.category){
            WooCommerce.get(`products?category=${req.query.category}`,query)
            .then((response) => {
            //console.log(response.data);
            var kj=response.data.map((data)=>{
                data['price']=parseFloat(data['price'])
                return data
            })
            return res.json(kj);
        }).catch((error) => {
            console.log(error.response.data);
            return res.json(error.response.data);
        });

        }else{
        WooCommerce.get("products",query)
        .then((response) => {
            //console.log(response.data);
            var kj=response.data.map((data)=>{
                data['price']=parseFloat(data['price'])
                return data
            })
            return res.json(kj);
        }).catch((error) => {
            console.log(error.response.data);
            return res.json(error.response.data);
        });
        }
    })
    server.get('/getCategories',(req,res)=>{
        const WooCommerce = new WooCommerceRestApi({
            url: url, // Your store URL
            consumerKey: ck,
            consumerSecret: cs, 
            version: 'wc/v3' // WooCommerce WP REST API version
        });
        WooCommerce.get("products/categories")
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
            return res.json(arr);
        }).catch((error) => {
            console.log(error);
            return res.json(error);
        });
    })
    server.use(express.urlencoded());
    server.use(express.json());
    server.post('/register-user', async (req,res)=>{
        const WooCommerce = new WooCommerceRestApi({
            url: url, // Your store URL
            consumerKey: ck,
            consumerSecret: cs, 
            version: 'wc/v3' // WooCommerce WP REST API version
        });
        
        console.log(req.body)
        await WooCommerce.post("customers",req.body).then(
            async (response)=>{
                console.log(response.data);
                if(response.data.id){
                  await axios.post(`${url}/wp-json/jwt-auth/v1/token`,{
                      username: req.body.email,
                      password: req.body.password
                  }).then((response)=>{
                      console.log(response);
                      return res.json(response.data);
                  }).catch(
                      (err)=>{
                          console.log(err)
                          return res.json(err)
                      }
                  )
                }else{
                    return res.json(response.data)
                }
            }
        ).catch(
            (err)=>{
                console.log("pop")
                console.log(err)
                console.log("lop")
                console.log(err.response)

                return res.json(err.response.data)
            }
        )
    })
    server.get('/get-user', async (req,res)=>{
        const WooCommerce = new WooCommerceRestApi({
            url: url, // Your store URL
            consumerKey: ck,
            consumerSecret: cs, 
            version: 'wc/v3' // WooCommerce WP REST API version
        });

        await WooCommerce.get(`customers/${req.query.id}`).then(
            async (response)=>{
                console.log(response.data);
                return res.json(response.data);
            }
        ).catch(
            (err)=>{
                console.log(err)
                return res.json(err.response.data)
            }
        )
    })
    server.use(express.urlencoded());
    server.use(express.json());
    server.post('/update-address', async (req,res)=>{
        const WooCommerce = new WooCommerceRestApi({
            url: url, // Your store URL
            consumerKey: ck,
            consumerSecret: cs, 
            version: 'wc/v3' // WooCommerce WP REST API version
        });
        
        console.log(req.body.address)
        console.log(req.body.id)
        await WooCommerce.put(`customers/${req.body.id}`,req.body.address).then(
            (response)=>{
                console.log(response.data);
                if(response.data.id){
                    return res.json(response.data)
                }else{
                    return res.json(response.data)
                }
            }
        ).catch(
            (err)=>{
                console.log(err)
                console.log(err.response)
                return res.json(err.response.data)
            }
        )
    })

    server.use(express.urlencoded({
        extended: true
    }));
    server.use(express.json());
    server.post('/place-order', async (req,res)=>{
        const WooCommerce = new WooCommerceRestApi({
            url: url, // Your store URL
            consumerKey: ck,
            consumerSecret: cs, 
            version: 'wc/v3' // WooCommerce WP REST API version
        });
        
        console.log(req.body)
        await WooCommerce.post(`orders`,req.body).then(
            (response)=>{
                console.log(response.data);
                if(response.data.id){
                    return res.json(response.data)
                }else{
                    return res.json(response.data)
                }
            }
        ).catch(
            (err)=>{
                console.log(err)
                console.log(err.response)
                return res.json(err.response.data)
            }
        )
    })
    server.get('/customer-orders', async (req,res)=>{
        const WooCommerce = new WooCommerceRestApi({
            url: url, // Your store URL
            consumerKey: ck,
            consumerSecret: cs, 
            version: 'wc/v3' // WooCommerce WP REST API version
        });
        
        console.log(req.query.id)
        await WooCommerce.get(`orders/?customer=${req.query.id}`).then(
            (response)=>{
                console.log(response.data);
                if(response.data.id){
                    return res.json(response.data)
                }else{
                    return res.json(response.data)
                }
            }
        ).catch(
            (err)=>{
                console.log(err)
                console.log(err.response)
                return res.json(err.response.data)
            }
        )
    })

    server.get('*',(req,res)=>{
        return handle(req,res);
    });

    server.listen(port,err=>{
        if(err){
            throw err;
        }
        console.log(`Ready on ${port}`)
    });

}).catch(ex=>{
    console.error(ex.stack);
    process.exit(1);
});;