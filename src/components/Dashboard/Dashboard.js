import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {

  deleteProduct(id) {
    axios.delete(`/api/product/${id}`).then(res)
  }

  render(){
    const invProps = this.props.inventory
    // const invDisplay = this.props.inventory.map(element => (
    //   <div key={element.id}>
    //     <Product />
    //   </div>
    // )
    // )
    return (
      <div>
        <Product invProps={invProps}/>
      </div>
    )
  }
}

export default Dashboard