const express = require("express")
const recipeRouter = require("./router")
const server = express()
const PORT = 5000;


server.use(express.json())
server.use("/api", recipeRouter)
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});