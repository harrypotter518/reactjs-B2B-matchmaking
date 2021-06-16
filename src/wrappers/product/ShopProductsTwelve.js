import PropTypes from "prop-types";
import React from "react";
import ProductgridListTwelve from "./ProductgridListTwelve";

const ShopProductsTwelve = ({ products, layout }) => {
  return (
    <div className="shop-bottom-area mt-35 ml-40">
      <div className={`row ${layout ? layout : ""}`}>
        <ProductgridListTwelve products={products} spaceBottomClass="mb-25" />
      </div>
    </div>
  );
};

ShopProductsTwelve.propTypes = {
  layout: PropTypes.string,
  products: PropTypes.array
};

export default ShopProductsTwelve;
