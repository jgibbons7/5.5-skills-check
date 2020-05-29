module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get('db')
    db.get_inventory()
    .then(products => res.status(200).send(products))
  },

  addProduct: (req, res) => {
    const {name, price, imgurl} = req.body
    const db = req.app.get('db')
    db.create_product([name, price, imgurl])
    .then(product => res.status(200).send(product))
  }

}