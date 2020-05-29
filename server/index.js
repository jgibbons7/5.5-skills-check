require('dotenv').config()

const express = require("express")
const massive = require('massive')
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db)
  console.log('database connected')
}).catch(err => console.log(err))

app.use(express.json())

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.addProduct)
app.put('/api/inventory:id', )
app.delete('/api/product/:id', ctrl.deleteProduct)

app.listen(SERVER_PORT, () => console.log(`Big Brother watching on:${SERVER_PORT}`))