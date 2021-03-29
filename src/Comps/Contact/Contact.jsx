import React from 'react';
import  './style.css';
import Form from '../Form'
import imageContact from '../../assets/imagemContato.jpg'

const Contact = (props) =>{
    const text = props.text;
    
        return (
            <fragment id='grid-contact' className="content">
            <h1 className="contact__title">{props.text}</h1>
            <section className="contact-content">
                    <img className="contact_img" src ={imageContact}/>
                    <Form className="contact_form"/>                
            </section>
            </fragment>             
    );
 }
            
             
        



export default Contact; 