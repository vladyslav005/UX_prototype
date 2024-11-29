import './style.css'
import {useContext} from "react";
import {ModalContext} from "./ModalContext";

// @ts-ignore
import crossIcon from "../../assets/icons/cross.png";
import {MyRipples} from "../tabs/tab/Tab";

interface ModalProps {
  children?: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
  if (!props.isOpen) return null;

  return (
    <div className="modal-state-layer" onClick={props.onClose}>
      <div className={"modal " + props.className} onClick={(e) => {e.stopPropagation();}}>
        {props.children}
        <div className={"close-button"} >
          <MyRipples during={1000} color={'rgba(29, 27, 32, 0.08)'} onClick={props.onClose}>
            <img src={crossIcon} alt="Cross icon" />
          </MyRipples>
        </div>
      </div>

    </div>
  )
}
