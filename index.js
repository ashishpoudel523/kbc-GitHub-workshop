console.log("hello from node js")
console.log(2 == 4)

function add(a, b) {
    return a + b
}



console.log(add(1, 4))





//global variable //
global.companyName = "Ashish"

console.log(companyName)


function print() {
    console.log(companyName)
}

print()


console.log(process.USER)


setInterval(() => console.log("hello"), 1000)



console.log(__filename)

console.log(__dirname)

const add = require("./app")




import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import blogRouter from "./routes/blogRouter.js";

const app = express();
app.use("/blog", blogRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8000, async () => {
  console.log("Server has started 🚀");
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
    console.log("Connected to DB 🚀");
  } catch (err) {
    console.log(err);
  }
});
