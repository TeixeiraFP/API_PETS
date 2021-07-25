const DogsDao = require("../dao/dogs-dao")

module.exports = (app, bd) => {

    const DaoDogs = new DogsDao(bd)

    app.get('/pets/dogs', async (req, res) => {
        try{
            const respostaVerDogs = await DaoDogs.verDogs()
            res.send(respostaVerDogs)
        }catch(error){
            res.send(error)
        }
    })

    app.get('/pets/dogs/:ID', async (req, res) => {
        try{
            const id = req.params.ID 
            const respostaUnicoDog = await DaoDogs.verUnicoDog(id)
            res.send(respostaUnicoDog)
        }catch(error){
            res.send(error)
        }
    })

    app.post('/pets/dogs/newDogs', async (req, res) => {
        try{
            const body = req.body
            const infos = [body.RACA, body.FOTO, body.IDADE, body.NOME, 
            body.GENERO, body.RUA, body.NUMERO, body.CIDADE, body.ESTADO, body.TELEFONE]
            
            const respostaNewDog = await DaoDogs.newDog(infos)
            res.send(respostaNewDog)    
        }catch(error){
            res.send(error)
        }
    })
    app.delete('/pets/dogs/delete/:ID', async (req, res) => {
        try{
            const id = req.params.ID 
            const respostaDelete = await DaoDogs.deleteDog(id)
            res.send(respostaDelete)
        }catch(error){
            res.send(error)
        }
    })
    app.put('/pets/dogs/update/:ID', async (req, res) => {
        try{
            const body = req.body
            const id = req.params.ID
            const infos = [body.RACA, body.FOTO, body.IDADE, body.NOME, 
                body.GENERO, body.RUA, body.NUMERO, body.CIDADE, body.ESTADO, body.TELEFONE]
            
                const respostaEdit = DaoDogs.editDog(infos, id)

            res.send(respostaEdit)
        }catch(error){
            res.send(error)
        }
    })
}