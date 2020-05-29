import React, {Component} from 'react'
import shelfie from './shelfie.png'

class Header extends Component {


  render(){
    return (
      <div className='header'>
        <img alt='Shelfie Logo' src={shelfie} className='shelfieImg'></img>
        SHELFIE

      </div>
    )
  }
}

export default Header