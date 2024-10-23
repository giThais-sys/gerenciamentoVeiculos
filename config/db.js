import mongoose from 'mongoose'
export const connectDB= async()=> {
    try{
        await mongoose
        .connect('mongodb://localhost:27017/oficina')
        .then(() => console.log('foi'))
    }catch (error){
        console.error('erro ao conectar ao MongoDB', error)
    }
}

export default mongoose