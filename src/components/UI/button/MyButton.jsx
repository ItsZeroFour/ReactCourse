import React from "react";
import classes from "./MyButton.module.css";

const MyButton = ({children, ...props}) => {
  return (
    // Добавляем имя класса с css
    <button {...props} className={classes.myBtn}>
      {/* Добавляем тектс внутрь кнопки */}
      {children}
    </button>
  );
};

export default MyButton;
