import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {

  const handleButtonClick = () => {

  };

  const handleListButtonClick = () => {

  }

  return (
    <><Header handleButtonClick={handleButtonClick} />
    <Main handleListButtonClick={handleListButtonClick}/></>
  )
};

export default App;