import PropTypes from "prop-types";
import React from "react";
import {
  // getIndividualCategories,
  // getIndividualTags,
  getIndividualColors,
  getProductsIndividualSizes
} from "../../helpers/product_twelve";
// import ShopSearch from "../../components/product/ShopSearch";
// import ShopCategoryMenu from "../../components/product/ShopCategoryMenu";
import ShopCategoriesTwelve from "../../components/product/ShopCategoriesTwelve";
// import ShopImportAmount from "../../components/product/ShopImportAmount";
// import ShopAnnualRevenue from "../../components/product/ShopAnnualRevenue";
// import ShopOwner from "../../components/product/ShopOwner";
// import ShopOffer from "../../components/product/ShopOffer";
// import BrandValues from "../../components/product/BrandValues";
import ShopColor from "../../components/product/ShopColor";
import ShopSize from "../../components/product/ShopSize";
// import ShopTag from "../../components/product/ShopTag";



const ShopSidebarTwelve = ({ products, getSortParams, sideSpaceClass }) => {
  // const uniqueCategories = getIndividualCategories(products);
  const uniqueCategories = ['fashion','men','women','electronics','furniture','plant','organic food','flower','book'];

  const uniqueColors = getIndividualColors(products);
  const uniqueSizes = getProductsIndividualSizes(products);
  // const uniqueTags = getIndividualTags(products);

  // const uniqueImportAmounts = getIndividualImportAmounts(products);


  
  return (
 

    <div className={`sidebar-style ${sideSpaceClass ? sideSpaceClass : ""}`}>
      {/* <ShopCategoryMenu
        categories={data}
        getSortParams={getSortParams}
      /> */}
      
      {/* filter by categories */}
      <ShopCategoriesTwelve
        categories={uniqueCategories}
        getSortParams={getSortParams}
      />
      {/* filter by ImportAmount */}
      {/* <ShopImportAmount  getSortParams={getSortParams} /> */}
      {/* filter by AnnualRevenue */}
      {/* <ShopAnnualRevenue  getSortParams={getSortParams} /> */}
      {/* filter by Owner */}
      {/* <ShopOwner  getSortParams={getSortParams} /> */}
      {/* filter by Offer */}
      {/* <ShopOffer  getSortParams={getSortParams} /> */}
      {/* <BrandValues  getSortParams={getSortParams} /> */}

      {/* filter by color */}
      <ShopColor colors={uniqueColors} getSortParams={getSortParams} />

      {/* filter by size */}
      <ShopSize sizes={uniqueSizes} getSortParams={getSortParams} />

      {/* filter by tag */}
      {/* <ShopTag tags={uniqueTags} getSortParams={getSortParams} /> */}
    </div>
  );
};

ShopSidebarTwelve.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array,
  sideSpaceClass: PropTypes.string
};

export default ShopSidebarTwelve;
