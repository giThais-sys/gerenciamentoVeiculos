import {Schema, model} from "mongoose"

const veiculoSchema= new Schema({
    placa:{
      type: String,
    },
    modelo: {
      type: String,
    }, 
    ano: {
      type: Number,
    }, 
    dono: {
      type: String,
    },
    manutencoes: {
       type: [Schema.Types.ObjectId],
       ref: 'Manutencao',
    }
})
export default model ('Veiculo', veiculoSchema)
