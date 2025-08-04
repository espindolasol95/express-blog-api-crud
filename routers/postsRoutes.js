//creazione delle rotte (CRUD)
const express = require('express')
const router = express.Router()

// index
 router.get('/', (req, res) => {
    res.send('lista dei post')

 })

// show
router.get ('/:id', (req, re) => {
   const id = req.params.id
    res.send(`Dettagli del post ${id}`)
})

//create 
 router.post('/',(req,res) => {
    res.send('creazione di un nuovo post')
 })

//update
router.put('/:id', (req,res) => {
    res.send(`modifica TOTALE del post ${id}`)


})
//modify
router.patch('./:id', (req,res)=>{
  const id = req.params.id
  res.send (`modifica PARZIALE del post ${id}`)

})

//delete
 router.delete('/:id',(req,res) => {
    const id = req.params.id
    res.send(`Cancellazione del post ${id}`)
 })

 module.exports = router
 