// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails'


import countriesData from './countries.json'
import { Container, Row } from 'react-bootstrap';

import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {

  //const [countries, setCountries] = useState([])

  //<Route path='/:alpha3Code' element={<CountryDetails data={countries} />} />
   //<Route path='/' exact element={<CountryList countries={countries} setCountries={setCountries} />} />

  const [countries, setCountries] = useState(countriesData);


 

  return (
    <div className="App">
      <Navbar />
      
    
          <div className='Alinha'>
          <CountryList
            countries={countries}
            setCountries={setCountries}
          />
          <Routes>
            <Route path="/" />
            <Route
              path="/:alpha3Code"
              element={<CountryDetails countries={countries} />}
            />
           
          </Routes>
          </div>
     


    </div>
  );
}

export default App;