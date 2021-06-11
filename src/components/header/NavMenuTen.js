import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenuTen = ({ strings, menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul style={{ float:'left' }}>
          <li >
            <Link to={process.env.PUBLIC_URL + "/seller/StartSeller"}>
              <h6>{strings["seller"]}</h6>
            </Link>
          </li>
          
          <li>
            <Link to={process.env.PUBLIC_URL + "/buyer/StartBuyer"}>
              <h6>{strings["buyer"]}</h6>
            </Link>
          </li>          

          <li>
            <Link to={process.env.PUBLIC_URL + "/seller/LoginRegisterEleven"}>
              {strings["login"]}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/seller/LoginRegisterEleven"}>
              {strings["signup"]}
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
};

NavMenuTen.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default multilanguage(NavMenuTen);
