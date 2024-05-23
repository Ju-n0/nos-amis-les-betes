import "./prestations.scss";

function Prestations() {
  const prestationArray = [
    {
      name: "Lavage",
      price: "A partir de 20€ TTC",
    },
    {
      name: "Bain avec débourrage",
      price: "A partir de 30€ TTC",
    },
    {
      name: "Bain avec débourrage avec soin",
      price: "A partir de 50€ TTC",
    },
    {
      name: "Soins seul",
      price: "A partir de 30€ TTC",
    },
    {
      name: "Epilation",
      price: "A partir de 60€ TTC",
    },
    {
      name: "Tonte",
      price: "A partir de 48€ TTC",
    },
    {
      name: "Coupe ciseau",
      price: "A partir de 57€ TTC",
    },
  ];

  return (
    <div className="prestations">
      <h2 className="prestations-title">Nos prestations</h2>
      <div className="prestation-container">
        {prestationArray.map((prestation) => (
          <div className="prestation-detail">
            <span className="prestation-detail-name">{prestation.name}</span>
            <span className="prestation-detail-price">{prestation.price}</span>
          </div>
        ))}
        <span className="prestation-container-disclaimer">
          Les tarifs sont donnés à titre indicatif. Il faut tenir compte de l'état de départ du
          chien ainsi que de son poids et de sa taille.
        </span>
      </div>
    </div>
  );
}

export default Prestations;
