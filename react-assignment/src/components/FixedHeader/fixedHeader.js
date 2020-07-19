import React from "react";
import { FaPaperclip, FaBell, FaComment, FaCheck } from "react-icons/fa";

function FixedHeader() {
  return (
    <div className="fixed-left-header">
      <div className="fixed-header-items">
        <div className="logo"></div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">
                <img src="http://localhost:4000/file/cam.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="http://localhost:4000/file/home.png" />
              </a>
            </li>
            <li className="active">
              <a href="#">
                <img src="http://localhost:4000/file/square.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="http://localhost:4000/file/user-icon.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="http://localhost:4000/file/calendar.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FixedHeader;
