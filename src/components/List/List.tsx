import { MouseEventHandler } from "react";
import "./List.scss";

type ListProps = { 
    items: string[];
    handleListItemButtonClick: MouseEventHandler<HTMLButtonElement>;
    handleCheckChange: 
};

const List = ({items, handleListItemButtonClick}: ListProps) => {

    if(!items) return <p>Nothing to see here yet...Add a task in the field above!</p>

    return (
        <div className="list">
           {items.map(item => 
           <div className="list__item" key={item}>
                <input className="list__input" type="checkbox" name={item}  value={item} onChange={handleCheckChange}></input>
                <p className="list__description">{item}</p>
                <button className="list__button" onClick={handleListItemButtonClick}>x</button>
            </div>)}
        </div>
    )
};

export default List;