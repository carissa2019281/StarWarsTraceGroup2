import React, {Component} from 'react';
import axios from "axios";
import SpeciesImg from "./SpeciesImg.jpg";
import "./Species.css";

class Species extends Component{
    state= {
    data: null}
    
  componentDidMount(){
        axios
          .get("https://swapi.dev/api/species/")
          .then((response) => this.setState({ data: response.data }));
}   

render(){
    return (
        <div>
            
            <h1>Species</h1>
            {this.state.data?.results.map(species => (
    <div>
        <h2 className="SpeciesHeader">{species.name}</h2>
        <h4>{species.classification} </h4>
        <p>lives for {species.average_lifespan}</p>

    </div>
))}            
<image src={SpeciesImg} alt='img' />

        </div>
)
}
}
export default Species;

// {/* <div>
// <h1>Starships</h1>
// {this.state.data?.results.map(starship => (
//     <div>
//         <h2>{starship.name} | <em>{starship.model}</em></h2>

//     </div>
// ))}

// {this.state.data && this.state.data.results.map(starship => {
//     if (starship.name.includes('Destroyer')) {
//         return (
//             <div>
//                 <h2 style={{color: 'red'}}>{starship.name} | <em>{starship.model}</em></h2>
//             </div>
//         )
//     }
//     return (
//     <div>
//         <h2>{starship.name} | <em>{starship.model}</em></h2>
//     </div>
// )
// })}
// </div> */}