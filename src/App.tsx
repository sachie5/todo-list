import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ChangeEvent, MouseEvent, useState } from "react";

const App = () => { 

  const [entry, setEntry] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);


  const handleButtonClick = () => {

  };

  const handleListButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newItem = event.currentTarget.value;
    console.log(newItem);
    setEntry(newItem);
  }

  return (
    <><Header handleButtonClick={handleButtonClick} />
    <Main entry={entry} handleListButtonClick={handleListButtonClick} handleChange={handleChange}/></>
  )
};

export default App;