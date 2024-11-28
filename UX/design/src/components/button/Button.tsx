import {Simulate} from "react-dom/test-utils";
import './style.css'
import change = Simulate.change;
import {MyRipples} from "../tabs/tab/Tab";


interface ButtonProps {
  children?: React.ReactNode
  className?: string
}

export const Button = ({children, className} : ButtonProps) => {


  return (
      <div className={className}>
        <MyRipples during={1000} color={'rgba(29, 27, 32, 0.08)'} className={"button"}>
            {children}
        </MyRipples>
      </div>

  )
}