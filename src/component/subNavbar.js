import styles from "../css/Navbar.module.css";
import logo from "../imgs/logo.png";

function subNavbar(){
  return(
    <div>
      <div className={styles.wrapper}>
        <div className={styles.searchbarLogo}><img src = {logo} className = {styles.logoImage} alt="logo" /></div>
        <div className={styles.searchbarInput}>
          <input type = "text" className={styles.textInput} placeholder = "호열님 멍청이"/></div>
          <button className={styles.searchbarButton}>
            <span>🍳</span>
          </button>
      </div>
    </div>
  );
}

export default subNavbar;

