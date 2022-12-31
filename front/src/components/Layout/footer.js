import React from "react";
import Moment from "moment";

const Footer = () => {
  const currentDate = Moment().format('MMMM YYYY');
  return (
    <footer>
      <p>
        <span>FBJ - Maçonnerie & Carrelage</span>
        <span>&copy; Copyright - All rights reserved - {currentDate}</span>
      </p>
    </footer >
  );
}
export default Footer;