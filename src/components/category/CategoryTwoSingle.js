import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const CategoryTwoSingle = ({ data, sliderClass }) => {
  return (
    <div className={`collection-product ${sliderClass ? sliderClass : ""}`} >
      <div className="collection-img">
        {/* <Link to={process.env.PUBLIC_URL + data.link}> */}
        <Link to={process.env.PUBLIC_URL + "/buyer/BuyerSearch"}>
          <img src={process.env.PUBLIC_URL + data.image} alt=""  style={{ width:"160px"}}/>
        </Link>
      </div>
      {/* <div className="collection-content text-center" style={{ width:"170"}}>
        <span>{data.subtitle}</span>
        <h4>
          <Link to={process.env.PUBLIC_URL + data.link}>{data.title}</Link>
        </h4>
      </div> */}
    </div>
  );
};

CategoryTwoSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default CategoryTwoSingle;
