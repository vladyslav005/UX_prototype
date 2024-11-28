import {createContext, ReactNode, useState} from "react";


interface TabsContextType {
  activeTabLabel: string | undefined;
  setActiveTabLabel: (label: string) => void;

}

export const TabsContext = createContext<TabsContextType>({
  activeTabLabel: "",
  setActiveTabLabel: (label: string) => {}
})

interface TabsContextProviderProps {
  children: ReactNode;
}

export const TabsContextProvider = ({children}: TabsContextProviderProps) => {

  const [activeTabLabel, setActiveTabLabel] = useState('undefined');


  return (
      <TabsContext.Provider value={{activeTabLabel, setActiveTabLabel}}>
        {children}
      </TabsContext.Provider>
  )

}