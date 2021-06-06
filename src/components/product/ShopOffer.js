import PropTypes from "prop-types";
import React from "react";
import { setActiveSort_twelve } from "../../helpers/product_twelve";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
const ShopOffer = ({ getSortParams }) => {
  return (
    <div className="sidebar-widget  mt-50">
      <h4 className="pro-sidebar-title">What you wish to be offered</h4>  
        <div className="sidebar-widget-list mt-30">

          <ul>
            <li>
              <div className="offer_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
                      // getSortParams("category", "");
                      setActiveSort_twelve(e,"offer");
                    }}
                  >
                    <span className="checkmark" />Show All 
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="offer_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
             
                      setActiveSort_twelve(e,"offer");
                    }}
                  >
                    <span className="checkmark" />Free samples
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="offer_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
             
                      setActiveSort_twelve(e,"offer");
                    }}
                  >
                    <span className="checkmark" />5%-10% marketing fee
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="offer_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
             
                      setActiveSort_twelve(e,"offer");
                    }}
                  >
                    <span className="checkmark" />10%-20% marketing fee
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="offer_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
             
                      setActiveSort_twelve(e,"offer");
                    }}
                  >
                    <span className="checkmark" />20%-30% marketing fee
                  </button>
                </div>
              </div>
            </li>
        
          </ul>   
      </div>
    
    </div>
  );
};

ShopOffer.propTypes = {

  getSortParams: PropTypes.func
};

export default ShopOffer;




