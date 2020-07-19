import React from "react";
import { FaPaperclip, FaBell, FaComment, FaCheck } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="all-projects">
          <a href="#">
            <span>
              <AiOutlineArrowLeft size={20} />
            </span>
            <span>All Projects</span>
          </a>
        </div>
        <div className="heading">
          <h1>
            Supermassive black hole <span></span>
          </h1>
        </div>
        <div className="header-links">
          <ul>
            <li>
              <div className="search">
                <img
                  src="http://localhost:4000/file/search.jpg" alt="search"
                />
              </div>
            </li>
            <li>
              <div className="notification">
                <span className="count">3</span>
                <img
                  src="http://localhost:4000/file/bell-icon.png" alt="bell icon"
                />
              </div>
            </li>
            <li>
              <div className="user-image">
                <img
                  src="http://localhost:4000/file/user.jpg" alt="user image"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
