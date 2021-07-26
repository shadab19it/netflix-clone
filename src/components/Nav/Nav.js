import React, { useEffect, useState } from "react";
import "./Nav.scss";
import NetflixIcon from "./netflix.png";

const Nav = () => {
  const [scroll, handleScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        handleScroll(true);
      } else {
        handleScroll(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  console.log(scroll);
  return (
    <div className={`nav_container ${scroll && "nav_black"}`}>
      <img src={NetflixIcon} alt='' className='brand_logo' />
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe1_6-PtcF48iM3PkReAZlBpbSaLDhKNyisg&usqp=CAU'
        alt=''
        className='user_pic'
      />
    </div>
  );
};

export default Nav;
