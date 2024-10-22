import Oficina from  "../models/oficinaModels.js"

export const store= async (req, res)=> {
    try{
     const oficina= await Oficina.create(req.body)
     return res.status(201).json(oficina)
    }catch(error){
     return res.status(400).json({message:error.message})
    }
}

export const index= async (req, res)=> {
    try{
   const oficina= await Oficina.find().exec()
   return res.status(200).json(oficina)
    }catch (error){
   return res.status(400).json({message:error.message})
    }
}

export const update= async (req, res)=> {
    try{
    const oficina= await Oficina.findByIdAndUpdate(req.params.id, req.body).exec()
    return res.status(200).json(oficina)
    }catch (error){
    return res.status(400).json({message:error.message})
    }
}

export const destroy= async (req, res)=> {
    try{
     const oficina= await Oficina.findByIdAndDelete(req.params.id).exec()
     return res.status(200).json(oficina)
    }catch(error) {
     return res.status(400).json({message})
    }
}