const express = require('express');

const app = express();
const port = 8080;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

// app.use((req, res) => {
//     console.log("request receive");
//     let code = "<h1>Fruits</h1> <ul><li>Orange</li><li>Red</li></ul>"
//     res.send(code);
// }); 

app.get("/:username", (req,res)=>{
    let {username, id} = req.params;
    
    res.send(`Welcome! ${username}`)
})