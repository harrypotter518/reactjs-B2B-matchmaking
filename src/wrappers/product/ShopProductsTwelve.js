import PropTypes from "prop-types";
import React from "react";
import BrandgridList from "./BrandgridList";

const ShopProductsTwelve = ({ products, layout }) => {
  return (
    <div className="shop-bottom-area mt-35">
      <div className={`row ${layout ? layout : ""}`}>
        {/* <ProductgridListTwelve products={products} spaceBottomClass="mb-25" /> */}
        <BrandgridList products={products} spaceBottomClass="mb-25" />
      </div>
    </div>
  );
};

ShopProductsTwelve.propTypes = {
  layout: PropTypes.string,
  products: PropTypes.array
};

export default ShopProductsTwelve;
