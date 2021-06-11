import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwenty from "../../layouts/LayoutTwenty";

// import BannerOne from "../../wrappers/banner/BannerOne";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderNine from "../../wrappers/hero-slider/HeroSliderNine";
// import TabProduct from "../../wrappers/product/TabProduct";
import TabProductEleven from "../../wrappers/product/TabProductEleven";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import CategoryTwoSlider from "../../wrappers/category/CategoryTwoSlider";

import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

import BannerFour from "../../wrappers/banner/BannerFour";
const HomeFashionTwo = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>OpenAsia | B2B</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutTwenty
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >

        {/* hero slider */}
        <HeroSliderNine  spaceLeftClass="ml-70" spaceRightClass="mr-70" />
        {/* banner */}
        {/* <BannerOne spaceTopClass="pt-60" spaceBottomClass="pb-35" /> */}
        <BannerFour  spaceBottomClass="pb-35" />
        {/* category */}
        <CategoryTwoSlider spaceTopClass="pt-50" spaceBottomClass="pb-95" />
        
        {/* tab product */}
        <TabProductEleven spaceBottomClass="pb-60" category="fashion" />

        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />

        {/* testimonial */}
        <TestimonialOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          // spaceLeftClass="ml-70"
          // spaceRightClass="mr-70"
          bgColorClass="bg-gray-3"
          
        />

        {/* QA part */}
        <div className="row pt-40 mb-40">
          <div className="row" style={{width:"90%", marginRight:"auto", marginLeft:"auto"}}>
            <div className="col-lg-3 col-3">
              <img src={process.env.PUBLIC_URL + "/assets/img/bg/faq-bg-left.jpg"} alt="" style={{width:"100%"}}/> 
            </div>
          
            <div className="col-lg-6 col-6 ">
              <div className="myaccount-wrapper pb-40" style={{borderTop:'5px solid #bca487', borderRadius:"5px",boxShadow: "0px 10px 10px 0px rgba(0,0,0,0.15)" }}>
                <h3 style={{ marginTop:'40px', marginBottom:'30px',textAlign:'center' }}>Frequently asked questions</h3>
                <Accordion className="pl-20 pr-20 mb-10">
                  
                  <Card className="single-my-account mb-20" style={{margin:"0px"}}>
                    <Card.Header className="panel-heading">
                      <Accordion.Toggle variant="link" eventKey="0">
                        <h3 className="panel-title">
                          <span>1 .</span> Who can become a Peeba member?{" "}
                        </h3>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <div className="myaccount-info-wrapper pb-0 pt-0">
                        
                          <div className="row">
                            <div className="col-lg-12 col-md-12">
                            Whether you are an offline or online retailer, you can join Peeba to start connecting to brands and buying wholesale. Peeba cannot sell to anyone buying for personal use
                            </div>   
                          </div>           
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="single-my-account mb-20" style={{margin:"0px"}}>
                    <Card.Header className="panel-heading">
                      <Accordion.Toggle variant="link" eventKey="1">
                        <h3 className="panel-title">
                          <span>2 .</span> What is Guaranteed Sales?
                        </h3>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="myaccount-info-wrapper  pb-0 pt-0">
                        
                          <div className="row">
                            <div className="col-lg-12 col-md-12">
                            We allow retailers to try selling the products without risk and only pay for items that are selling in your store after 60 days. Anything that doesn’t sell can be return to us with shipping
                            </div>   
                          </div>           
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="single-my-account mb-20" style={{margin:"0px"}}>
                    <Card.Header className="panel-heading">
                      <Accordion.Toggle variant="link" eventKey="2">
                        <h3 className="panel-title">
                          <span>3 .</span> What are Net-60 Terms?
                        </h3>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <div className="myaccount-info-wrapper  pb-0 pt-0">
                        
                          <div className="row">
                            <div className="col-lg-12 col-md-12">                             
                              With Net-60 terms, Peeba covers the upfront costs of your order and you will not be charged for the items until 60 days after the date your order has been shipped. On average, your order will arrive your store after being shipped within 6 working days. Once an invoice has been paid, that amount is returned to your credit limit and you can continue to place more orders with your Net-60 terms. Please note that if you place an order that exceeds your credit limit, you can absolutely do so, however, you will be charged for this order upon shipment.
                            </div>   
                          </div>           
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="single-my-account mb-20" style={{margin:"0px"}}>
                    <Card.Header className="panel-heading">
                      <Accordion.Toggle variant="link" eventKey="3">
                        <h3 className="panel-title">
                          <span>4 .</span>How many days does it take to receive my shipment?
                        </h3>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        <div className="myaccount-info-wrapper  pb-0 pt-0">
                        
                          <div className="row">
                            <div className="col-lg-12 col-md-12">
                            Lead time depends on the country and shipping method of the brand and product. Usually, your goods will arrive within a week of the brand accepting your order.
                            </div>   
                          </div>           
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>       
              
                </Accordion>
              </div>  
            </div>
            <div className="col-lg-3 col-3">
                <img src={process.env.PUBLIC_URL + "/assets/img/bg/faq-bg-right.jpg"} alt="" style={{width:"100%"}}/> 
            </div>
          </div>
        </div>

      </LayoutTwenty>
    </Fragment>
  );
};

export default HomeFashionTwo;
