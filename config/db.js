import mongoose from 'mongoose'
export const connectDB= async()=> {
    try{
        await mongoose
        .connect(`${process.env.URI}`)
        .then(() => console.log('foi'))
    }catch (error){
        console.error('erro ao conectar ao MongoDB', error)
    }
}

export default mongoose