import React from "react";
import { NavLink } from "react-router-dom";
import { MdWork } from "react-icons/md";
import { IoBookmarks } from "react-icons/io5";
import "./Jobs.css";

const Footer = () => {
  return (
    <footer>
      <ul>
        <NavLink to={"/"}>
          <li>
            <h5>Jobs</h5>
            <MdWork className="icon" />
          </li>
        </NavLink>
        <NavLink to={"/bookmarks"}>
          <li>
            <h5>Bookmarks</h5>
            <IoBookmarks className="icon" />
          </li>
        </NavLink>
      </ul>
    </footer>
  );
};

export default Footer;
