import './style.css'
import {TabsContext, TabsContextProvider} from "./TabsContext";
import React, {useEffect} from "react";
import {Tab} from "./tab/Tab";
import {TabContent} from "./tabcontent/TabContent";


interface TabsProps {
  children?: React.ReactNode[]
}

export const Tabs = ({children} : TabsProps) => {
  const childrenArray = React.Children.toArray(children);

  return (
      <TabsContextProvider>
        <div className="tabs-container">
          <div className="tabs">
            {childrenArray.map((child, index) => {
              if (React.isValidElement(child) && child.type === Tab) {
                return (child)
              }
            })}
            <div className="divider"></div>
          </div>

          <div className="tabs-content">
            {childrenArray.map((child, index) => {
              if (React.isValidElement(child) && child.type === TabContent) {
                return (child)
              }
            })}
          </div>
        </div>
      </TabsContextProvider>
  )
}