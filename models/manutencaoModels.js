import {Schema, model} from "mongoose"

const manutencaoSchema= new Schema({
    oficina: {
      type: Schema.Types.ObjectId,
      ref: 'Oficina',
    }, 
    veiculo:{
      type: Schema.Types.ObjectId,
      ref: 'Veiculo',
    }, 
    servico: {
       nome:[{String}],
       preco:[{Number}],
    },
    data: {
      type: Date,
    }, 
    valorTotal: {
      type: Number,
    }
})

export default model ('Manutencao', manutencaoSchema)
