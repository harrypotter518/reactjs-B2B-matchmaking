import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Logo from "../../components/header/Logo";
import NavMenuTen from "../../components/header/NavMenuTen";
import IconGroupTen from "../../components/header/IconGroupTen";
import MobileMenuTen from "../../components/header/MobileMenuTen";
import HeaderTopTen from "../../components/header/HeaderTopTen";

const HeaderTen = ({
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
      style={{ paddingLeft:'100px' }}
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
            {/* {/* <hr/> */}
            <HeaderTopTen borderStyle={borderStyle} />
          </div>

        </div>   
         <div
        className={` ${
          headerPaddingClass ? headerPaddingClass : ""
        } sticky-bar header-res-padding clearfix ${
          scroll > headerTop ? "stick" : "stick"
        }`}      
      >
        <div className={layout === "container-fluid" ? layout : "container "}>
          <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-8 col-8">
              {/* header logo */}
              <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" />
            </div>
            <div className="col-xl-1 col-lg-1  col-md-4 col-4">
              <IconGroupTen />
            </div>

            <div className="col-xl-5 col-lg-5  d-none d-lg-block">
           
              {/* <IconGroupTen /> */}
              <div className="header-right-wrap" style={{ width:"100%"}}>
                <div className="same-style header-search  d-none d-lg-block" style={{ width:"100%"}}>
                  <div className="search-content active" style={{ width:"100%",marginTop:"-27px", boxShadow:"none", backgroundColor:"transparent"  }}>
                    <form action="#">
                      <input type="text" placeholder="Search for items or brands"  style={{backgroundColor:"#f6f6f6", borderRadius:"5px"}}/>
                      <button className="button-search" style={{ borderRadius:"5px"}} >
                        <i className="pe-7s-search" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-xl-4 col-lg-4   d-none d-lg-block"  style={{ paddingLeft:'0px',paddingRight:'0px' }} >
              {/* Nav menu */}
              <NavMenuTen />              
            </div> 

            <div className="col-xl-1 col-lg-1 d-none d-lg-block pt-10 lang_bar" style={{paddingLeft:'0px',paddingRight:'0px'}}> 
              {/* <div className={layout === "container-fluid" ? layout : "container"} >           */}
               <HeaderTopTen borderStyle={borderStyle} />  
              {/* </div> */}
            </div>
         
          </div>
        </div>
        {/* mobile menu */}
        <MobileMenuTen />    

      </div>
    </header>
  );
};

HeaderTen.propTypes = {
  borderStyle: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  layout: PropTypes.string,
  top: PropTypes.string
};

export default HeaderTen;
