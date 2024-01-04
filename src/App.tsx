import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ChangeEvent, MouseEvent, useState } from "react";

const App = () => { 

  const [entry, setEntry] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const [checked, setChecked] = useState<boolean>(false);


  const handleButtonClick = (event:MouseEvent<HTMLButtonElement>) => {
    setItems([])
  };

  const handleListButtonClick = () => {
    const newItem = entry;
    setItems([...items, newItem])
    setEntry("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newItem = event.currentTarget.value;
    setEntry(newItem);
  }

  const handleListItemButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
     const itemName = event.currentTarget.previousSibling?.textContent;
       setItems(items.filter(item => {
        if(item !== itemName){
          return item
        }
      })) 
  };

  const handleCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newChecked = !checked;
    setChecked(newChecked);

    if(newChecked){

    }
  }

  return (
    <div className="app">
    <Header handleButtonClick={handleButtonClick} />
    <Main items={items} entry={entry} handleListButtonClick={handleListButtonClick} handleChange={handleChange} handleListItemButtonClick={handleListItemButtonClick} handleCheckChange={handleCheckChange} checked={checked}/>
    </div>
  )
};

export default App;