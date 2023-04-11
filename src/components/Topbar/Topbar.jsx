import { Container } from "react-bootstrap";
import "./topbar.scss";
import portrait from "../../assets/images/portrait copia.JPG";
import { AiFillHeart } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { AiFillBell } from "react-icons/ai";
import { useEffect, useState } from "react";

export const Topbar = () => {
  const [theme, setTheme] = useState(false);

  const handleChange = () => {
    setTheme(!theme);
    console.log("ciao");
  };

  useEffect(() => {
    if (theme === true) {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }
  });

  return (
    <Container
      fluid
      className="bgAllDiv profileBar mt-2 d-flex align-items-center justify-content-between px-3"
    >
      <div className="d-flex align-items-center ">
        <img className="portrait" src={portrait} alt="" />
        <p className="ms-2">Marco Sorrentino</p>
      </div>
      <div className="d-flex align-items-center">
        <AiFillHeart className="text-danger iconTopBar" />
        <AiFillBell className="text-warning iconTopBar ms-2" />
        <AiFillSetting onClick={handleChange} className="iconTopBar ms-2" />
      </div>
    </Container>
  );
};
