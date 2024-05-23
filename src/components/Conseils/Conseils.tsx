import "./conseils.scss";

import conseilsArray from "../../data/conseils";

function Conseils() {
  return (
    <div className="conseils">
      <h2 className="conseils-title">Nos conseils</h2>
      <div className="conseils-container">
        {conseilsArray.map((conseil) => (
          <div className="conseils-card" key={conseil.id}>
            {conseil.img_source && (
              <img className="conseils-card-img" src={conseil.img_source} alt="" />
            )}
            <h3 className="conseils-card-title">{conseil.title}</h3>
            <ul className="conseils-card-textpart">
              {conseil.tips.map((tip) => (
                <li key={tip} className="conseils-card-text">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Conseils;
