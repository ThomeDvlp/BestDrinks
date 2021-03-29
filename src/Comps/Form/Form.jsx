import React, { useState } from 'react';
import styles from './Input.module.css';
import ButtonStyled from '../Button'
import Input from '../Input/Input'


 const Form =()=> {
    
    const [state, setState] = useState(false)
            
    
    
    
        return (
        <>
            <form className={styles.FormContato}>
                <label className= 'name' htmlFor="name">Name</label><br/>
                <input type="text"></input><br/>
                <label className= 'email'htmlFor="email">E-mail</label><br/>
                <input type="text"></input><br/>
                <textarea className= 'message' name="message" cols="30" rows="15">Message</textarea>
                
            </form>
            <ButtonStyled className= {styles.button}text="Enviar"/>
        </>
        )
    
   
}

export default Form;