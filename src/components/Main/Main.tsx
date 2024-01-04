import List from "../List/List";
import Textbox from "../Textbox/Textbox";
import "./Main.scss";
import { ChangeEventHandler, MouseEventHandler } from "react";

type MainProps = {
    entry: string;
    items: string[];
    handleListButtonClick: MouseEventHandler<HTMLButtonElement>;
    handleListItemButtonClick: MouseEventHandler<HTMLButtonElement>;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleCheckChange: ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
}

const Main = ({ entry, items, handleListButtonClick, handleListItemButtonClick, handleChange, handleCheckChange, checked }: MainProps) => {
    

    return (
    <>
    <Textbox name="todo-list" placeholder="Add your task here..." entry={entry} handleListButtonClick={handleListButtonClick} handleChange={handleChange} />
    <List items={items} handleListItemButtonClick={handleListItemButtonClick} handleCheckChange={handleCheckChange} checked={checked}/>
    </>
    )
};

export default Main;