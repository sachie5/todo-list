import List from "../List/List";
import Textbox from "../Textbox/Textbox";
import "./Main.scss";
import { MouseEventHandler } from "react";

type MainProps = {
    handleListButtonClick: MouseEventHandler<HTMLButtonElement>;
}

const Main = ({ handleListButtonClick }: MainProps) => {
    

    return (
    <>
    <Textbox name="todo-list" placeholder="Add your task here..." handleListButtonClick={handleListButtonClick} />
    <List />
    </>
    )
};

export default Main;