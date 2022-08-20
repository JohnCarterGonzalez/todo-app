const Item = (props) => {
  const itemClasses = [];
  if (props.item.complete) {
    itemClasses.push("line-through");
  }
  return (
  <div> 
    {/*connect the state of the check with the todoItem*/}
    <input onChange={(e) => { props.handleBooleanComplete(props.i);}} 
        checked={props.item.complete} type="checkbox"/>
    <span className={itemClasses.join(" ")}>{props.item.text}</span>
    <button style={{ marginLeft: "10px" }} className="delete-button" 
            onClick={() => props.removeItem(props.i)}>Delete
    </button>
  </div>
  );
}
 
export default Item
