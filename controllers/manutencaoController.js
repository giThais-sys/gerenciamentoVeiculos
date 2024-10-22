import Manutencao from "../models/manutencaoModels.js"

export const store= async (req, res)=>{
    try{
        const manutencao= await Manutencao.create(req.body)
        return res.status(201).json(manutencao)
    }catch (error){
        return res.status(400).json({message:error.message})
    }
}

export const index= async (req, res)=> {
    try{
      const manutencao= await Manutencao.find().exec()
      return res.status(200).json(manutencao)
    }catch (error){
      return res.status(400).json({message:error.message})
    }
}

export const update= async (req, res) =>{
    try{
     const manutencao= await Manutencao.findByIdAndUpdate(req.params.id, req.body).exec()
     return res.status(200).json(manutencao)
    }catch(error){
     return res.status(400).json({message:error.message})
    } 
}

export const destroy= async (req, res)=> {
    try{
      const manutencao= await Manutencao.findByIdAndSDelete(req.params.id).exec()
      return res.status(200).json(manutencao)
    }catch (error){
      return res.status(400).json({message:error.message})
    }
}