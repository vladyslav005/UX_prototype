import {Error} from "./error/Error";
import './style.css'

export const ErrorOutput = () => {

  return (
      <section id="error-output" className="flex justify-center">
        <div className="errors w-11/12 flex flex-col my-4 gap-4">
          <Error></Error>
          <Error></Error>
        </div>
      </section>
  )
}