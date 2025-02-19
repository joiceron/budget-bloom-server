import express from 'express';
import cors from "cors";
const app = express();

const PORT = 8080;

app.get("/", function(req, res){
res.send("This is our home page")
});

app.listen(PORT, () => {
console.log(" This is running on "+PORT);
});