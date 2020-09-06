import React, {useState, MouseEvent} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";

function App() {

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const titleValue = "Menu";
    function onChange() {
        setCollapsed(!collapsed);
    }
  return (
    <div className="App">
     <Accordion onChange={onChange}
                titleValue={titleValue}
                collapsed={collapsed}/>
    </div>
  );
}
export default App;
