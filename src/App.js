import React, { useState } from 'react';
import './App.css';

function App() {
  const [ newItem, setNewItem ] = useState("");
  const [item, setItem ] = useState([]);

  const handleItemSubmit = (e) => {
    e.preventDefault();

    //if the new todo is empty return nothing
    if (newItem.length =='') return; 

    const todoItem = 
      {
      text: newItem,
      complete: false
    };
    //NOTE takes the items and sets them and adds them to the new Items array
    setItem([...item, todoItem]);
    setNewItem("");
  };


  const removeItem = (index) => {
    setItem(item.filter((_item, i) => i !== index));
  }

  const handleBooleanComplete = (index) => {
    const obj = {
          ...item[index]
        };
    obj.complete = !obj.complete;
    setItem([ ...item.slice(0, index), obj ].concat(item.slice(index + 1)));
  }

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
      item.map((item, i) => {
        return (
        <div key={i}> 
          {/*connect the state of the check with the todoItem*/}
          <input onChange={(e) => { handleBooleanComplete(i);}} 
              checked={item.complete} type="checkbox" readOnly/>
          <span>{item.text}</span>
          <button onClick={() => removeItem(i)}>Delete</button>
        </div>
        );
      })}
    </div>
  );
}

export default App;
