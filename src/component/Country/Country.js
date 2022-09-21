import React from 'react';
import "./Country.css"

const Country = (props) => {
    const {name, area, flags, population} = props.country;
    return (
        <div className='country'>
            <h1>Name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <p><span>Area: {area}</span></p>
            <p>Population: {population}</p>
            
        </div>
    );
};

// const Country = (props) =>{
//     return(
//         <div>
//             <h1>Name: {props.name}</h1>
//             <p>Population: {props.population}</p>
//         </div>
//     )
// }



export default Country;