import List from "../List/List";
import Textbox from "../Textbox/Textbox";
import "./Main.scss";
import { ChangeEventHandler, MouseEventHandler } from "react";

type MainProps = {
    entry: string;
    items: string[];
    handleListButtonClick: MouseEventHandler<HTMLButtonElement>;
    handleChange: ChangeEventHandler<HTMLInputElement>;
}

const Main = ({ entry, items, handleListButtonClick, handleChange }: MainProps) => {
    

    return (
    <>
    <Textbox name="todo-list" placeholder="Add your task here..." entry={entry} handleListButtonClick={handleListButtonClick} handleChange={handleChange} />
    <List items={items}/>
    </>
    )
};

export default Main;