import './style.css'

// @ts-ignore
import img from '../../assets/images/list_item_img.png'

interface ListItemProps {
  onClick?: () => void
}


export const ListItem = (props : ListItemProps) => {

  return (
      <div className="list-item-container" onClick={props.onClick}>
        <img className="list-item-image" src={img} alt=""/>

        <div className="list-item-content">
          <h3 className="list-item-title">Topic</h3>
          <p className="list-item-subtitle">Dico harum curabitur ad rutrum eruditi sit augue doming bibendum</p>
        </div>
      </div>
  )
}