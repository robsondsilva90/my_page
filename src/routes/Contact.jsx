//Statics
import "./Contact.css";

// Imports
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if(name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    };

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_rfgmjvf", "template_qmvstnn", templateParams, "SXqJN1_Z9yRqzIntU")
    .then((response) => {
    /*  console.log("EMAIL ENVIADO COM SUCESSO", response.status, response.text); */
      setName("");
      setEmail("");
      setMessage("");
    }, (err) => {
     /* console.log("ERRO: ", err); */
    })
    
  };
  
  return (
    <div className="contact-container">
      <div className="contact-form">
        <div className="interface">
          <h1>Entre em Contato</h1>
          <form className="form" onSubmit={sendEmail}>
            <input type="text" 
            placeholder="Seu nome" 
            onChange={(e) => setName(e.target.value)} 
            value={name}  
            />
            <input type="text" 
            placeholder="E-mail"  
            onChange={(e) => setEmail(e.target.value)} 
            value={email}  
            />
            <textarea name="msg" 
            placeholder="Sua mensagem" 
            onChange={(e) => setMessage(e.target.value)} 
            value={message} >
            </textarea>
            <div className="btn-send">
              <input className="contact-button" 
              type="submit" 
              value="Enviar" 
              />
            </div>
            <div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact