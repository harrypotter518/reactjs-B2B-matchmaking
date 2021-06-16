import PropTypes from "prop-types";
import React from "react";
import { setActiveSort_twelve } from "../../helpers/product_twelve";

const ShopImportAmount = ({ getSortParams }) => {
  return (
    <div className="sidebar-widget mt-10 mb-10">
      <h4 className="pro-sidebar-title">Import Amounts </h4>  
        <div className="sidebar-widget-list mt-10">
          <ul>
            <li>
              <div className="importamount_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
                      // getSortParams("category", "");
                      setActiveSort_twelve(e,"importamount");
                    }}
                  >
                    <span className="checkmark" />Show All 
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="importamount_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
             
                      setActiveSort_twelve(e,"importamount");
                    }}
                  >
                    <span className="checkmark" />0-5000 units/ month
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="importamount_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
             
                      setActiveSort_twelve(e,"importamount");
                    }}
                  >
                    <span className="checkmark" />5000-10000 units/ month
                  </button>
                </div>
              </div>
            </li>
            
            <li>
              <div className="importamount_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
             
                      setActiveSort_twelve(e,"importamount");
                    }}
                  >
                    <span className="checkmark" />10000-100000 units/ month
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="importamount_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
             
                      setActiveSort_twelve(e,"importamount");
                    }}
                  >
                    <span className="checkmark" />100000-500000 units/ month
                  </button>
                </div>
              </div>
            </li>

          </ul>   
      </div>
    
    </div>
  );
};

ShopImportAmount.propTypes = {

  getSortParams: PropTypes.func
};

export default ShopImportAmount;
