import React, {useState} from "react";


interface CommonContextType {
  interactiveEditor: boolean;
  setInteractiveEditor: (newInteractiveEditor: boolean) => void;
  isTreeBuilt: boolean;
  setIsTreeBuilt: (isTreeBuiltin: boolean) => void;
}


export const CommonContext = React.createContext<CommonContextType>({
  interactiveEditor: false,

  setInteractiveEditor: (newInteractiveEditor: boolean) => {
  },

  isTreeBuilt: false,

  setIsTreeBuilt: (isTreeBuiltin: boolean) => {
  }

});

interface CommonContextProps {
  children: React.ReactNode;
}


export const CommonContextProvider = ({children}: CommonContextProps) => {
  const [interactiveEditor, setInteractiveEditor] = useState(false)
  const [isTreeBuilt, setIsTreeBuilt] = useState(false)


  return (
      <CommonContext.Provider value={{interactiveEditor, setInteractiveEditor, isTreeBuilt, setIsTreeBuilt}}>
        {children}
      </CommonContext.Provider>
  )
};