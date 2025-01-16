import React, { useState } from "react";
import ViewMobile from "./View-mob";
import ViewPc from "./View-pc";
import ViewsProject from "./ViewsProject";
const DetailProject = () => {
  const [vista, setVista] = useState("pc");
  const handleRedirect = () => {
    window.open("https://inventory-pdf-react.vercel.app/", "_blank");
  };
  return (
    <div className="detail-projects">
      {/* Componente de navegación */}
      <ViewsProject vistaActual={vista} cambiarVista={setVista} />
      <div className="credential">
        <span>User: public</span>
        <br />
        <span>Pasword: 1234</span>
      </div>
      {/* Renderizado condicional */}
      <div>
        {vista === "pc" && <ViewPc />}
        {vista === "mobile" && <ViewMobile />}
      </div>
      <div>
        <button className="btn btn-success" onClick={handleRedirect}>
          Ver en web
        </button>
      </div>
    </div>
  );
};

export default DetailProject;
