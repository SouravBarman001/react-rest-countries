 import './Country.css'
import React from 'react';

const Country = (props) => {
   
    const {name,area,population,region,flags} = props.country; // object destructuring

    return (
        <div className='myCountry'>
            
            <h2>Country name: {name.common}</h2>
            <img src={flags.png} alt="" srcset="" />
            <p>Country area: {area}</p>
            <p>Country population: {population}</p>
            <p>Region: {region}</p>


        </div>
    );
};

export default Country;