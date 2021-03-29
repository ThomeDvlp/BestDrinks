import React from 'react';
import SearchApi from '../SearchApi/SearchApi'
import styles from './Card.module.css';

const Card = (props) =>{
    return (
        <fragment className={styles.cardMaster}>  
        <h1 className={styles.titleSearch}>Randomic Drinks</h1>      
        <img clasName={styles.imgCard}src={props.url}/>
        <h2 className={styles.nameCard}>{props.title}</h2>
        </fragment>
    )
}

export default Card;