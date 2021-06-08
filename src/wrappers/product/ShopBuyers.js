import PropTypes from "prop-types";
import React from "react";
import BuyergridList from "./BuyergridList";

const ShopBuyers= ({ products, layout }) => {
  return (
    <div className="shop-bottom-area mt-35">
      <div className={`row ${layout ? layout : ""}`}>
        <BuyergridList products={products} spaceBottomClass="mb-25" />
      </div>
    </div>
  );
};

ShopBuyers.propTypes = {
  layout: PropTypes.string,
  products: PropTypes.array
};

export default ShopBuyers;
