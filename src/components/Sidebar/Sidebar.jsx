import "./sidebar.scss";
import { Container } from "react-bootstrap";
import logo from "../../assets/images/LOGO.svg";
import { AiFillHome } from "react-icons/ai";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { BsFillCloudSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <Container fluid className="p-0 bg-sidebar d-none d-lg-block">
      <Container className="d-flex align-items-center py-4 px-5">
        <img src={logo} alt="" className="d-none d-lg-block" />
        <h4 className="ms-3 mb-0 d-none d-lg-block">DashBoard</h4>
      </Container>
      <Container className="d-flex flex-column px-1 px-lg-5">
        <div className="first-menu p-3 ">
          <p className="mb-0 main-menu">Main menu</p>
        </div>
        <div className="bg-menu first-menu p-3 ">
          <AiFillHome className=" iconSideBar" />
          <p className="text-sidebar ms-2 mb-0">Home</p>
        </div>
        <div className="bg-menu p-3">
          <BsFillCalendarRangeFill className=" iconSideBar" />
          <Link className="noDecoration" to={"/calendar"}>
            <p className="text-sidebar ms-2">Calendar</p>
          </Link>
        </div>
        <div className="bg-menu p-3">
          <FaTasks className=" iconSideBar" />
          <Link className="noDecoration" to={"/tasks"}>
            <p className="text-sidebar ms-2 ">Tasks</p>
          </Link>
        </div>
        <div className="bg-menu p-3">
          <FaCashRegister className=" iconSideBar" />
          <Link className="noDecoration" to={"/expanse-tracker"}>
            <p className="text-sidebar ms-2">Expanse Tracker</p>
          </Link>
        </div>
        <div className="bg-menu p-3">
          <AiFillDollarCircle className="iconSideBar" />
          <p className="text-sidebar ms-2">Finance</p>
        </div>
        <div className="bg-menu p-3">
          <BiNews className=" iconSideBar" />
          <p className="text-sidebar ms-2">News</p>
        </div>
        <div className="bg-menu last-menu p-3">
          <BsFillCloudSunFill className=" iconSideBar" />
          <p className="text-sidebar ms-2">Weather</p>
        </div>
      </Container>
    </Container>
  );
};
