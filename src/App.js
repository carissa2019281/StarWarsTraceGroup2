import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Home from './Home.js';
import People from './People.js';
import Vehicles from './Vehicles.js';
import Starships from './Starships.js';
import Species from './Species.js';
import Routes from './Routes.js';

export default class App extends Component {
  state = {
    data: null
  }
  componentDidMount(){
    axios
      .get("https://swapi.dev/api/")
      .then((response) => this.setState({ data: response.data }));
  }
  render(){
    return (
      <div className="App">
        <Routes />
        

        {/* <pre>{JSON.stringify(this.state.data, null, 2)}</pre> */}
       
        {/*
        Object.keys() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
        Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
        Object.entries https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
        */}

        {/* {this.state.data && this.state.data.map(person => (
          <div>{person.name}</div>
        ))} */}
      </div>
    );
  }
}

// const myobj = {
//   key: value,
//   key2: value2,
// }

// const arr = [
//   [key, value],
//   [key2, value2],
// ]
