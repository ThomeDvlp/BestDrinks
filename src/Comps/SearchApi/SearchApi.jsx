import React, { useState, useEffect } from 'react';
import Card from '../Card/Card'
import styles from './SearchApi.module.css';


const SearchApi = ()=>{
    const [data, setData] = useState  ('sending');
  

    function handleClick(){
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then((response)=> response.json())
        .then((json)=> setData(json.drinks[0], console.log(json.drinks[0])));
    };
   
    useEffect(
        ()=>{
            handleClick();
        },[]
    )
     
    return (
        <fragment className={styles.SearchApi}>        
        <Card url={data.strDrinkThumb} title={data.strDrink}/>
        <button onClick={handleClick} className={styles.buttonApi}>Search</button>
        </fragment>
        
    )
}
export default SearchApi; 