import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
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
            <h6>{strings["login"]}</h6>
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/seller/LoginRegisterEleven"}>
              <button className= "button_signup" style={{ padding:"12px" }}>{strings["signup"]}</button>
            </Link>
          </li>

      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object
};

export default multilanguage(MobileNavMenu);
