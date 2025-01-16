import React from "react";

const ViewsProject = ({ vistaActual, cambiarVista }) => {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <button
        onClick={() => cambiarVista("pc")}
        style={{
          marginRight: "10px",
          backgroundColor: vistaActual === "pc" ? "#007bff" : "#ccc",
          color: "white",
          padding: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Vista PC
      </button>
      <button
        onClick={() => cambiarVista("mobile")}
        style={{
          backgroundColor: vistaActual === "mobile" ? "#007bff" : "#ccc",
          color: "white",
          padding: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Vista Mobile
      </button>
    </nav>
  );
};

export default ViewsProject;
