import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderEleven from "../wrappers/header/HeaderEleven";
import FooterOne from "../wrappers/footer/FooterOne";

const LayoutTwentyOne = ({
  children,
  headerContainerClass,
  headerTop,
  headerPaddingClass,
  headerPositionClass
}) => {
  return (
    <Fragment>
      <HeaderEleven />    
      <div className="home-sidebar-right">
        {children}
        <FooterOne
          backgroundColorClass="bg-gray"
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
          containerClass="container-fluid"
          extraFooterClass="hm4-footer-padding"
          sideMenu={false}          
        />
      </div>

    </Fragment>
  );
};

LayoutTwentyOne.propTypes = {
  children: PropTypes.any,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  headerTop: PropTypes.string
};

export default LayoutTwentyOne;
