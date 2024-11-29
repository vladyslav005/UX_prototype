import './style.css'
import {useContext} from "react";
import {TabsContext} from "../TabsContext";
import {log} from "node:util";

interface TabContentProps {
  children?: React.ReactNode
  label: string
  className?: string
}

export const TabContent = ({children, label, className}: TabContentProps) => {
  const {activeTabLabel} = useContext(TabsContext)


  return (
      <div className={"tab-content " + className + ' ' + (label === activeTabLabel ? "tab-content-active" : "")}>

        {children}

      </div>
  )
}