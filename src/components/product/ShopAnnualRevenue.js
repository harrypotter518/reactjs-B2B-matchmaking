import PropTypes from "prop-types";
import React from "react";
import { setActiveSort_twelve } from "../../helpers/product_twelve";

const ShopAnnualRevenue = ({ getSortParams }) => {
  return (
    <div className="sidebar-widget  mt-50">
      <h4 className="pro-sidebar-title">Annual Revenue </h4>  
        <div className="sidebar-widget-list mt-30">

          <ul>
            <li>
              <div className="annualrevenue_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
                      // getSortParams("category", "");
                      setActiveSort_twelve(e,"annualrevenue");
                    }}
                  >
                    <span className="checkmark" />Show All 
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="annualrevenue_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
             
                      setActiveSort_twelve(e,"annualrevenue");
                    }}
                  >
                    <span className="checkmark" />US$ 0-500,000
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="annualrevenue_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
             
                      setActiveSort_twelve(e,"annualrevenue");
                    }}
                  >
                    <span className="checkmark" />US$ 500,000-1M
                  </button>
                </div>
              </div>
            </li>
            
            <li>
              <div className="annualrevenue_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
             
                      setActiveSort_twelve(e,"annualrevenue");
                    }}
                  >
                    <span className="checkmark" />US$ 1M-5M
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="annualrevenue_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
             
                      setActiveSort_twelve(e,"annualrevenue");
                    }}
                  >
                    <span className="checkmark" />US$ 5M-10M
                  </button>
                </div>
              </div>
            </li>

          </ul>   
      </div>
    
    </div>
  );
};

ShopAnnualRevenue.propTypes = {

  getSortParams: PropTypes.func
};

export default ShopAnnualRevenue;




