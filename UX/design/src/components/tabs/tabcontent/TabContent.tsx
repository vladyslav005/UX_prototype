import './style.css'
import {useContext} from "react";
import {TabsContext} from "../TabsContext";
import {log} from "node:util";

interface TabContentProps {
  children?: React.ReactNode
  label: string
}

export const TabContent = ({children, label}: TabContentProps) => {
  const {activeTabLabel, setActiveTabLabel} = useContext(TabsContext)


  return (
      <div className={"tab-content " + (label === activeTabLabel ? "tab-content-active" : "")}>

        {children}

      </div>
  )
}