import React, { Component } from 'react';
import axios from 'axios';

export default class Vehicles extends Component {

    state = {
        data: null,
    }
    componentDidMount(){
        axios
          .get("https://swapi.dev/api/vehicles/")
          .then((response) => this.setState({ data: response.data }));
      }

      render(){
          return(
            //
            //   {this.state.data && (
            //       <React.Fragment>
            //       <h1>{this.state.data.name}</h1>
            //       </React.Fragment>
            //   )}
        //     {{this.state.data && this.state.data.map(person => (
        //   <div>{person.name}</div>
        // ))} }
        <div>
            <h1>Vehicles</h1>

            {this.state.data?.results.map(vehicle => (

          <div>
            <h2>{vehicle.name} | <em>{vehicle.model}</em></h2>
            <h3 ><em style={{color: 'blue'}}>Number of Occupants: {vehicle.passengers}</em> <em> | </em> <em style={{color: 'green'}} >Max Speed: {vehicle.max_atmosphering_speed}</em></h3>
            </div>
            ))}
        </div>
          )
      }
}
