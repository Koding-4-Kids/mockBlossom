import express from 'express'

const app = express()
const PORT = 3000

app.get('/',(req,res)=>{
    res.json('for blossom')
})

app.listen(PORT,()=> console.log(`PORT Running on ${PORT}`))