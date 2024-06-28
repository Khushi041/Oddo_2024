const express=require("express")

const cors =require("cors")
const app=express();
PORT=5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT,()=>{
    console.log(`server at ${PORT}`)
})