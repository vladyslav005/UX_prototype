import './style.css'
import {MyRipples} from "../tabs/tab/Tab";


interface ButtonProps {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

export const Button = ({children, className, onClick}: ButtonProps) => {


  return (
      <MyRipples during={1000} color={'rgba(29, 27, 32, 0.08)'} className={"button " + className} onClick={onClick}>
        <button role="button" className="flex flex-row justify-between gap-1">
          {children}
        </button>
      </MyRipples>

  )
}