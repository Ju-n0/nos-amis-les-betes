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
        <Route path="/" element={<Accueil />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/conseils" element={<Conseils />} />
        <Route path="/relookings" element={<Relookings />} />
        <Route path="/avis" element={<Avis />} />
        <Route path="/rdv" element={<Rdv />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
