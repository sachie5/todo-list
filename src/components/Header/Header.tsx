import "./Header.scss";
import Button from "../Button/Button";
import { MouseEventHandler } from "react";

type HeaderProps = {
    handleButtonClick: MouseEventHandler<HTMLButtonElement>;
}


const Header = ({ handleButtonClick }: HeaderProps) => {
   return (
    <>
    <h1>My Todos</h1>
    <Button name="reset" handleButtonClick={handleButtonClick}/>
    </>
   )
};

export default Header;