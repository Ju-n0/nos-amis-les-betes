import "./avis.scss";
import avisArray from "../../data/avis";

function Avis() {
  return (
    <div className="avis">
      <h2 className="avis-title">Les avis de nos clients</h2>

      <div className="avis-container">
        {avisArray.map((avis) => (
          <div className="avis-card" key={avis.id}>
            <div className="avis-card-header">
              <img className="avis-card-header-img" src={avis.img_source} alt={avis.author} />
              <div className="avis-card-header-details">
                <p className="avis-card-header-author">{avis.author}</p>
                <p className="avis-card-header-note">{"★".repeat(+avis.note)}</p>
              </div>
            </div>
            <p className="avis-card-comment">{avis.comment}</p>
            <p className="avis-card-date">{avis.created_at}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Avis;
