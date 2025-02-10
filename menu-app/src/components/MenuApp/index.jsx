import React from "react";
import Menu from "../Menu"; //menu component

//now menu ap component with arrow function
//but loops through data array inside "items" thanks to map
const MenuApp = (items) => {
  return (
    <div className="App">
      {items.data.map((menu) => (
        <Menu
          key={menu.menuName}
          menuName={menu.menuName}
          menuItems={menu.menuItems}
        />
      ))}
    </div>
  );
};

//same export for later use
export default MenuApp;
