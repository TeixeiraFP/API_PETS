module.exports = class DogsDao {
    constructor(bd){
        this.bd = bd
    }

    verDogs(){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM DOGS'
            this.bd.all(query, (error, response) => {
                if(error) reject(`Error ao acessar o BD. ${error}`)
                else resolve(response)
            })
        })
    }
    verUnicoDog(id){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM DOGS WHERE ID = (?)'
            this.bd.all(query, id, (error, response) => {
                if(error) reject(`Error ao acessar o BD. ${error}`)
                else resolve(response)
            })
        })
    }
    newDog(infos){
        return new Promise ((resolve, reject) => {
            const query = 'INSERT INTO DOGS (RACA, FOTO, IDADE, NOME, GENERO, RUA, NUMERO, CIDADE, ESTADO, TELEFONE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
            const parametros = [infos[0], infos[1], infos[2], infos[3], infos[4], infos[5], infos[6], infos[7], infos[8], infos[9]]
            this.bd.run(query, parametros, (error, response) => {
                if(error) reject(`Error ao adicionar o BD. ${error}`)
                else resolve('Dog adicionando com sucesso')
            })
        })
    }
    deleteDog(id){
        return new Promise ((resolve, reject) => {
            const query = 'DELETE FROM DOGS WHERE ID = (?)'
            this.bd.run(query, id, (error) => {
                if(error) reject(`Erro ao deletar dog`)
                else resolve (`Dog de id ${id} deletado com sucesso`)
            })
        })
    }
    editDog(infos, id){
        return new Promise ((resolve, reject) => {
            const query = 'UPDATE DOGS SET RACA = (?), FOTO = (?), IDADE = (?), NOME = (?), GENERO = (?), RUA = (?), NUMERO = (?), CIDADE = (?), ESTADO = (?), TELEFONE = (?) WHERE ID = (?)'
            const parametros = [infos[0], infos[1], infos[2], infos[3], infos[4], infos[5], infos[6], infos[7], infos[8], infos[9], id]
            this.bd.run(query, parametros, (error) => {
                if(error) reject('Error ao fazer a atualização')
                else resolve('Dog editado')                
            })
        })
    }
}