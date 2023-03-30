import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Home = () => {
    const [animals,setAnimals] =useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAnimals(data))
       
        }, [])


    return (
        <div>
           <div className="pokemon-container">
          {
             animals.map((animal)=>(
                <SingleData animal={animal} key={animal.id}></SingleData>
             ))
          }
           </div>
        </div>
    );
};

export default Home;