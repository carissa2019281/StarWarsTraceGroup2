import React, { Component } from 'react';
import axios from 'axios';
import './People.css';
export default class People extends Component {
state = {
    data: null
    }
componentDidMount(){
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => this.setState({ data: response.data }));
  }

render(){
    return(
        <div className="People">
            <h1>Star Wars Characters</h1>
            {this.state.data?.results.map(people => (
                    <div>
                       
                    <h2>{people.name}</h2>
                       <ul>
                            <li>Eye Color: {people.eye_color}</li>
                            <li>Hair Color: {people.hair_color}</li>
                       </ul>
                    </div>
            ))}
        </div>
    )
}

}
