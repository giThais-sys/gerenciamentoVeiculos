import express from 'express'
import oficinaRoutes from './routes/oficinaRoutes.js'
import veiculoRoutes from './routes/veiculoRoutes.js'
import manutencaoRoutes from './routes/manutencaoRoutes.js'
import {connectDB} from './config/db.js'

const app= express()
const port= 3000
app.use(express.json())

connectDB()
    
app.use ('/oficina', oficinaRoutes)
app.use ('/veiculo', veiculoRoutes)
app.use ('/manutencao', manutencaoRoutes)

app.listen (port, ()=> {
    console.log(`servidor escutando na porta ${port}`)
})