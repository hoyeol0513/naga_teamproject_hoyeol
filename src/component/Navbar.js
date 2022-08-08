import { useState } from "react";
import styles from "../css/Navbar.module.css";
import React from 'react';
import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
import Login from "../component/login";
import logoImg from "../imgs/logo.png";


function navbar(){
  return(
    <div>
    <header>
      <div className={styles.navbar_bg}>
   <div className={styles.navbar}>
   <img src={logoImg} className={styles.logo} border='0' />
   <input className={styles.inputbar} />
   <button className={styles.buttonBar}>
    <span>🍳</span>
   </button>
  </div>
  <div  className={styles.navbar_list}>
  <Link to="/">
    처음으로
  </Link>
  </div>
  </div>
  </header>
  </div>);
}

export default navbar;