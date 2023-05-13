import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Subtract from "../assets/Subtract.png";
import { RiHome4Line } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import { BsArrowRepeat, BsTags } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BiPackage } from "react-icons/bi";
import { GiChart } from "react-icons/gi";
import Ellipse21 from "../assets/Ellipse21.png";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <RiHome4Line />,
    },
    {
      path: "/orders",
      name: "Orders",
      icon: <CiShoppingCart />,
      arrowdown: <IoIosArrowDown />,
    },
    {
      path: "/subscriptions",
      name: "Subscriptions",
      icon: <BsArrowRepeat />,
    },
    {
      path: "/customers",
      name: "Customers",
      icon: <FiUsers />,
    },
    {
      name: "Products",
      icon: <BiPackage />,
      arrowup: <IoIosArrowDown />,

      subItems: [
        { path: "/products/allproducts", name: "All Products" },
        { path: "/products/categories", name: "Categories" },
        { path: "/products/attributes", name: "Attributes" },
        { path: "/products/giftcards", name: "Gift Cards" },
        { path: "/products/purchaselinks", name: "Purchase Links" },
      ],
    },
    {
      path: "/discount",
      name: "Discount",
      icon: <BsTags />,
      arrowdown: <IoIosArrowDown />,
    },
    {
      path: "/reporting",
      name: "Reporting",
      icon: <GiChart />,
    },
  ];

  return (
    <div className="flex p-1 md:p-5 relative">
      {isMobile ? (
        <div className="flex flex-row justify-between mb-10 w-full px-2 items-center absolute">
           <div
          className="toggle-bar w-10 flex items-center justify-center"
          onClick={toggleSidebar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className="user-header flex mt-3">
            <img src={Ellipse21} alt="User Icon" className="w-6 h-6" />
            <div className="mr-4">Oluwafemi </div>
        </div>

        </div>
       
      ) : (
        <div
          className={`sidebar bg-neutral-100 w-64 flex flex-col ${
            isOpen ? "open" : ""
          }`}
        >
        <div className="top-section flex items-center justify-between px-4 py-3 border-r-1 border-grey-300">
            <div className="logo flex items-center">
              <img src={Subtract} alt="Logo" className="w-8 h-8" />
              <h1 className="text-xl font-bold ml-2">Sellaz</h1>
            </div>
            {/* <div className="toggle-bar md:hidden" onClick={toggleSidebar}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </div> */}
          </div>
          <div className="menu-items flex-grow mt-5">
            <ul className="space-y-2">
              {menuItem.map((item, index) => (
                <li key={index}>
                  <NavLink
                    exact
                    to={item.path}
                    className="flex items-center px-4 py-2 rounded transition-colors duration-300 hover:bg-green-300 hover:text-black-500"
                    activeClassName="bg-green-500"
                  >
                    <div className="mr-2">{item.icon}</div>
                    <div className="flex justify-between gap-14">
                      {item.name}
                      <div className={`pt-1 ${
                      item.subItems && visible ? "rotate-180" : ""
                    }`} onClick={() => {
                        setVisible(prev => !prev);
                      }}>{item.arrowup} {item.arrowdown}</div>
                    </div>
                  </NavLink>

                  {/* {item.subItems && ( */}

                  {visible && (
                    <ul className="ml-8 space-y-2">
                      {item.subItems?.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <NavLink
                            exact
                            to={subItem.path}
                            className="flex items-center px-4 py-2 rounded transition-colors duration-300 hover:bg-green-300"
                            activeClassName="bg-green-500"
                          >
                            <div className="mr-2"></div>
                            <div>{subItem.name}</div>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                     )}
                  {/* )} */}
                 
                </li>
              ))}
            </ul>
          </div>
          <div className="user-footer flex items-center py-16 my-16 mb-0 pb-0">
            <img src={Ellipse21} alt="User Icon" className="w-6 h-6" />
            <div className="ml-2">Oluwafemi </div>
          </div>
        </div>
      )}

      <main className="flex-grow  p-4">{children}</main>
    </div>
  );
};

export default Sidebar;
