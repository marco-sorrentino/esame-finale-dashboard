import "./sidebar.scss";
import { Container } from "react-bootstrap";
import logo from "../../assets/images/LOGO.png";
import { AiFillHome } from "react-icons/ai";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { BsFillCloudSunFill } from "react-icons/bs";

export const Sidebar = () => {
  return (
    <Container fluid className="p-0 bg-sidebar">
      <Container className="d-flex align-items-center py-4 px-5">
        <img src={logo} alt="" />
        <h4 className="ms-3 mb-0">DashBoard</h4>
      </Container>
      <Container className="d-flex flex-column px-5">
        <div className="first-menu p-3 ">
          <p className="mb-0 main-menu">Main menu</p>
        </div>
        <div className="bg-menu first-menu p-3 ">
          <AiFillHome className="text-black iconSideBar" />
          <p className="text-sidebar ms-2 mb-0">Home</p>
        </div>
        <div className="bg-menu p-3">
          <BsFillCalendarRangeFill className="text-info iconSideBar" />
          <p className="text-sidebar ms-2">Calendar</p>
        </div>
        <div className="bg-menu p-3">
          <FaTasks className="text-secondary iconSideBar" />
          <p className="text-sidebar ms-2 ">Tasks</p>
        </div>
        <div className="bg-menu p-3">
          <FaCashRegister className="text-success iconSideBar" />
          <p className="text-sidebar ms-2">Expanse Tracker</p>
        </div>
        <div className="bg-menu p-3">
          <AiFillDollarCircle className="text-danger iconSideBar" />
          <p className="text-sidebar ms-2">Finance</p>
        </div>
        <div className="bg-menu p-3">
          <BiNews className="text-primary iconSideBar" />
          <p className="text-sidebar ms-2">News</p>
        </div>
        <div className="bg-menu last-menu p-3">
          <BsFillCloudSunFill className="text-warning iconSideBar" />
          <p className="text-sidebar ms-2">Weather</p>
        </div>
      </Container>
    </Container>
  );
};
