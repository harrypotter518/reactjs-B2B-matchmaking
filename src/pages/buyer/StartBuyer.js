import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutTwenty from "../../layouts/LayoutTwenty";
// import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

const StartSeller = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>OpenAsia | Buyer</title>
        <meta
          name="description"
          content="Contact of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Buyer</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Start 
      </BreadcrumbsItem>
      <LayoutTwenty 
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* breadcrumb */}
        {/* <Breadcrumb /> */}
        <div className="row mt-20" >
          <div className="col-lg-2  startbuyer_part1_1">
            <img src={process.env.PUBLIC_URL + "/assets/img/startseller/sell-hero-left.png"} width="100%" alt="" />
          </div>
          <div className="col-lg-8 pt-100 bg-gray startbuyer_part1_2" style={{ paddingLeft:"20vw", paddingRight:"20vw"}}>
            <center>
              <p>SELL WITH OPENASIA</p>
              <h3 style={{ fontSize:'28px' }}>Get your brand in front of thousands of Asian retailers</h3>
              <p style={{ fontSize:'18px', paddingTop:'20px' }}>Peeba is a B2B Wholesale Marketplace that helps you streamline, manage and grow your wholesale business.</p>
              <Link to={process.env.PUBLIC_URL + "/buyer/BuyerSearch"}>                  
                  <button className="button_sign"  type="button" style={{ borderRadius:"5px" }}>
                    Apply as Buyer
                  </button>                 
              </Link>
            </center>
          </div>
          <div className="col-lg-2  startbuyer_part1_3">
            <img src={process.env.PUBLIC_URL + "/assets/img/startseller/sell-hero-right.png"} width="100%" alt=""/>
          </div>
        </div>

        <div class="row" style={{ borderBottom:'1px solid #e1e1e1' }}>
          <div className="container" style={{ padding:'3vw 2vw 3vw 2vw'}}>
            <div className="row">
              <div className="col-lg-3 col-md-3" style={{ fontSize:'20px', margin:'auto' }}>
                <center>Join over 400+ brands using Peeba to grow their wholesale</center>
              </div>
              <div className="col-lg-2 col-md-2">
              </div>
              <div className="col-lg-7 col-md-7">
                <img src={process.env.PUBLIC_URL + "/assets/img/startseller/brand-logo-desktop.png"}  alt="" width="100%" height="100%"/>
              </div>
            </div>
          </div>
        </div>

        
        <div class="row">
          <div className="container" style={{ padding:'2vw 5vw 2vw 5vw'}}>
            <div className="row">
              <div className="col-lg-6 col-md-6"  style={{ padding:'2vw 2vw 0 2vw' }}>
                <img src={process.env.PUBLIC_URL + "/assets/img/startseller/new-order.png"} alt="" width="100%"/>
              </div>
              <div className="col-lg-6 col-md-6"  style={{ padding:'2vw 4vw 0 4vw', margin:'auto' }}>
                <h3> Grow sales in new market</h3>
                <p style={{ fontSize:'18px' }}>We help you grow your wholesale across Asia by recommending your brand to relevant retailers on the marketplace, and allowing them to buy from your brand without hassle.</p>
              </div>
            </div>

            <div className="row">              
              <div className="col-lg-6 col-md-6"  style={{ padding:'2vw 4vw 0 4vw', margin:'auto' }}>
                <h3>Get new accounts with attractive terms</h3>
                <p style={{ fontSize:'18px' }}>We offer free returns and cover Net-60 terms so retailers can order your products without risk and cashflow constraints.</p>
              </div>
              <div className="col-lg-6  col-md-6" style={{ padding:'2vw 2vw 0 2vw' }}>
                <img src={process.env.PUBLIC_URL + "/assets/img/startseller/invoice-net60.png"} alt="" width="100%"/>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6"  style={{ padding:'2vw 2vw 0 2vw' }}>
                <img src={process.env.PUBLIC_URL + "/assets/img/startseller/payment-ontime.png"} alt="" width="100%"/>
              </div>
              <div className="col-lg-6 col-md-6"  style={{padding:'2vw 4vw 0 4vw', margin:'auto' }}>
                <h3>Get paid, on time</h3>
                <p style={{ fontSize:'18px' }}>We'll pay you upon shipment, and handle payment collections from the retailer.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row bg-gray">
          <div className="col-xl-6 col-lg-5 col-md-12 startbuyer_part3" >
            <label >OpenAsia Direct</label>
            <h3>Take your wholesale online</h3>
            <h4>Custom domain</h4>
            <p>Take wholesale orders online 24/7, simply send them a link to your store.</p>

            <h4>Write wholesale order manually</h4>
            <p>Streamline order-writing and offer Peeba's preferred terms to your buyers and store their payment information securely.</p>

            <h4>Offer terms, on us</h4>
            <p>Every sale is a guarantee sale on your end, we pay you up front and collect payment from the retailer after 60 days.</p>

          </div>
          <div className="col-xl-6 col-lg-7 col-md-12 startbuyer_part3_2">
            <img src={process.env.PUBLIC_URL + "/assets/img/buyer-banner.jpg"} alt="" width="100%"/>                
          </div>  
        </div>

        <div className="row">
          <div className="col-lg-5 col-md-6 startbuyer_part4" > 
              <h3 style={{ paddingBottom:"2vh" }}>End to end cross border logistics management</h3>
              <p style={{ fontSize:'18px'}}>OpenAsia handles the entire logistics lifecycle from ordering to return so you can focus on what matters most.</p>
              <hr/>
          </div>        
          <div className="col-lg-7 col-md-6 startbuyer_part4_2">
            <img src={process.env.PUBLIC_URL + "/assets/img/startseller/sea-map.svg"} alt="" width="100%"/>                
          </div>  
        </div>

        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-4 col-sm-12 startbuyer_part5 bg-gray" >
              <h3 style={{ paddingBottom:"2vh" }}> Manage your wholesale orders all in one place</h3>
              <p style={{ fontSize:'18px' }}>Designed to fully support you in bringing your wholesale business online.</p>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-1 col-sm-12  bg-gray">
            <div className="order_panel row">
              <div className ="col-lg-6 col-md-6 col-xs-12 order_content">
                <img src="https://static-image.peeba.com/order-management.svg" alt=""/>
                <h4>Order management</h4>
                <p>Manage your order online, enquiries, SKUs updates, product availability and more.</p>
              </div>
              <div className ="col-lg-6 col-md-6 col-xs-12 order_content">
                <img src="https://static-image.peeba.com/order-writing.svg" alt=""/>
                <h4>Order writing</h4>
                <p>Streamline order-writing and offer Peeba's preferred terms to your buyers.</p>
              </div>
              <div className ="col-lg-6 col-md-6 col-xs-12 order_content">
                <img src="https://static-image.peeba.com/analytics.svg" alt=""/>
                <h4>Analytics</h4>
                <p>Get actionable insights on your store’s visits, conversions, most viewed products and more.</p>
              </div>
              <div className ="col-lg-6 col-md-6 col-xs-12 order_content">
                <img src="https://static-image.peeba.com/shipping.svg" alt=""/>
                <h4>Shipping with Peeba</h4>
                <p>Get competitive shipping rates right from your dashboard.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-4 col-md-7 startbuyer_part5_3" >
            <img src={process.env.PUBLIC_URL + "/assets/img/startseller/salt-pine-bg.png"} alt="" width="100%"/>                
          </div>  
        </div>

        <div class="row">
          <div class="col-lg-7 col-md-8 col-xs-12 pb-50" style={{ margin:'auto' }}>
                <h3 style={{ marginTop:'40px', marginBottom:'30px',textAlign:'center' }}>Frequently asked questions</h3>
                <Accordion className="pl-20 pr-20 mb-10 ">
                  
                  <Card className="single-my-account mb-20 " style={{margin:"0px"}}>
                    <Card.Header className="panel-heading ">
                      <Accordion.Toggle variant="link" eventKey="0">
                        <h3 className="panel-title question_part">
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

        <div className="row bg-gray">
          <center style={{ padding:"40px", margin:'auto' }}>
              <h3>Ready to get started?</h3>
              <p style={{ fontSize:'18px' }}>Just send us your linesheet, and we’ll set up your online wholesale store</p>
              <Link to={process.env.PUBLIC_URL + "/buyer/BuyerSearch"}>                  
                  <button className="button_sign"  type="button" style={{ borderRadius:"5px" }}>
                    Apply as Buyer
                  </button>                 
              </Link>
          </center>
          <img src={process.env.PUBLIC_URL + "/assets/img/startseller/rael-footer.png"} alt="" width="100%" style={{ paddingBottom:'0px'}}/> 
        </div>
      </LayoutTwenty>
    </Fragment>
  );
};

StartSeller.propTypes = {
  location: PropTypes.object
};

export default StartSeller;
