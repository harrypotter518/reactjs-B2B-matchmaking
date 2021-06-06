import PropTypes from "prop-types";
import React from "react";
import BrandgridList from "./BrandgridList";

const ShopBrands = ({ products, layout }) => {
  return (
    <div className="shop-bottom-area mt-35">
      <div className={`row ${layout ? layout : ""}`}>
        <BrandgridList products={products} spaceBottomClass="mb-25" />
      </div>
    </div>
  );
};

ShopBrands.propTypes = {
  layout: PropTypes.string,
  products: PropTypes.array
};

export default ShopBrands;
