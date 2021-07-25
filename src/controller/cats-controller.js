const CatsDao = require('../dao/cats-dao')


module.exports = (app,bd) => {
    const DaoCats = new CatsDao(bd)

    app.get("/pets/cats", async (req, res) => {
        try{
            const respostaVerCats = await DaoCats.verCats()
            res.send(respostaVerCats)
        }catch(error){
            res.send(error)
        }
    })
    app.get("/pets/cats/:ID", async (req, res) => {
       try{
            const id = req.params.ID
            const respostaUnicoCat = await DaoCats.verUnicoCat(id)
            res.send(respostaUnicoCat)
       }catch(error){
           res.send(error)
       } 
    })
    app.delete("/pets/cats/delete/:ID", async (req, res) => {
        try{
            const id = req.params.ID
            const respostaDelete = await DaoCats.deleteCat(id)
            res.send(respostaDelete)
        }catch(error){
            res.send(error)
        }
    })
}