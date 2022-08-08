import Navbar from "../component/Navbar";
import styles from "../css/Navbar.module.css";
import SubNavbar from "../component/subNavbar";
import $, { nodeName } from "jquery";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import logoImg from "../imgs/logo.png";
import Menu from "../component/Menu";
import Slick from "../component/Slick";
import "swiper/css/bundle";
import "../css/Slick.css";
function Tour() {
  $(document).ready(function () {
    var Navbar = $("#Navbar");
    var testOffset = $("#Navbar").offset();
    $("#windows").scroll(function () {
      if ($('#windows').scrollTop() >= testOffset.top) {
        Navbar.css({
          position: "sticky",
          top:0,
          width: "100%",
        });
      }
    });
  });
  return (
    <>
    <div id="windows" className={styles.test}>
      <div>
        <header>
          <div  className={styles.navbar_bg}>
            <div className={styles.navbar}>
              <img src={logoImg} className={styles.logo} border="0" />
              <input
                className={styles.inputbar}
                placeholder="Simple is best of best"
              />
              <button className={styles.buttonBar}>
                <span>🍳</span>
              </button>
            </div>
            <div className={styles.navbar_list}>
              <Link to="/">처음으로</Link>
            </div>
          </div>
        </header>
      </div>
      <div id="Navbar">
      <Menu />
      </div>
      <Slick />
    </div>
    </>
  );
}

export default Tour;