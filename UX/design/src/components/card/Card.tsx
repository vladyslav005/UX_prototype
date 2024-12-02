import './style.css'

interface CardProps {
  className?: string,
  children?: React.ReactNode,

}


export const Card = ({className, children} : CardProps) => {

  return (
      <div className={"card"}>
        {children}
      </div>
  )
}