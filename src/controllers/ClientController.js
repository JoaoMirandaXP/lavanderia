const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request,response) {
        const  clientes = await connection('clientes').select('*');
        response.json(clientes);
    },
    async create(request, response){
        //desmembramento das variáveis no corpo da requisição
        const {name,telefone,endereco} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        console.log(id);
        console.log(name);
        console.log(telefone);
        console.log(endereco);

        //conexão com o banco de dados
        await connection('clientes').insert({
            id,
            name,
            telefone,
            endereco,
        });
        return response.json( {id} );
    },
    async update(request,response){
        return response.send('Em breve');
    },
    async delete(request,response){
        return response.send('Em breve');
    }
}