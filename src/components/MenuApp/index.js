import React from "react";
import Menu from "../Menu"; //menu component

//now menu ap component with arrow function
//but loops through data array inside "props" thanks to map
const MenuApp = (props) => {
  return (
    <div className="App">
      {props.data.map((menu) => (
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
