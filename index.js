const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT;
const handlereq = (fileName,statustCode,req,res) =>{
    fs.readFile(fileName , "utf-8", (err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.writeHead (200,{
                "content-type": "text/html"});
            res.write(data);
            res.end;
        }
    });
}
const server = http.createServer((req, res)=>{
    // res.end("server is Running");
    if (req.url ==="/"){
        handlereq("index.html",200,req,res);
    }
    else if (req.url ==="/about.html"){
        handlereq("about.html",200,req,res);
    }
    else if(req.url ==="/contact.html"){
        handlereq("contact.html",200,req,res);
    }
    else{
        handlereq("404.html",404,req,res);
    }
});

server.listen(PORT,()=>{
    console.log(`server is running`)
})