import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Logo from "../../components/header/Logo";
import NavMenuTwelve from "../../components/header/NavMenuTwelve";
import IconGroupTwelve from "../../components/header/IconGroupTwelve";
import MobileMenuTwelve from "../../components/header/MobileMenuTwelve";
import HeaderTop from "../../components/header/HeaderTop";

const HeaderTwelve = ({
  layout,
  top,
  borderStyle,
  headerPaddingClass,
  headerPositionClass,
  headerBgClass
}) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`header-area clearfix ${headerBgClass ? headerBgClass : ""} ${
        headerPositionClass ? headerPositionClass : ""
      }`}
    >
      <div
        className={`${headerPaddingClass ? headerPaddingClass : ""} ${
          top === "visible" ? "d-none d-lg-block" : "d-none"
        } header-top-area ${
          borderStyle === "fluid-border" ? "border-none" : ""
        }`}
      >
        <div className={layout === "container-fluid" ? layout : "container"}>
          {/* header top */}
          <HeaderTop borderStyle={borderStyle} />
        </div>
      </div>

      <div
        className={` ${
          headerPaddingClass ? headerPaddingClass : ""
        } sticky-bar header-res-padding clearfix ${
          scroll > headerTop ? "stick" : "stick"
        }`}      
      >
        <div className={layout === "container-fluid" ? layout : "container container_second"}>
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
              {/* header logo */}
              <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" />
            </div>
            <div className="col-xl-9 col-lg-9 d-none d-lg-block">
              {/* Nav menu */}
              <NavMenuTwelve />
            </div>
            <div className="col-xl-1 col-lg-1 col-md-6 col-8">
              {/* Icon group */}
              <IconGroupTwelve />
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <MobileMenuTwelve />
      </div>
    </header>
  );
};

HeaderTwelve.propTypes = {
  borderStyle: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  layout: PropTypes.string,
  top: PropTypes.string
};

export default HeaderTwelve;
