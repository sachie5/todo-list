import List from "../List/List";
import Textbox from "../Textbox/Textbox";
import "./Main.scss";
import { ChangeEventHandler, MouseEventHandler } from "react";

type MainProps = {
    entry: string;
    items: string[];
    style: object;
    handleListButtonClick: MouseEventHandler<HTMLButtonElement>;
    handleListItemButtonClick: MouseEventHandler<HTMLButtonElement>;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleCheckChange: ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
}

const Main = ({ entry, items, style, handleListButtonClick, handleListItemButtonClick, handleChange, handleCheckChange, checked }: MainProps) => {
    

    return (
    <>
    <Textbox name="todo-list" placeholder="Add your task here..." entry={entry} handleListButtonClick={handleListButtonClick} handleChange={handleChange} />
    <List items={items} handleListItemButtonClick={handleListItemButtonClick} handleCheckChange={handleCheckChange} checked={checked} style={style}/>
    </>
    )
};

export default Main;