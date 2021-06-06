import PropTypes from "prop-types";
import React from "react";
import { setActiveSort_twelve } from "../../helpers/product_twelve";

const ShopOwner = ({ getSortParams }) => {
  return (
    <div className="sidebar-widget  mt-50">
      <h4 className="pro-sidebar-title">Who you are looking for </h4>  
        <div className="sidebar-widget-list mt-30">

          <ul>
            <li>
              <div className="owner_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
                      // getSortParams("category", "");
                      setActiveSort_twelve(e,"owner");
                    }}
                  >
                    <span className="checkmark" />Show All 
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="owner_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
             
                      setActiveSort_twelve(e,"owner");
                    }}
                  >
                    <span className="checkmark" />Manufacturer
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="owner_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
             
                      setActiveSort_twelve(e,"owner");
                    }}
                  >
                    <span className="checkmark" />Brand Owner
                  </button>
                </div>
              </div>
            </li>
        
          </ul>   
      </div>
    
    </div>
  );
};

ShopOwner.propTypes = {

  getSortParams: PropTypes.func
};

export default ShopOwner;
