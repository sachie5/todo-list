import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ChangeEvent, MouseEvent, useState } from "react";

const App = () => { 

  const [entry, setEntry] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const [checked, setChecked] = useState<boolean>(false);
  const [style, setStyle] = useState<{}>({})


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
     let currentItemName: string = "";
    const itemName = event.currentTarget.previousSibling;
    if(itemName && itemName.textContent !== null){
      currentItemName = itemName.textContent;
    }
       setItems(items.filter(item => {
        if(item !== currentItemName){
          return item
        }
      })) 
  };

  const handleCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
    let currentItem: string = "";
    const currentEntry = event.currentTarget.nextSibling;
    if(currentEntry && currentEntry.textContent !== null){
      currentItem = currentEntry.textContent;
    }

     const newChecked = !checked;
    setChecked(newChecked);

    if(newChecked){
      setStyle({"textDecoration": "line-through"})
    } else {
      setStyle({})
    }
  }

  return (
    <div className="app">
    <Header handleButtonClick={handleButtonClick} />
    <Main items={items} entry={entry} handleListButtonClick={handleListButtonClick} handleChange={handleChange} handleListItemButtonClick={handleListItemButtonClick} handleCheckChange={handleCheckChange} checked={checked} style={style}/>
    </div>
  )
};

export default App;