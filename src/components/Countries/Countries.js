import {useEffect,useState} from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries,setCountries] = useState([]); // array of information
    useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(countries => setCountries(countries))
    },[]);
    return(
      <div>
        <h1>Visiting every country in the world</h1>
        <p>countries {countries.length}</p>

      <div className="country-container">
      {
                countries.map(country => <Country 
                  country={country}
                  key={country.cca3}
                  ></Country>)
              }
      </div>

      </div>
    );
};


export default Countries;