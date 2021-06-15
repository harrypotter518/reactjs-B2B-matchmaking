import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import Paginator from "react-hooks-paginator";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import { getSortedProducts } from "../../helpers/product_twelve";
import LayoutTwentyTwo from "../../layouts/LayoutTwentyTwo";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ShopSidebarTwelve from "../../wrappers/product/ShopSidebarTwelve";
import ShopTopbar from "../../wrappers/product/ShopTopbar";
import ShopProductsTwelve from "../../wrappers/product/ShopProductsTwelve";

import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const Brand = ({ location, products }) => {
  const [layout, setLayout] = useState("grid three-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const pageLimit = 15;
  const { pathname } = location;

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <Fragment>
      <MetaTags>
        <title>OpenAsia | Buyer</title>
        <meta
          name="description"
          content="Shop page of flone react minimalist eCommerce template."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Buyer</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Brand
      </BreadcrumbsItem>

      <LayoutTwentyTwo headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        <div className="shop-area pb-100">
            <div className="row">
                <div className="col-4" style={{ padding: "0px" }}>
                    <img
                        src={
                        process.env.PUBLIC_URL + "/assets/img/brand-image/brand-1.jpg"
                        }
                        width="100%" alt="brand-1"
                    />
                </div>
                <div className="col-4" style={{ padding: "0px" }}>
                <img
                    src={
                    process.env.PUBLIC_URL + "/assets/img/brand-image/brand-2.jpg"
                    }
                    width="100%" alt="brand-2"
                />
                </div>
                <div className="col-4" style={{ padding: "0px" }}>
                <img
                    src={
                    process.env.PUBLIC_URL + "/assets/img/brand-image/brand-3.png"
                    }
                    width="100%" alt="brand-3"
                />
                </div>
            </div>

          <div className="container container_second">

            <div className="row">             
                <div className="col-1" style={{ padding: "0px" }}>
                  <img
                      src={
                      process.env.PUBLIC_URL +
                      "https://cdn.store.flexlane.co/56c9bd7ce7b6f79632e3184c0612268e.jpg?x-oss-process=image/resize,m_lfit,w_150,h_150/auto-orient,1/quality,Q_100/sharpen,100/format,webp"
                      }
                      alt="brand-logo"
                      style={{ width: "120px", height: "120px", marginTop: "-30px", background:"#f1e2e2",boxShadow: '10px 5px 10px #aaaaaa' }}
                  />
                </div>
                <div className="col-8" style={{ padding: "10px" }}>         
                    <div className="brand-star-box">
                        <span className="title">Go Green</span>
                        <div className="ratting-star" style={{ color: '#ffa900' }}>
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                        </div>
                    </div>
              
                    <div  style={{ padding: "10px" }}>
                        <p className="location" style={{ color:'gray' }}>USA | since 2015</p>
                        <p classNAme="short_description"> Disposable plastic
                                products have wreaked havoc on the planet, and
                                the oceans have suffered because of human
                                beings.
                        </p>
                    </div>
                    <div className="filter sidebar-widget">
                        <div className="sidebar-widget-tag mt-25">                    
                            <ul>                    
                                <li key="1">
                                <button>
                                Food & Beverages
                                </button>
                                </li>    
                                <li key="2">
                                <button>
                                Plant based
                                </button>
                                </li>  
                                <li key="3">
                                <button>
                                0~3 years
                                </button>
                                </li>                  
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-5" style={{ padding: "0px" }}></div>
            </div>

            <Tab.Container defaultActiveKey="product">
              <Nav variant="pills" className="brand-description-topbar">
                <Nav.Item>
                  <Nav.Link eventKey="product">Products</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="description">Description</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="description-review-bottom">
                <Tab.Pane eventKey="product">
                  <div className="row">
                    <div className="col-lg-2 order-2 order-lg-1">
                      {/* shop sidebar */}
                      <ShopSidebarTwelve
                        products={products}
                        getSortParams={getSortParams}
                        sideSpaceClass="mr-30"
                      />
                    </div>
                    <div className="col-lg-10 order-1 order-lg-2">
                      {/* shop topbar default */}
                      <ShopTopbar
                        getLayout={getLayout}
                        getFilterSortParams={getFilterSortParams}
                        productCount={products.length}
                        sortedProductCount={currentData.length}
                      />

                      {/* shop page content default */}
                      <ShopProductsTwelve layout={layout} products={currentData} />

                      {/* shop product pagination */}
                      <div className="pro-pagination-style text-center mt-30">
                        <Paginator
                          totalRecords={sortedProducts.length}
                          pageLimit={pageLimit}
                          pageNeighbours={2}
                          setOffset={setOffset}
                          currentPage={currentPage}
                          setCurrentPage={setCurrentPage}
                          pageContainerClass="mb-0 mt-0"
                          pagePrevText="«"
                          pageNextText="»"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="description">
                  <div className="row">
                    <div className="col-lg-8">                     
                           
                        <h4> About DeliOne</h4>
                        <p>
                        It is all about “Go Green”. Disposable plastic
                        products have wreaked havoc on the planet, and
                        the oceans have suffered because of human
                        beings. It's time for us to make a CHANGE!!
                        DeliOne is a Hong Kong brand. Our philosophy is
                        to give a hand to the earth by Hong Kong
                        original, practice environmentally friendly
                        life, while building a better quality of life.
                        </p>                          
                        <div>
                            <img src={process.env.PUBLIC_URL + "/assets/img/brand-image/brand-1.jpg"} alt="brand" width="90%"/>                              
                        </div>       
                   
                    </div>
                    <div className="col-lg-4" style={{ borderLeft:"1px solid #aaaaaa", padding:"20px" }}>
                        <h4>Looking for</h4>
                        <p>Retailers</p>
                        <h4>Capacity</h4>
                        <p>US$ 1M-5M</p>
                        <h4>What we offer</h4>
                        <p>20% marketing</p>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </LayoutTwentyTwo>
    </Fragment>
  );
};

Brand.propTypes = {
  location: PropTypes.object,
  products: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    products: state.productData.products,
  };
};

export default connect(mapStateToProps)(Brand);
