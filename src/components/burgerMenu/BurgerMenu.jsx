import React from "react";
import styles from "./burger-menu-styles.module.scss";

export default function BurgerMenu({ burgerMenuActive, setBurgerMenuActive }) {
  return (
    <>
      <div className={styles.burger} onClick={() => setBurgerMenuActive(true)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {burgerMenuActive && (
        <div className={styles.menu}>
          <p
            className={styles.close}
            onClick={() => setBurgerMenuActive(false)}
          >
            X
          </p>
          <a href="#mission" onClick={() => setBurgerMenuActive(false)}>
            Mission
          </a>
          <a href="#month" onClick={() => setBurgerMenuActive(false)}>
            Featured Tea
          </a>
          <a href="#location" onClick={() => setBurgerMenuActive(false)}>
            Location
          </a>
        </div>
      )}
    </>
  );
}
