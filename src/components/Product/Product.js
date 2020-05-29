import React, {Component} from 'react'

class Product extends Component {
 

  render(){
     console.log(this.props.invProps)
  const mapped = this.props.invProps.map(element => (
    <div key={element.id} className='productMain'>
      <div>
        <img className='productImage' src={element.image_url}></img> 
      </div>
      <div className='productData'>
        {element.name}
      </div>
      <div className='productData'>
        ${element.price}
      </div>
      <div className='editDelete'>
        <button className='editDeleteButton'>Delete</button>
        <button className='editDeleteButton'>Edit</button>
      </div>
    </div>
  )
  )
  console.log(mapped)
    return (
      <div>
        {mapped} 
      </div>
    )
  }
}

export default Product