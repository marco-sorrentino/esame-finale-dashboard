import "./sidebar.scss";
import { Container } from "react-bootstrap";
import logo from "../../assets/images/LOGO.svg";
import { AiFillHome } from "react-icons/ai";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { BsPinMapFill } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { BsFillCloudSunFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="p-0 cursor bg-sidebar d-none d-lg-block">
      <Container
        onClick={() => {
          navigate("/");
        }}
        className="d-flex align-items-center py-4 px-5"
      >
        <img src={logo} alt="" className="d-none d-lg-block" />
        <h4 className="ms-3 mb-0 d-none d-lg-block">DashBoard</h4>
      </Container>
      <Container className="d-flex flex-column px-1 px-lg-5">
        <div className="first-menu p-3 ">
          <p className="mb-0 main-menu">Main menu</p>
        </div>
        <Link className="noDecoration" to={"/"}>
          <div tabindex="1" className="bg-menu first-menu p-3 ">
            <AiFillHome className=" iconSideBar" />
            <p className="text-sidebar ms-2 mb-0">Home</p>
          </div>
        </Link>
        <Link className="noDecoration" to={"/calendar"}>
          <div tabindex="2" className="bg-menu p-3">
            <BsFillCalendarRangeFill className=" iconSideBar" />
            <p className="text-sidebar ms-2">Calendar</p>
          </div>
        </Link>
        <Link className="noDecoration" to={"/tasks"}>
          <div tabindex="3" className="bg-menu p-3">
            <FaTasks className=" iconSideBar" />
            <p className="text-sidebar ms-2 ">Tasks</p>
          </div>
        </Link>
        <Link className="noDecoration" to={"/expanse-tracker"}>
          <div tabindex="4" className="bg-menu p-3">
            <FaCashRegister className=" iconSideBar" />
            <p className="text-sidebar ms-2">Expense Tracker</p>
          </div>
        </Link>
        <Link to={"/maps"}>
          <div tabindex="5" className="bg-menu p-3">
            <BsPinMapFill className="iconSideBar" />
            <p className="text-sidebar ms-2">Maps</p>
          </div>
        </Link>
        <Link to={"/heading-news"}>
          <div tabindex="6" className="bg-menu p-3">
            <BiNews className=" iconSideBar" />
            <p className="text-sidebar ms-2">News</p>
          </div>
        </Link>
        <Link to={"/weather"}>
          <div tabindex="7" className="bg-menu last-menu p-3">
            <BsFillCloudSunFill className=" iconSideBar" />
            <p className="text-sidebar ms-2">Weather</p>
          </div>
        </Link>
      </Container>
    </Container>
  );
};
