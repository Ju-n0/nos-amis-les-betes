import "./accueil.scss";

import petshop from "../../assets/images/petshop.png";

function Accueil() {
  return (
    <div className="accueil">
      <h2 className="accueil-title">Nous sommes ouverts ! </h2>
      <img className="accueil-img" src={petshop} alt="" />

      <div className="accueil-info-container">
        <div className="accueil-info-container-subpart">
          <h3 className="accueil-info-container-subpart-title">Quand ? </h3>
          <span>
            Mardi, mercredi et vendredi <br />
            de 10h à 19h30
          </span>
          <span>Le jeudi sans rendez-vous</span>
          <span>Le samedi de 10h à 18h</span>
        </div>
        <div className="accueil-info-container-subpart">
          <h3 className="accueil-info-container-subpart-title">Où ? </h3>
          <span>
            10 rue du parc <br />
            91170 Gif sur Yvette
          </span>
          <span>A domicile le dimanche pour les personnes à mobilité réduite</span>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
