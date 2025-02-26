// Imports
import { createContext, useState } from "react";

// createContext
export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projectId, setProjectId] = useState(null);

  return (
    <ProjectContext.Provider value={{ projectId, setProjectId }}>
      {children}
    </ProjectContext.Provider>
  );
};
