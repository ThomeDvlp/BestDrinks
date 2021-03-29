import React from 'react';
import SearchApi from '../SearchApi/SearchApi';
import styles from './Home.module.css';


const Home=()=> {
    
        return (
            <>
                <main className={styles.mainBody}>
                    <h1 className={styles.mainLogo}>Super Mixes</h1>
                    <SearchApi/>
                </main>
            </>
        )
   
 }
export default Home;