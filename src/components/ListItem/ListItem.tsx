import { ChangeEventHandler, MouseEventHandler } from "react";
import "./ListItem.scss";

type ListItemProps = {
    item: string;
    style: object;
    checked: boolean;
    handleListItemButtonClick: MouseEventHandler<HTMLButtonElement>;
    handleCheckChange: ChangeEventHandler<HTMLInputElement>;
};

const ListItem = ({item, style, handleListItemButtonClick, handleCheckChange, checked}: ListItemProps) => {
    return (
        <div className="list__item">
            <input className="list__input" type="checkbox" name={item} value={item} onChange={handleCheckChange} checked={checked}></input>
            <p className="list__description" id={item} style={style}>{item}</p>
            <button className="list__button" onClick={handleListItemButtonClick}>x</button>
        </div>
    )
};

export default ListItem;