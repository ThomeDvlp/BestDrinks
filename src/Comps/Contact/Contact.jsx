import React, { Component } from 'react';
import './style.css';

class Contact extends Component {
    render() {
        return (
            <form class="Contato_formContent">
                <div class="Input_wrapper">
                    <label for="name" class="Input_myLabel">Name:</label>
                    <input class="Input_myField" id="nome" type="text" name="nome" value=""/>
                <p class="Input_errorMsg__2n31u">Enter a value</p>
                </div>
                {/* <div class="Input_wrapper">                    
                    <label for="email" class="Input_myLabel__1gFNy">E-mail:</label>
                    <input class="Input_myField__3arwo" id="email" type="email" name="email" value="">
                </div> */}
                <div class="TextArea_wrapper">
                    <label for="mensagem" class="TextArea_myLabel__3hgKG">Message:</label>
                    <textarea class="TextArea_myField" type="text" id="menssge" name="message" required=""></textarea>
                </div>
                <div class="Contato_btnGrid"><p class="Contato_btnP__XXe4g"></p>
                <button class="Button_btn">Send</button>
                </div>
            </form>
            );
            {/* <h3>Contato</h3>
            <div className="formsContato">
                <>Nome</p>
                <p>Email</p>
                <p>Mensagem
                <div className="containerUsuario"></div>
                </p>
            </div>
        </form> */}
        
    }
}

export default Contact;