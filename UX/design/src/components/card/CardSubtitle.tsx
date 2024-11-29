
import './style.css'



interface CardSubtitleProps {
  subtitle: string
}

export const CardSubtitle = ({subtitle} : CardSubtitleProps) => {
  return (
      <div className={"card-subtitle"}>
        <h1>{subtitle}</h1>
      </div>
  )
}