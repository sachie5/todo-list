import "./Header.scss";
import Button from "../Button/Button";
import { MouseEventHandler } from "react";

type HeaderProps = {
    handleButtonClick: MouseEventHandler<HTMLButtonElement>;
}


const Header = ({ handleButtonClick }: HeaderProps) => {
   return (
    <>
    <header className="header">
    <h1 className="header__heading">My Todos</h1>
    <Button name="reset" handleButtonClick={handleButtonClick}/>
    </header>
    </>
   )
};

export default Header;