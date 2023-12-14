const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const PORT = 3001;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.status(200).render("home",{pageTitle:"home page", plNames:plNames})
})

app.post("/", (req, res)=>{
    plNames.push(req.body.plNames);
    res.redirect("/")
})

let plNames=["c","c++", "javascript", "vuejs"]

app.get("/contect", (req, res)=>{
    res.status(200).render("contect",{pageTitle:"contect page"})
})
app.listen(PORT, ()=>{
    console.log(`server is running http://localhost:${PORT}`);
})