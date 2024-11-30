import './style.css'

interface ToolTipProps {
  text: string,
  className?: string,
  show: boolean,
}

export const ToolTip = ({text, className, show}: ToolTipProps) => {

  return (
      <>
        <div className={"tooltip " + (show ? "appear" : "dissolve") + " " + className}>
          <p>{text}</p>
        </div>
      </>
  )
}