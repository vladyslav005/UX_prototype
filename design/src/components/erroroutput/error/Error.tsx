import './style.css'

// @ts-ignore
import arrowRightIcon from '../../../assets/icons/arrow_right.png'
import {useState} from "react";


interface ErrorProps {
  message: string;
}


export const Error = () => {

  const [expand, setExpand] = useState(false)

  const handleClick = (): void => {
    setExpand(!expand)
  }

  return (
      <div className="error-container" onClick={handleClick}>
        <div className="w-11/12">
          <h3 className="error-title">Error</h3>
          <p className={expand ? "error-text-expanded" : "error-text"}>
            moderatius ullamcorper partiendo esse mollis oratio mus ornare suscipit noster mediocritatem tation tempor
            adipiscing enim ludus dicam nobis mediocritatem hinc
          </p>
        </div>
        <img src={arrowRightIcon} className={expand ? "rotated" : ""} alt="arrow-right"/>
      </div>
  )
}