const express = require("express");
const app = express();
var luni = require("lunicode");
//var luni = new Lunicode();

//middlwares
app.use(express.static("public"));


app.get("/",(req,res)=>{
  res.send("index")
})

app.get("/:option/:text", (req, res) => {
    const { option, text } = req.params;
    


    if (text && text !== undefined && text !== null )  {
        console.log(text.replace(/\s/g,'-'));
        const txt = text.replace(/\s/g,'-'); 
        var encText = luni.tools[option].encode(`${txt}`);
        res.send(encText);    
    } else {
        res.end()
    }
    
})


const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log("server started on port " + PORT));