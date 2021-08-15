const { Router } = require('express')
const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/'})



const app = express()
const routerProducto = new Router()

const productos =[]

//app.post('/profile', upload.single('avatar'), function (req, res, next) {
  //  console.log(req.file, req.body) 
    
//})



app.get('/', (req, res) =>{
    res.sendFile('./public/index.html')
})

routerProducto.get('/', (req, res) => {
    res.send({
        productos,
    })
})

routerProducto.post('/', (req, res) => {
    const data = req.body
    productos.push(data)
    res.send('Sumado!')

}) 

app.use('/productos', routerProducto)
app.use('/public', express.static('public'))


const PORT = 8080

app.listen(PORT, () => {
    console.log(`Server On PORT ${PORT}`)
})