import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutTwenty from "../../layouts/LayoutTwenty";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const StartSeller = ({ location }) => {
  const { pathname } = location;
  const handleClick = e => {
   window.location.href =process.env.PUBLIC_URL + "/seller/SellerDashboard";
  };

  return (
    <Fragment>
      <MetaTags>
        <title>OpenAsia | Seller</title>
        <meta
          name="description"
          content="Contact of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Seller</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Start 
      </BreadcrumbsItem>
      <LayoutTwenty 
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5" >
                {/* <div className="contact-info-wrap" > */}
                  {/* <div className="single-contact-info"> */}
                      <h3  style={{ paddingBottom:"2vh" }}>Suppliers & manufacturers</h3>
                      <p>The resource you need to grow your business.</p>
                      <p> It starts with you, the passinate manufacturers. We've built this platform to help brands grow.</p>
                      <p>The need for availability is constant - increase your width and depth of distribution by showcasing your products to the key retailers and distributors.</p>
                      <p>Make informed business decisions with our industry directory, consumer search engine trends, IRI insights and reports.</p>
                  {/* </div> */}
                  <center>
                    <button className="button_sign" type="button" onClick={handleClick}>
                      Sign
                    </button>   
                  </center>
                {/* </div> */}
              </div>
              <div className="col-lg-8 col-md-7">
                 <img src={process.env.PUBLIC_URL + "/assets/img/seller-banner.jpg"} alt="" />
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
