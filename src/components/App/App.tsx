import { Routes, Route } from "react-router-dom";

import Accueil from "../Accueil/Accueil";
import Header from "../Header/Header";
import SiteName from "../SiteName/SiteName";
import "./app.scss";
import Prestations from "../Prestations/Prestations";
import Conseils from "../Conseils/Conseils";
import Relookings from "../Relookings/Relookings";
import Avis from "../Avis/Avis";
import Rdv from "../Rdv/Rdv";
import Contact from "../Contact/Contact";

function App() {
  return (
    <div className="app">
      <Header />
      <SiteName />

      <Routes>
        <Route path="/nos-amis-les-betes" element={<Accueil />} />
        <Route path="/nos-amis-les-betes/prestations" element={<Prestations />} />
        <Route path="/nos-amis-les-betes/conseils" element={<Conseils />} />
        <Route path="/nos-amis-les-betes/relookings" element={<Relookings />} />
        <Route path="/nos-amis-les-betes/avis" element={<Avis />} />
        <Route path="/nos-amis-les-betes/rdv" element={<Rdv />} />
        <Route path="/nos-amis-les-betes/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
