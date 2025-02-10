import React from "react";
import MenuItem from "../MenuItem"; //menu item component


//component w/ arrow function as in the other files
// this will display a menu section Dinner or dessert, then lists the items using the other component menuItem
// again thanks to map it will loop through each item, does NOT assume any array length
const Menu = (items) => {
  return (
    <div className="menu">
      <h1>{/*dynamic menu type*/items.menuName} Menu</h1>
      <div className="menuItems">
        {items.menuItems.map((item) => (
          <MenuItem
            key={item.itemId}
            itemId={item.itemId}
            itemPrice={item.itemPrice}
            itemName={item.itemName}
            itemDescription={item.itemDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
