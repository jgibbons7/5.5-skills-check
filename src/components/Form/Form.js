import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
constructor(){
  super()
  this.state = {
    name: '',
    price: 0,
    imgurl: '',
  }
}

setName(name) {
  this.setState({
    name: name
  })
} 

setImgurl(imgurl) {
  this.setState({
    imgurl: imgurl
  })
}

setPrice(price) {
  this.setState({
    price: price
  })
}

cancel() {
  this.setState({
    name: '',
    price: 0,
    imgurl: ''
  })
}

addInventory() {
  const body = {
    name: this.state.name,
    price: this.state.price,
    imgurl: this.state.imgurl
  }
  axios.post('/api/product', body)
  .then(this.props.getData(), this.cancel())
this.props.getData()
}

  render(){
    return (
      <div className='formMain'>
        <div className='form'>
          <img alt='input preview' className = 'imgprev' src={this.state.imgurl}></img>
          <div className='formField'>
            Image URL:
            <input type='text' value={this.state.imgurl} onChange={(e) => this.setImgurl(e.target.value)}></input>
            Product Name:
            <input type='text' value={this.state.name} onChange={(e) => this.setName(e.target.value)}></input>
            Price:
            <input type='number' value={this.state.price} onChange={(e) => this.setPrice(e.target.value)}></input>
          </div>
          <div style={{display: 'flex'}}>
            <button className='formButton' onClick={() => this.cancel()}>Cancel</button>
            <button className='formButton' onClick={() => this.addInventory()}>Add to Inventory</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Form