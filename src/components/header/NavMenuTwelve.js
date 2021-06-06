import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenuTwelve = ({ strings, menuWhiteClass, sidebarMenu }) => {
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
       
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {strings["food_beverages"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
           
                  {/* <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["home_group_one"]}
                    </Link>
                  </li> */}
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["accessories"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["baking&ingredients"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["beans"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["beef"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["bread"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["breakfast&snacks"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["broth&bouillon"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["butter"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["butter&alternative"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["cakes&desserts"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["candy"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["canned&soup"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["cheese"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["chicken"]}
                    </Link>
                  </li>                 
            
     
            </ul>
          </li>
          
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {strings["health_wellness"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">

                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["aromatherapy&relaxation"]}
                    </Link>
                  </li>
               
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["chocolate"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["cough_cold&flu"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["detox&cleanses"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["digestion&nausea_remedies"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["digestive_enzymes"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["drink_mixes"]}
                    </Link>
                  </li>                
         
            </ul>
          </li>
          
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {strings["beauty_cosmetics"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
      
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["home_group_one"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["bags&organizers"]}
                    </Link>
                  </li>
               
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["bar_soap"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["beard_oils&balms"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["body_lotions&creams"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["body_wash&shower_gel"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["bubble_bath&bath_salts"]}
                    </Link>
                  </li>   
            </ul>
          </li>
                    
          {/* <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              {" "}
              {strings["shop"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {strings["shop_layout"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {strings["shop_grid_standard"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-filter"}>
                      {strings["shop_grid_filter"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                      {strings["shop_grid_two_column"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}>
                      {strings["shop_grid_no_sidebar"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-full-width"}>
                      {strings["shop_grid_full_width"]}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-grid-right-sidebar"}
                    >
                      {strings["shop_grid_right_sidebar"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-list-standard"}>
                      {strings["shop_list_standard"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-list-full-width"}>
                      {strings["shop_list_full_width"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-list-two-column"}>
                      {strings["shop_list_two_column"]}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {strings["product_details"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {strings["product_tab_bottom"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-tab-left/1"}>
                      {strings["product_tab_left"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-tab-right/1"}>
                      {strings["product_tab_right"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-sticky/1"}>
                      {strings["product_sticky"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-slider/1"}>
                      {strings["product_slider"]}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/product-fixed-image/1"}
                    >
                      {strings["product_fixed_image"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/8"}>
                      {strings["product_simple"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {strings["product_variation"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/9"}>
                      {strings["product_affiliate"]}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-img">
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/banner/banner-12.png"
                        }
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li> */}
      
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

NavMenuTwelve.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default multilanguage(NavMenuTwelve);
