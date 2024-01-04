import { MouseEventHandler } from "react";
import "./Button.scss";

type ButtonProps = {
    name: string;
    handleButtonClick: MouseEventHandler<HTMLButtonElement>
}

const Button = ({name, handleButtonClick}: ButtonProps) => {
    return (
        <button className="header__button" onClick={handleButtonClick}>{name}</button>
    )
};

export default Button;