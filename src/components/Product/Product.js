import React, {Component} from 'react'

class Product extends Component {
 

  render(){
//  console.log(this.props.invProps)
  const mapped = this.props.invProps.map(element => (
    <div key={element.id} className='productMain'>
      <div>
        <img className='productImage' src={element.imgurl}></img> 
        Name: {element.name}
        Price: {element.price}
      </div>
    </div>
  )
  )
    return (
      <div>
        {mapped} 
      </div>
    )
  }
}

export default Product