import "./siteName.scss";
import bulle from "../../assets/images/bulle.png";

function SiteName() {
  return (
    <div className="siteName">
      <img className="siteName-image" src={bulle} alt="" />
      <h1 className="siteName-title">Nos amis les bêtes</h1>
    </div>
  );
}

export default SiteName;
