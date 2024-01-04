import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ChangeEvent, MouseEvent, useState } from "react";

const App = () => { 

  const [entry, setEntry] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);


  const handleButtonClick = (event:MouseEvent<HTMLButtonElement>) => {
    setItems([])
  };

  const handleListButtonClick = () => {
    const newItem = entry;
    setItems([...items, newItem])
    setEntry("")
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newItem = event.currentTarget.value;
    console.log(newItem);
    setEntry(newItem);
  }

  const handleListItemButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    
  };

  return (
    <div className="app">
    <Header handleButtonClick={handleButtonClick} />
    <Main items={items} entry={entry} handleListButtonClick={handleListButtonClick} handleChange={handleChange} handleListItemButtonClick={handleListItemButtonClick}/>
    </div>
  )
};

export default App;