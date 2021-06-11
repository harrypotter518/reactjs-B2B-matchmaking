import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutTwenty from "../../layouts/LayoutTwenty";
// import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
const StartSeller = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>OpenAsia | Buyer</title>
        <meta
          name="description"
          content="Contact of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Buyer</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Start 
      </BreadcrumbsItem>
      <LayoutTwenty 
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* breadcrumb */}
        {/* <Breadcrumb /> */}
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5" >
                {/* <div className="contact-info-wrap" > */}
                  {/* <div className="single-contact-info"> */}
                      <h3 style={{ paddingBottom:"2vh" }}>Retailers & Distributors</h3>
                      <p>We know you're busy, we've made this seasy for you and your team.</p>
                      <p>Discover innovative products that meet your needs and keep on top of local and interantional consumer search trends.</p>
                      <p>Everything you need to discover, source and grow.</p>                      
                  {/* </div> */}
                  <Link to={process.env.PUBLIC_URL + "/buyer/BuyerSearch"}>
                    <center>
                      <button className="button_sign"  type="button">
                        Sign
                      </button>   
                    </center>
                  </Link>
                {/* </div> */}
              </div>
              <div className="col-lg-8 col-md-7">
                 <img src={process.env.PUBLIC_URL + "/assets/img/buyer-banner.jpg"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </LayoutTwenty>
    </Fragment>
  );
};

StartSeller.propTypes = {
  location: PropTypes.object
};

export default StartSeller;
