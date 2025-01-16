import { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [title, setTitle] = useState("");

  return (
    <ProjectContext.Provider value={{ title, setTitle }}>
      {children}
    </ProjectContext.Provider>
  );
};
