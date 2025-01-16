import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
const ViewPc = () => {
  const { title } = useContext(ProjectContext);
  return (
    <div className="view-pc">
      {title === "Sistema de Inventario" && (
        <div className="img-content">
          <img src="./inventory/login.PNG" alt="Login" />
          <img src="./inventory/home.PNG" alt="Home" />
          <img src="./inventory/burgers.PNG" alt="Burgers" />
          <img src="./inventory/crear_burger.PNG" alt="Crear Burger" />
          <img src="./inventory/ingre.PNG" alt="Ingredientes" />
          <img src="./inventory/gastos.PNG" alt="Gastos" />
          <img src="./inventory/detalle-gastos.PNG" alt="Detalle Gastos" />
          <img src="./inventory/historial.PNG" alt="Historial" />
        </div>
      )}
    </div>
  );
};

export default ViewPc;
