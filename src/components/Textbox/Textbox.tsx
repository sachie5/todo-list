import { MouseEventHandler } from "react";
import "./Textbox.scss";

type TextboxProps = {
    name: string;
    placeholder: string;
    handleListButtonClick: MouseEventHandler<HTMLButtonElement>;
}

const Textbox = ({ name, placeholder, handleListButtonClick }: TextboxProps) => {
    return (
        <>
        <input className="item__input" type="text" name={name} placeholder={placeholder}></input>
        <button className="item__button" onClick={handleListButtonClick}>+</button>
        </>
    )
};

export default Textbox;