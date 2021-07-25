const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const bd = require("./src/data/sqlite-bd")

const port = process.env.PORT 
const app = express()

const dogsController = require("./src/controller/dogs-controller")
const catsController = require("./src/controller/cats-controller")

app.use(bodyparser.json())
app.use(cors())


dogsController (app, bd)
catsController( app, bd)


app.listen(port, () => {
    console.log(`Aplicação rodando na ${port}`)
})