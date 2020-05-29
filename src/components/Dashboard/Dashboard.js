import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {


  render(){
    const invProps = this.props.inventory
    const invDisplay = this.props.inventory.map(element => (
      <div key={element.id}>
        <Product />
      </div>
    )
    )
    return (
      <div>Dashboard
        <Product invProps={invProps}/>
      </div>
    )
  }
}

export default Dashboard