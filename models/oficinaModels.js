import {Schema, model} from "mongoose"

const oficinaSchema= new Schema ({
    nome: {
        type: String,
    },
    endereco: {
        type: String,
    },
    especialidades: {
        type: [String],
    }
    })

    export default model ('Oficina', oficinaSchema)

