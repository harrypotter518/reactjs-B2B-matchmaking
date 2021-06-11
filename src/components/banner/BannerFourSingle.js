import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BannerFourSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-lg-4 col-md-4">
      <div
        className={`single-banner banner-shape banner-green-color ${
          spaceBottomClass ? spaceBottomClass : ""
        }`}
      >
        <Link to={process.env.PUBLIC_URL + data.link}>
          <img src={process.env.PUBLIC_URL + data.image} alt="" />
        </Link>
        <div className="banner-content" style={{ marginRight:"2vw",marginLeft:"1vw"  }}>
          <h4 >{data.title}</h4>
          <h5 style={{paddingTop:"-30px"}}>
            {data.subtitle} <span>{data.price}</span>
          </h5>
          {/* <Link to={process.env.PUBLIC_URL + data.link}>
            <i className="fa fa-long-arrow-right" />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

BannerFourSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default BannerFourSingle;
