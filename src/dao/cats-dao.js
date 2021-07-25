const { response } = require("express")

module.exports = class CatsDao {
    constructor(bd){
        this.bd = bd
    }

    verCats(){
        return new Promise ((resolve, reject) => {
            const query = 'SELECT * FROM CATS'
            this.bd.all(query, (error, response) => {
                if(error) reject `Error ao acessar o BD. ${error}`
                else resolve(response)
            })
        })
    }
    verUnicoCat(id){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM CATS WHERE ID = (?)'

            this.bd.all(query, id, (error, response) => {
                if(error) reject `Error ao acessar o BD. ${error}`
                else resolve(response)
            })
        })
    }
    deleteCat(id){
        return new Promise ((resolve, reject) => {
            const query = 'DELETE FROM CATS WHERE ID = (?)'

            this.bd.run(query, id, (error) => {
                if(error) reject `Error ao acessar o DB. ${error}`
                else resolve(`Cat  de ID ${id}, excluido com sucesso.`)
            })
        })
    }
}