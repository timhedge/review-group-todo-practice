import React from 'react';

function GroceryItem(props) {
  return (
    <>
      <li>{props.oneItem}</li>
      <button value={props.indexValue} onClick={props.deleteItem}>Delete Item</button>
    </>
  )
}

export default GroceryItem;