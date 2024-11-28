import './style.css'
// @ts-ignore
import editorBasicImg from '../../assets/images/editor_basic.png'
import {Button} from "../button/Button";

export const Editor= () => {
  return (
      <section id={"editor"}>
        <img style={{
          width:'100%',
        }} src={editorBasicImg} alt=""/>


        <Button className="build-tree-btn">
          Build tree
        </Button>


      </section>
  )
}