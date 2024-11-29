import './style.css'


interface CardImageProps {
  children: React.ReactNode,
}

export const CardContent = ({children}: CardImageProps) => {

  return (
      <div className={"card-content"}>
        <p>{children}</p>
      </div>
  )
}



