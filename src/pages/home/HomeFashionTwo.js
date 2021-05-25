import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import BannerOne from "../../wrappers/banner/BannerOne";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderNine from "../../wrappers/hero-slider/HeroSliderNine";
import TabProduct from "../../wrappers/product/TabProduct";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import CategoryTwoSlider from "../../wrappers/category/CategoryTwoSlider";

import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

const HomeFashionTwo = () => {

  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Fashion Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >

        {/* hero slider */}
        <HeroSliderNine spaceLeftClass="ml-70" spaceRightClass="mr-70" />
        {/* banner */}
        <BannerOne spaceTopClass="pt-60" spaceBottomClass="pb-65" />
        
        {/* category */}
        <CategoryTwoSlider spaceTopClass="pt-100" spaceBottomClass="pb-95" />
        
        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="fashion" />

        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />

        {/* testimonial */}
        <TestimonialOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          bgColorClass="bg-gray-3"
          
        />

        {/* QA part */}
        <div className="container" style={{ paddingTop:'40px' }}>
          <div className="row">
            <div className="ml-auto mr-auto col-lg-9">
              <div className="myaccount-wrapper" style={{borderTop:'5px solid #bca487'}}>
                <h3 style={{ marginTop:'40px', marginBottom:'30px',textAlign:'center' }}>Frequently asked questions</h3>
                <Accordion>
                  
                  <Card className="single-my-account mb-20">
                    <Card.Header className="panel-heading">
                      <Accordion.Toggle variant="link" eventKey="0">
                        <h3 className="panel-title">
                          <span>1 .</span> Who can become a Peeba member?{" "}
                        </h3>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <div className="myaccount-info-wrapper">
                        
                          <div className="row">
                            <div className="col-lg-12 col-md-12">
                            Whether you are an offline or online retailer, you can join Peeba to start connecting to brands and buying wholesale. Peeba cannot sell to anyone buying for personal use
                            </div>   
                          </div>           
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="single-my-account mb-20">
                    <Card.Header className="panel-heading">
                      <Accordion.Toggle variant="link" eventKey="1">
                        <h3 className="panel-title">
                          <span>2 .</span> What is Guaranteed Sales?
                        </h3>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="myaccount-info-wrapper">
                        
                          <div className="row">
                            <div className="col-lg-12 col-md-12">
                            We allow retailers to try selling the products without risk and only pay for items that are selling in your store after 60 days. Anything that doesn’t sell can be return to us with shipping
                            </div>   
                          </div>           
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="single-my-account mb-20">
                    <Card.Header className="panel-heading">
                      <Accordion.Toggle variant="link" eventKey="2">
                        <h3 className="panel-title">
                          <span>3 .</span> What are Net-60 Terms?
                        </h3>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <div className="myaccount-info-wrapper">
                        
                          <div className="row">
                            <div className="col-lg-12 col-md-12">                             
                              With Net-60 terms, Peeba covers the upfront costs of your order and you will not be charged for the items until 60 days after the date your order has been shipped. On average, your order will arrive your store after being shipped within 6 working days. Once an invoice has been paid, that amount is returned to your credit limit and you can continue to place more orders with your Net-60 terms. Please note that if you place an order that exceeds your credit limit, you can absolutely do so, however, you will be charged for this order upon shipment.
                            </div>   
                          </div>           
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="single-my-account mb-20">
                    <Card.Header className="panel-heading">
                      <Accordion.Toggle variant="link" eventKey="3">
                        <h3 className="panel-title">
                          <span>4 .</span>How many days does it take to receive my shipment?
                        </h3>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        <div className="myaccount-info-wrapper">
                        
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
          </div>
        </div>

      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionTwo;
