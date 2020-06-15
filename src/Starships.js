import React, {Component} from 'react';
import axios from 'axios';

export default class Starships extends Component {
    state = {
        data: null
    }

    componentDidMount(){
        axios
            .get("https://swapi.dev/api/starships/")
            .then((response) => this.setState({ data: response.data }));
    }

    render() {
        return (
            <div>
                <h1 >Starships</h1>
                {this.state.data?.results.map(starship => (
                    <div>
                        <h2>{starship.name} | <em style={{color: 'blue'}}>{starship.model}</em></h2>

                    </div>
                ))}

                {this.state.data && this.state.data.results.map(starship => {
                    if (starship.name.includes('Destroyer')) {
                        return (
                            <div>
                                <h2 style={{color: 'red'}}>{starship.name} | <em>{starship.model}</em></h2>
                            </div>
                        )
                    }
                    return (
                    <div>
                        <h2>{starship.name} | <em style={{color: 'blue'}}>{starship.model}</em></h2>
                    </div>
                )
                })}
            </div>
        )
    }

}
