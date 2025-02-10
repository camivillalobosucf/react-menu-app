import React from "react"; //import react for using jsx

//MenuItem component using arrow, prop as parameter to display the menu items dynamicaly
const MenuItem = (items) => {
  return (
    //each will have a unique id based on itemID
    //then it starts, price, item title, then description, annd then button, which ffor now is useless
    <div className="menu-item" id={"menu-item-" + items.itemId}>
      <span>${items.itemPrice}</span>
      <h2>{items.itemName}</h2>
      <p>{items.itemDescription}</p>
      <button>Add to Cart</button>
    </div>
  );
};


//so it can be used later
export default MenuItem;
