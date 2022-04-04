import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SIdebarData } from "./SidebarData";
import { IconContext } from "react-icons/lib";
import "./css/Navbar.css";

import NavBarImage from "../images/adidasLogo.png";


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    };
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar">
                    <Link to="#" className="menu_bars">
                        <FaBars onClick={showSidebar} />
                    </Link>
                    <img
                        className="navbar_img"
                        src={NavBarImage}
                        alt="navbar_image"
                    />
                    <p className="p">Adidas shoe store</p>
                    <div className="login_block">
                        <a href="#/Cart">
                            Cart
                        </a> <a href="#/Lognin">Login</a>
                    </div>
                </div>

                <nav className={sidebar ? "nav_menu  active" : "nav_menu"}>
                    <ul onClick={showSidebar} className="nav_menu_items">
                        <li className="navbar_toggle">
                            <Link to="#" className="menu_bars">
                                <AiOutlineClose />
                            </Link>
                        </li>
                        {SIdebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span className="span">
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
