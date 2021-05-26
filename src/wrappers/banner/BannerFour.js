import React from "react";
// import bannerData from "../../data/banner/banner-four.json";
// import BannerFourSingle from "../../components/banner/BannerFourSingle.js";

const BannerFour = () => {
  return (
    <div className="banner-area ">
      <div className="container bg-gray-2">
        <div className="row">

          <div className="col-xl-4 col-lg-4 col-md-4 col-4">
            <div className="banner-content" style={{ paddingTop:"5vh",paddingBottom:"3vh",  marginRight:"2vw",marginLeft:"2vw"  }}>
              <h2 style={{ fontFamily:"sans-serif",fontSize:"1.5rem", color:"#35522b", textAlign:"center"  }}>Discover unique brands</h2>
              <h4 style={{ fontFamily:"sans-serif",paddingTop:"2vh", textAlign:"center" }}>
              Purchase from a carefully curated list of 500+ global and independent brands.
              </h4>           
            </div>
          </div>

        <div className="col-xl-4 col-lg-4 col-md-4 col-4">
            <div className="banner-content" style={{ paddingTop:"5vh",paddingBottom:"3vh",  marginRight:"2vw",marginLeft:"2vw"  }}>
              <h2 style={{ fontFamily:"sans-serif",fontSize:"1.5rem", color:"#35522b", textAlign:"center"}}>Buy now, pay later</h2>
              <h4 style={{ fontFamily:"sans-serif",paddingTop:"2vh",textAlign:"center" }}>
              No payments upfront. Pay only when your items are shipped or pay 60 days later.
              </h4>           
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-4 col-4">
            <div className="banner-content" style={{ paddingTop:"5vh",paddingBottom:"3vh",  marginRight:"2vw",marginLeft:"2vw"  }}>
              <h2 style={{ fontFamily:"sans-serif", fontSize:"1.5rem",color:"#35522b", textAlign:"center"  }}>Guaranteed Sales</h2>
              <h4 style={{ fontFamily:"sans-serif",paddingTop:"2vh", textAlign:"center" }}>
              Peeba offers a 60 days sale trial. Return unsold items for free.
              </h4>
            </div>
          </div>
        
          {/* {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerFourSingle
                  data={single}
                  spaceBottomClass="mb-30"
                  key={key}
                />
              );
            })} */}
        </div>
      </div>
    </div>
  );
};

export default BannerFour;
