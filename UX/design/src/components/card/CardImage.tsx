import './style.css'

interface CardImageProps {
  src: string;
  alt: string;
}

export const CardImage = ({src, alt}: CardImageProps) => {
  return (
      <div className={"card-image"}>
        <img src={src} alt={alt} />
      </div>
  )
}