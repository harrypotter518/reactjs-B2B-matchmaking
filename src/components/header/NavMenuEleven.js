import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenuEleven = ({ strings, menuWhiteClass, sidebarMenu }) => {
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
            <Link to={process.env.PUBLIC_URL + "/seller/SellerDashboard"}>
              <h4>{strings["dashboard"]}</h4>
            </Link>
          </li>

             
          <li>
            <Link to={process.env.PUBLIC_URL + "/seller/MyProducts"}>
              <h4>{strings["my_products"]}</h4>
            </Link>
          </li>
          
          <li>
            <Link to={process.env.PUBLIC_URL + "/seller/AddProduct"}>
              <h4>{strings["add_product"]}</h4>
            </Link>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/seller/EditProduct"}>
              <h4>{strings["edit_product"]}</h4>
            </Link>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/seller/BuyerList"}>
              <h4>{strings["buyer_list"]}</h4>
            </Link>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/seller/Checkout"}>
              <h4>{strings["checkout"]}</h4>
            </Link>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/seller/EditAccount"}>
              <h4>{strings["edit_account"]}</h4>
            </Link>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/seller/StartSeller"}>
              <h4>{strings["logout"]}</h4>
            </Link>
          </li>
          
       
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {strings["contact_us"]}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenuEleven.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default multilanguage(NavMenuEleven);
