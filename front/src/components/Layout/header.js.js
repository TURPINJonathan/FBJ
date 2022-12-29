import React from "react";

const Header = () => {
  return (
    <header>
      <button className="FBJ_logo">
        LOGO
      </button>
      <nav>
        <ul className="menu">
          <li className="mainMenu">Nos domaines
            <ul className="subMenu">
              <li className="subMenu_item">Construction</li>
              <li className="subMenu_item">Carrelage</li>
              <li className="subMenu_item">Joint de pierre</li>
              <li className="subMenu_item">Finition</li>
            </ul>
          </li>
          <li className="mainMenu">A propos</li>
          <li className="mainMenu">Nos réalisations</li>
          <li className="mainMenu">Contactez-nous</li>
        </ul>
      </nav>
    </header >
  );
}
export default Header;