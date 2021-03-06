import React from "react";
import Logo from "../../components/header/Logo";
import IconGroupEleven from "../../components/header/IconGroupEleven";
import MobileMenu from "../../components/header/MobileMenu";
import NavMenuEleven from "../../components/header/NavMenuEleven";

const HeaderEleven = () => {
  return (
    <div>
      <div className="home-sidebar-left">
        {/* header logo */}
        <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" />
        {/* Icon group */}
        <IconGroupEleven />
        {/* sidebar nav menu */}
        <NavMenuEleven sidebarMenu={true} />
        {/* <div className="sidebar-copyright">
          <p>
            ©2020{" "}
            <a
              href="//www.hasthemes.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flone
            </a>
            .All Rights Reserved.
          </p>
        </div> */}
      </div>
      <header className="header-area header-padding-1 sticky-bar header-res-padding clearfix header-hm4-none">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
              {/* header logo */}
              <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" />
            </div>
            <div className="col-xl-10 col-lg-102 col-md-6 col-8">
              {/* Icon group */}
              {/* <IconGroup /> */}
            </div>
          </div>
          {/* mobile menu */}
          <MobileMenu />
        </div>
      </header>
    </div>
  );
};

export default HeaderEleven;
