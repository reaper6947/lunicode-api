const express = require("express");
const app = express();
const path = require('path');
var luni = require("lunicode");
//var luni = new Lunicode();

//middlwares
app.set('view engine', 'ejs');
app.use(express.static('views'))


app.get("/",(req,res)=>{
  res.render("index")
})

app.get("/text", (req, res) => {
    res.render("text");
})


app.get("/:option/:text", (req, res) => {
    const { option, text } = req.params;
    if (text && text !== undefined && text !== null )  {
        console.log(text.replace(/\s/g,'-'));
        const txt = text.replace(/\s/g,'-'); 
        var encText = luni.tools[option].encode(`${txt}`);
        res.render("text",{text:encText});    
    } else {
        res.end()
    }
})


const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log("server started on port " + PORT));