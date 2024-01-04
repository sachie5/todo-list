import { ChangeEventHandler, MouseEventHandler } from "react";
import "./List.scss";
import ListItem from "../ListItem/ListItem";

type ListProps = { 
    items: string[];
    style: object;
    handleListItemButtonClick: MouseEventHandler<HTMLButtonElement>;
    handleCheckChange: ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
};

const List = ({items, style, handleListItemButtonClick, handleCheckChange, checked}: ListProps) => {

    if(!items || items.length === 0) return <p>Nothing to see here yet...Add a task in the field above!</p>

    return (
        <div className="list">
           {items.map(item => 
           <ListItem  key={item} item={item} style={style} checked={checked} handleCheckChange={handleCheckChange} handleListItemButtonClick={handleListItemButtonClick}/>)}
        </div>
    )
};

export default List;