
import './App.css';
import './components/Header/Header.css';

import React from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}


// function LoadCountries(){

//   const [countries,setCountries] = useState([]); // array of information
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(countries => setCountries(countries))
//   },[]);
//   return(
//     <div>
//       <h1>Visiting every country in the world</h1>
//       <p>countries {countries.length}</p>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }


// function Country(props){
//   return(


//     <div>
//       <h2> Name : {props.name}</h2>
//       <p>Population : {props.population}</p>
//     </div>
//   )
// }

export default App;
