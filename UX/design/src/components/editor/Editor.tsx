import './style.css'
// @ts-ignore
import editorBasicImg from '../../assets/images/editor_basic.png'

// @ts-ignore
import editorInteractiveImg from '../../assets/images/editor_interactive.png'

import {Button} from "../button/Button";
import {useContext} from "react";
import {CommonContext} from "../../CommonContext";

export const Editor= () => {
  const commonContext = useContext(CommonContext);

  return (
      <section id={"editor"}>
          <img style={{
            width:'100%',
          }} src={commonContext.interactiveEditor ? editorInteractiveImg : editorBasicImg} alt=""/>

        <Button className="build-tree-btn" onClick={() => {commonContext.setIsTreeBuilt(true)}}>
          Build tree
        </Button>


      </section>
  )
}