const express =require("express");
const app=express();

app.use(logger);

app.get("/books",(req,res)=>{
    return res.send({route:"/books"})
})

app.get("/labraries",checkPermission("librarian"),(req,res)=>{
    return res.send({route:"/labraries",permission:true})
})

app.get("/authors",checkPermission("author"),(req,res)=>{
    return res.send({route:"/authors",permission:true})
})




function logger(req,res,next){
    console.log("checking root handler")
    next();
}

function checkPermission(occupation){
    return function logger(req,res,next){
        console.log("checking root handler2")
        if(occupation=="librarian"){
           
            return next();
        }

        else if(occupation=="author"){
            return next();
        }
    }
}


app.listen(8000,()=>{
    console.log("listing at port 8000");
})