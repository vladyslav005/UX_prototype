import './style.css'
import {useContext, useEffect, useState} from "react";
import {TabsContext} from "../TabsContext";
import Ripples, {createRipples} from 'react-ripples'

export interface TabProps {
  label: string,
  defaultActive?: boolean,
  onClick?: () => void
}

export const MyRipples = createRipples({
  color: 'purple',
  during: 2200,

})

export const Tab = ({label, defaultActive, onClick}: TabProps) => {
  const {activeTabLabel, setActiveTabLabel} = useContext(TabsContext)

  useEffect(() => {
    if (activeTabLabel === undefined || defaultActive === true) {
      setActiveTabLabel(label)
    }
  }, [])

  const handleClick = () => {
    setActiveTabLabel(label)
    onClick && onClick()
  }

  return (
      <MyRipples during={1000} color={'rgba(29, 27, 32, 0.08)'} className={'tab ' +( activeTabLabel === label ? 'active-tab' : '') } onClick={handleClick}>
          <h1 className="title">{label}</h1>
      </MyRipples>
  )
}