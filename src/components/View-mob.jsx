import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
const ViewMobile = () => {
  const { title } = useContext(ProjectContext);
  return (
    <div>
      <div className="view-mobile">
        {title === "Sistema de Inventario" && (
          <div className="img-content">
            <img src="./inventory/login_mob.PNG" alt="Login" />
            <img src="./inventory/home_mob.PNG" alt="Home" />
            <img src="./inventory/burgers_mob.PNG" alt="Burgers" />
            <img src="./inventory/crear_burger_mob.PNG" alt="Crear Burger" />
            <img src="./inventory/ingre_mob.PNG" alt="Ingredientes" />
            <img src="./inventory/gastos_mob.PNG" alt="Gastos" />
            <img
              src="./inventory/detalle-gastos_mob.PNG"
              alt="Detalle Gastos"
            />
            <img src="./inventory/historial_mob.PNG" alt="Historial" />
            <img src="./inventory/inventario_mob.PNG" alt="Inventario" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewMobile;
