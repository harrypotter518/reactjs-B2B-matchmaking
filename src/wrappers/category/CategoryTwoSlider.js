import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import categoryData from "../../data/category/category-two.json";
import CategoryTwoSingle from "../../components/category/CategoryTwoSingle.js";
import SectionTitleFour from "../../components/section-title/SectionTitleFour.js";

const CategoryTwoSlider = ({ spaceTopClass, spaceBottomClass }) => {
  // swiper slider settings
  const settings = {
    loop: false,
    spaceBetween: 10,
    autoplay: {
      delay: 100000,
      disableOnInteraction: false
    },
    breakpoints: {
      992: {
        slidesPerView: 6
      },
      576: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  return (
    <div
      className={`collections-area ${spaceTopClass ? spaceTopClass : ""}  ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container" style={{ maxWidth:"1200px" }}>
        {/* section title */}
        <SectionTitleFour titleText="By Categories" spaceBottomClass="mb-40" />
        <div className="collection-wrap">
          <div className="collection-active">
            <Swiper {...settings}>
              {categoryData &&
                categoryData.map((single, key) => {
                  return (
                    <CategoryTwoSingle
                      data={single}
                      key={key}
                      sliderClass="swiper-slide"
                    />
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryTwoSlider.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CategoryTwoSlider;
