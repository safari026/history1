import React, { Component } from 'react';
import axios from 'axios'
import Button from './Button'
import DataList from './DataList'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      data: [],
      isLoaded: false
    }
    this.loadHandler = this.loadHandler.bind(this);
    this.delteHandler = this.deleteHandler.bind(this);
    //  console.log(this.state.data)
  }сomponentDidMount() {
    this.loadHandler();
  }
  loadHandler = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      //console.log(response.data);
      this.setState({isLoaded: true,
      data: response.data})
  })
}
deleteHandler = (index) => {
  console.log('delete handler');
  console.log(index);
  const data = Object.assign([], this.state.data);
  data.splice(index, 1);
  this.setState({data: data})
}
render() {
  var {isLoaded, data} = this.state;
  if (!isLoaded) {
    return (
      <div>
        <div>Loading...</div>
        <Button clickLoadHandler={this.loadHandler}>Load Data</Button>
      </div>
    )
  } else {
    return (
      <DataList data={this.state.data} clickLoadHandler={this.deleteHandler} />
    )
  }

}
}

export default App;
