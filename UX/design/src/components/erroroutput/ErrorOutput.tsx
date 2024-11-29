import {Error} from "./error/Error";
import './style.css'

interface ErrorOutputProps {
  className? : string,
}

export const ErrorOutput = ({className}: ErrorOutputProps ) => {

  return (
      <section id="error-output" className={"flex justify-center " + className}>
        <div className="errors w-11/12 flex flex-col my-4 gap-4">
          <Error></Error>
          <Error></Error>
          <Error></Error>

        </div>
      </section>
  )
}