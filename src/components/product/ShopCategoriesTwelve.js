import PropTypes from "prop-types";
import React from "react";
import { setActiveSort_twelve } from "../../helpers/product_twelve";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
const ShopCategoriesTwelve = ({ categories, getSortParams }) => {
  return (
    <div className="sidebar-widget  mt-50">
      <h4 className="pro-sidebar-title">Categories </h4>  
        <div className="sidebar-widget-list mt-30">
        {categories ? (
          <ul>
            <li>
              <div className="category_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
                      getSortParams("category", "");
                      setActiveSort_twelve(e,"category");
                    }}
                  >
                    <span className="checkmark" /> All Categories
                  </button>
                </div>
              </div>
            </li>
            {categories.map((category, key) => {
              return (
                <li key={key}>
                  <div className="category_type">
                    <div className="sidebar-widget-list-left">
                      <button
                        onClick={e => {
                          getSortParams("category", category);
                          setActiveSort_twelve(e,"category");
                        }}
                      >
                        {" "}
                        <span className="checkmark" /> {category}{" "}
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "No categories found"
        )}
      </div>


    
    </div>
  );
};

ShopCategoriesTwelve.propTypes = {
  categories: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopCategoriesTwelve;
