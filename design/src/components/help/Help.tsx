import {Search} from "../shared/search/Search";
import {ListItem} from "../shared/lIstitem/ListItem";
import './style.css'
import {useState} from "react";
import {Modal} from "../shared/modal/Modal";
import {Card} from "../shared/card/Card";
import {CardTitle} from "../shared/card/CardTitle";
import {CardSubtitle} from "../shared/card/CardSubtitle";
// @ts-ignore
import img from '../../assets/images/img.png'
import {CardImage} from "../shared/card/CardImage";
import {CardContent} from "../shared/card/CardContent";


export const Help = () => {

  const [isModelOpened, setIsModelOpened] = useState(false)

  const handleListItemCLick = () => {
    setIsModelOpened(true)
  }

  const handleCloseModal = () => {
    setIsModelOpened(false)
  }


  return (
      <section id="help" className="flex flex-col items-center overflow-hidden  w-full">
        <div className="flex flex-col items-center justify-center w-11/12">
          <Search></Search>
        </div>
        <div id="help-list" className="w-11/12 flex flex-col gap-5 my-4 overflow-x-auto">
          <ListItem onClick={handleListItemCLick}></ListItem>
          <ListItem onClick={handleListItemCLick}></ListItem>
          <ListItem onClick={handleListItemCLick}></ListItem>
          <ListItem onClick={handleListItemCLick}></ListItem>

        </div>

        <Modal isOpen={isModelOpened} onClose={handleCloseModal}>
          <Card>
            <CardTitle title={"Topic"}/>
            <CardSubtitle subtitle={"Subtitle"}/>
            <CardImage src={img} alt={"Related image"}/>
            <CardTitle title={"Title"}/>
            <CardContent>
              altera appareat expetenda quam nam veniam conclusionemque scripta convenire natoque sea delicata platonem
              partiendo discere utamur integer delectus epicuri ac no eu aliquet porta hinc veritus dictum instructior
              mediocrem evertitur veritus quidam persius sale autem definiebas percipit cetero mattis volumus
              accommodare dictumst recteque eloquentiam ac
            </CardContent>
          </Card>
        </Modal>
      </section>
  )
}