import PropTypes from "prop-types";
import React from "react";
import ProductgridListEleven from "./ProductgridListEleven";

const ShopProductsEleven = ({ products, layout }) => {
  return (
    <div className="shop-bottom-area mt-35">
      <div className={`row ${layout ? layout : ""}`}>
        <ProductgridListEleven products={products} spaceBottomClass="mb-25" />
      </div>
    </div>
  );
};

ShopProductsEleven.propTypes = {
  layout: PropTypes.string,
  products: PropTypes.array
};

export default ShopProductsEleven;
