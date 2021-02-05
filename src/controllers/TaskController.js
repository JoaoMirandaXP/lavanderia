const connection = require('../database/connection');

module.exports = {
    async index(request,response){
        const {id_cliente} = request.body;
        if(typeof(id_cliente)!== "undefined"){
            console.log(id_cliente)
            const tarefas = await connection('tarefas').where("id_cliente",id_cliente).select('*');
            response.json(tarefas);
        }
        else{
            const tarefas = await connection('tarefas').select('*');
            response.json(tarefas);
        }

    },
    async create(request,response){
        const { descricao, entrada,saida,id_cliente} = request.body; 
        const [id] = await connection('tarefas').insert({
            descricao,
            entrada,
            saida,
            "done":false,
            id_cliente
        })
        response.json({id})
    },
    async update(request,response){
        const id = request.params;
        const {descricao,saida,done} = request.body;
        await connection('tarefas').where(id).update({
            descricao,
            saida,
            done
        });
        response.status(204).send();        
    },
    async delete(request,response){ 
        const id = request.params;
        await connection('tarefas').where(id).delete();
        response.status(204).send();
    },
}