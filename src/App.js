import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios';

class App extends Component {

  constructor(){
    super()
    
    this.state = {
      inventory: []
    }

    this.getData = this.getData.bind(this)

  }
  
  getData() {
    axios.get('/api/inventory').then (res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  componentDidMount() {
    this.getData()
  }


  render(){
  return (
    <div className="App">
      <Header />
      <div className='body'>
      <Dashboard inventory={this.state.inventory} getData={this.getData}/>
      <Form getData={this.getData}/>
      </div>
    </div>
  );
  }
}

export default App;
