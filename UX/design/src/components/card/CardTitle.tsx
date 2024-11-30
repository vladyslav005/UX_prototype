import './style.css'

interface CardTitleProps {
  title: string
}

export const CardTitle = ({title}: CardTitleProps) => {
  return (
      <div className={"card-title"}>
        <h1>{title}</h1>
      </div>
  )
}