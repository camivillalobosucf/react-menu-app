import React from "react"; //import react for using jsx

//MenuItem component using arrow, prop as parameter to display the menu props dynamicaly
const MenuItem = (props) => {
  return (
    //each will have a unique id based on itemID
    //then it starts, price, item title, then description, annd then button, which ffor now is useless
    <div className="menu-item" id={"menu-item-" + props.itemId}>
      <span>${props.itemPrice}</span>
      <h2>{props.itemName}</h2>
      <p>{props.itemDescription}</p>
      <button>Add to Cart</button>
    </div>
  );
};


//so it can be used later
export default MenuItem;
