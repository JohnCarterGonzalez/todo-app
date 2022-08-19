import React, { useState } from 'react';
import './App.css';

function App() {
  const [ newItem, setNewItem ] = useState("");
  const [items, setItems ] = useState("");

  const handleItemSubmit = (e) => {
    e.preventDefault();
    setItems([...items, newItem])
  };

  return (
    <div className="App">
      <form onSubmit={(e) => { handleItemSubmit(e); }}>
        <input onChange={(e) => { setNewItem(e.target.value); }}/>
        <div>
          <button>Add</button>
        </div>
      </form>
        
    </div>
  );
}

export default App;
