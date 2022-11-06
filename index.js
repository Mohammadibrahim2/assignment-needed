// const express = require('express');
const express=require("express")
const app=express();
const port=process.env.PORT || 4000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors=require('cors');
app.use(cors());


app.use(express.json())





const uri = "mongodb+srv://ordersDB:3SWZ3kq4yJp1c0Cc@cluster0.hx7zrkm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
 async function run(){

  try{

    const orderCollection=client.db('Orders').collection('Orderscollection')
    

    app.get("/orders",async(req,res)=>{
      const page=req.query.page;
      const size=req.query.size;
      const query={}
      const cursor= orderCollection.find(query)
      const allorders=await cursor.skip(page*size).limit(parseInt(size)).toArray()
      console.log(page,size)
      res.send(allorders)
      

      
     
  

      
  })

  //Orders/Orderscollection/find
  // app.delete("/delete/:id",(req,res)=>{
  //   console.log(req.params.id)
    
  //   res.send(req.params.name)



  // })

  // app.get("/product/:id",(req,res)=>{
  //   const upid=req.params.id
  //   console.log(upid)
  //   const updata=products.find(pro=>pro.id==upid)
  //   res.send(updata)



  // })
  //   const result= await orders.insertOne()

  }
  
  finally{

  }


}
run().catch((error=>{
  console.error(error)
}))

//3SWZ3kq4yJp1c0Cc
//ordersDB

// app.post('/friends',(req,res)=>{
//     console.log("api is called")
//     const newfriends=req.body;
//     newfriends.id=users.length+1;
//     users.push(newfriends)
//     res.send(newfriends)
//     console.log(newfriends)

    
// })

app.listen(port,()=>{
console.log(port)
})