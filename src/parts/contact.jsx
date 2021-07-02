import React, {useState} from 'react'
import mail from '../img/mail.svg'
import mailLight from '../img/mail-light.svg'
import emailjs from 'emailjs-com';

export function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [consens, setConsens] = useState("")


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_254kbd6', 'template_orj90br', e.target, 'user_wCHeo8ZDYAmGBc8nX6AhG')
      .then((result) => {
          setName("");
          setEmail("");
          setMessage("");
          setConsens(false);
          document.querySelector('.contact-result').innerHTML = "Votre message a bien été envoyé, je vous recontacterai au plus vite, belle journée à vous !"
      }, (error) => {
          console.log(error.text);
          document.querySelector('.contact-error').innerHTML = "Une erreur c'est produite, veuillez vérifier les informations renseignées ou envoyer moi un mail directement. Belle journée à vous !"
      });
  }

  return ( <section id="contact">
        <div className="container-narrow">
            <h2>Contact</h2>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label htmlFor="name">Votre nom </label>
                <input type="text" aria-label="Votre nom" value={name} id="name" onChange={ (e) => setName(e.target.value) } placeholder="Jean" name="name" />
                <label htmlFor="email">Votre email *</label>
                <input type="email" aria-label="Votre adresse mail" value={email} onChange={ (e) => setEmail(e.target.value) } placeholder="jean.test@example.com" name="email" id="email" required />
                <label htmlFor="message">Votre message</label>
                <textarea name="message" id="message" value={message} onChange={ (e) => setMessage(e.target.value) } placeholder="Entre votre message" />
                <label className="consens-input" htmlFor="consens">
                    <input type="checkbox" name="consens" id="consens" aria-label="Je consens à la conservation de mes données pour rester en contact" value={consens} onChange={ (e) => setConsens(e.target.checked) } required />
                Je consens que mes données soient conservées et utilisées dans le seul but et dans le temps nécessaire pour échanger avec le propriétaire de ce site.</label>
                <input type="submit" aria-label="Envoyez" value="Envoyer" />
                <span className="contact-result"></span>
                <span className="contact-error"></span>
            </form>
            <div className="email">
                <aside className="svg">
                    <a href="mailto:montoyagregoire.devweb@gmail.com">
                        <span className="screen-reader-text">Contacter Montoya Grégoire</span>
                        <img src={mail} alt="Envoyer un email à Montoya Grégoire"/>
                        <img src={mailLight} alt="Envoyer un email à Montoya Grégoire"/>
                    </a>
                </aside>
                <a className="email-contact" href="mailto:gregoire@montoya.studio">Venez discuter</a>
            </div>
        </div>
    </section>
  );
}