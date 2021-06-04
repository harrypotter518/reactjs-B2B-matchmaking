import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderTwelve from "../wrappers/header/HeaderTwelve";
import FooterOne from "../wrappers/footer/FooterOne";

const LayoutTwentyTwo = ({
  children,
  headerContainerClass,
  headerTop,
  headerPaddingClass,
  headerPositionClass
}) => {
  return (
    <Fragment>
      <HeaderTwelve
        layout={headerContainerClass}

        headerPaddingClass={headerPaddingClass}
        headerPositionClass={headerPositionClass}
      />
      {children}
      <FooterOne
        backgroundColorClass="bg-gray"
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
      />
      
    </Fragment>
  );
};

LayoutTwentyTwo.propTypes = {
  children: PropTypes.any,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  headerTop: PropTypes.string
};

export default LayoutTwentyTwo;
