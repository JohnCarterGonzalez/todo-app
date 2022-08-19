import React, { useState } from 'react';
import './App.css';

function App() {
  const [ newItem, setNewItem ] = useState("");
  const [items, setItems ] = useState([]);

  const handleItemSubmit = (e) => {
    e.preventDefault();
    //NOTE takes the items and sets them and adds them to the new Items array
    setItems([...items, newItem])
  };

  return (
    <div className="App">
      <form onSubmit={(e) => { handleItemSubmit(e); }}>
        <input onChange={(e) => { setNewItem(e.target.value); }} type="text" value={newItem}/>
        <div>
          <button>Add</button>
        </div>
      </form>
      {/*map the Items to a string and display them*/}
       {
      items.map((todo, i) => {
        return (
        <div> 
          <span>{todo}</span>
        </div>
        );
      })}
    </div>
  );
}

export default App;
