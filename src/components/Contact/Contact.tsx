import "./contact.scss";

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact-title">Nous contacter</h2>
      <div className="contact-form">
        <fieldset className="details">
          <p>Civilités</p>
          <div className="details-field">
            <label htmlFor="lastname">Nom</label>
            <input type="text" name="lastname" />
          </div>
          <div className="details-field">
            <label htmlFor="firstname">Prénom</label>
            <input type="text" name="firstname" />
          </div>
        </fieldset>

        <fieldset className="details">
          <p>Vos coordonnées</p>
          <div className="details-field">
            <label htmlFor="phone-number"> Téléphone</label>
            <input className="shadow" type="tel" name="phone-number" />
          </div>
          <div className="details-field">
            <label htmlFor="email">Adresse email</label>
            <input className="shadow" type="email" name="email" />
          </div>
        </fieldset>
      </div>
      <div className="contact-form">
        <fieldset className="description-part">
          <label className="description-part" htmlFor="project-description">
            Votre message
          </label>
          <textarea className="description-area" name="project-description"></textarea>
          <button className="submit-form">Envoyer le message</button>
        </fieldset>
      </div>
    </div>
  );
}

export default Contact;
