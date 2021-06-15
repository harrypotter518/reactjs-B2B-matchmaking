import PropTypes from "prop-types";
import React from "react";
import { setActiveSort_twelve } from "../../helpers/product_twelve";

const ShopCategoriesTwelve = ({ categories, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-10 mb-10">
      <h4 className="pro-sidebar-title">Food & Beverages </h4>  
        <div className="sidebar-widget-list mt-10">
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
                    <span className="checkmark" /> Accessories
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="category_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
                      getSortParams("category", "");
                      setActiveSort_twelve(e,"category");
                    }}
                  >
                    <span className="checkmark" />Baking Ingredients
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="category_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
                      getSortParams("category", "");
                      setActiveSort_twelve(e,"category");
                    }}
                  >
                    <span className="checkmark" />Beans
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="category_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
                      getSortParams("category", "");
                      setActiveSort_twelve(e,"category");
                    }}
                  >
                    <span className="checkmark" />Beef
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="category_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
                      getSortParams("category", "");
                      setActiveSort_twelve(e,"category");
                    }}
                  >
                    <span className="checkmark" />Bread
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="category_type">
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={e => {
                      getSortParams("category", "");
                      setActiveSort_twelve(e,"category");
                    }}
                  >
                    <span className="checkmark" />Breakfast Snacks
                  </button>
                </div>
              </div>
            </li>

      
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
