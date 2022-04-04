const express = require("express");
const cors = require('cors')
const { getUserSets } = require("./controller/getUserSets/getUserSets");

const app = express()
app.use(cors())

const port = 3000

app.use(express.static("public"));

app.get("/getUserSets", getUserSets)

app.listen(port, () => {
  console.log(`Quizlet clone app listening on port ${port}`)
})