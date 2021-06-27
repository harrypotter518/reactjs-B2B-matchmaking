import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../helpers/product_twelve";
// import Rating from "./sub-components/ProductRating";
import ProductModal from "./ProductModal";

const BrandGridListSingleTwelve = ({
  product,
  currency,
  addToCart,
  addToWishlist,
  addToCompare,
  cartItem,
  wishlistItem,
  compareItem,
  sliderClassName,
  spaceBottomClass,
  colorClass,
  titlePriceClass
}) => {
  const [modalShow, setModalShow] = useState(false);
  const { addToast } = useToasts();

  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);

  return (
  <Fragment>
    <div
      className={`col-lg-3 col-md-4 col-sm-6 ${
        sliderClassName ? sliderClassName : ""
      }`}
    >
        <div
          className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
          <div className="product-img">
            <Link to={process.env.PUBLIC_URL + "/buyer/brand"}>
              <img
                className="default-img"
                src={process.env.PUBLIC_URL + product.image[0]}
                alt=""              
              />       
            </Link>
          </div>

          <div className="product-content text-left" >    
            <h5>             
                <strong>Brand-{product.sku}  </strong>              
            </h5>
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <h3>
                  <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                    {product.name}
                  </Link>
                </h3> 
              </div>
              <div className="col-xl-4 col-md-7" style={{ paddingLeft:'0px' }}>
                <p style={{ border:'2px solid #1d252d', borderRadius:'5px', padding:'3px',width:'auto',textAlign:'center' }}>Australia</p> 
              </div>
              <div className="col-xl-2 col-md-3" style={{ paddingLeft:'0px' }}>
                <div className="pro-same-action pro-wishlist">
                  <button
                    style={{ border:'none', backgroundColor:'transparent' }}
                    className={wishlistItem !== undefined ? "active" : ""}
                    disabled={wishlistItem !== undefined}
                    title={
                      wishlistItem !== undefined
                        ? "Added to wishlist"
                        : "Add to wishlist"
                    }
                    onClick={() => addToWishlist(product, addToast)}
                  >
                    <i className="pe-7s-like" style={{fontSize:'1.5em' }}/>
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="product-price">
              <div className="badge-widget">
                <div className="badge-widget-tag mt-25">                    
                    <ul>  
                    {product.category.map((single_category,key)=>{
                        return(
                          <li key={ key } > 
                           <button>{single_category}</button> 
                          </li>  
                        );
                    })}             
                    </ul>
                </div>
              </div>
            </div> */}

          </div>
        </div>
        <div className="shop-list-wrap mb-30">
          <div className="row">
            <div className="col-xl-4 col-md-5 col-sm-6">
              <div className="product-list-image-wrap">
                <div className="product-img">
                  <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                    <img
                      className="default-img img-fluid"
                      src={process.env.PUBLIC_URL + product.image[0]}
                      alt=""
                    />
                    {product.image.length > 1 ? (
                      <img
                        className="hover-img img-fluid"
                        src={process.env.PUBLIC_URL + product.image[1]}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </Link>
         
                </div>
              </div>
            </div>      


          </div>
        </div>
      </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedprice={discountedPrice}
        finalproductprice={finalProductPrice}
        finaldiscountedprice={finalDiscountedPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        addtocompare={addToCompare}
        addtoast={addToast}
      />
    </Fragment>
  );
};

BrandGridListSingleTwelve.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItem: PropTypes.object,
  compareItem: PropTypes.object,
  currency: PropTypes.object,
  product: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.object
};

export default BrandGridListSingleTwelve;
