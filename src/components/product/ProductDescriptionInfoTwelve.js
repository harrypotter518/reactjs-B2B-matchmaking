import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { getProductCartQuantity } from "../../helpers/product_twelve";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";
import Rating from "./sub-components/ProductRating";

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',  
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionborder: {
    boxShadow:'none',
    borderBottom:'1px solid #e1e1e1',
    borderTop:'0.5px solid #e1e1e1'
  }
}));

const ProductDescriptionInfoTwelve = ({
  product,
  discountedPrice,
  currency,
  finalDiscountedPrice,
  finalProductPrice,
  cartItems,
  wishlistItem,
  compareItem,
  addToast,
  addToCart,
  addToWishlist,
  addToCompare
}) => {

  const classes = useStyles();

  // const [selectedProductColor, setSelectedProductColor] = useState(
  //   product.variation ? product.variation[0].color : ""
  // );
  // const [selectedProductSize, setSelectedProductSize] = useState(
  //   product.variation ? product.variation[0].size[0].name : ""
  // );
  // const [productStock, setProductStock] = useState(
  //   product.variation ? product.variation[0].size[0].stock : product.stock
  // );
  const [quantityCount, setQuantityCount] = useState(1);

  const quantityChange = (event) => {
    setQuantityCount(event.target.value);
  };
  // const productCartQty = getProductCartQuantity(
  //   cartItems,
  //   product,
    // selectedProductColor,
    // selectedProductSize
  // );

  return (
    <div className="product-details-content ml-70">
      <div className= "product-details-header">
        <div className= "product-details-brand-img">
          <img src="https://cdn.store.flexlane.co/56c9bd7ce7b6f79632e3184c0612268e.jpg?x-oss-process=image/resize,m_lfit,w_80,h_80/auto-orient,1/quality,Q_100/sharpen,100/format,webp"
            alt="LOGO"/>
        </div>
        <div className= "product-details-brand-description">
          <p>3 day weekend</p>
          <p>HKD 1,200.00 mm</p>
        </div>
      </div>
      <h3>{product.name}</h3>
      <div className="product-details-price">
        {discountedPrice !== null ? (
          <Fragment>
            <h3>{currency.currencySymbol + finalDiscountedPrice}</h3>  
            <div>
              MSRP {currency.currencySymbol + finalProductPrice} 
              <span>{Math.round((finalProductPrice-finalDiscountedPrice)/finalProductPrice*100)} %</span>
            </div>
          </Fragment>
        ) : (
          <span>{currency.currencySymbol + finalProductPrice} </span>
        )}
      </div>
      {product.rating && product.rating > 0 ? (
        <div className="pro-details-rating-wrap">
          <div className="pro-details-rating">
            <Rating ratingValue={product.rating} />
          </div>
        </div>
      ) : (
        ""
      )}
      {/* <div className="pro-details-list">
        <p>{product.shortDescription}</p>
      </div>
 */}
   
      {product.affiliateLink ? (
        <div className="pro-details-quality">
          <div className="pro-details-cart btn-hover ml-0">
            <a
              href={product.affiliateLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              Buy Now
            </a>
          </div>
        </div>
      ) : (
        <div className="pro-details-quality">            
          <div style={{ width:'100%' }}>
            <div>
              <label>Item quantity</label>
            </div>             
              <TextField
              id="outlined-number"              
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={quantityCount}
              name="quantityCount"
              onChange={quantityChange}
              size="small"
              style={{ height:'40px', width:'100%'}}
              />
          </div>
          <div className="pro-details-cart btn-hover">
              <Button variant="contained" color="primary"     
                onClick={() =>
                  addToCart(
                    product,
                    addToast,
                    quantityCount
                    // selectedProductColor,
                    // selectedProductSize
                  )
                }
                style={{ height:'40px', width:'100%',padding:'0px' }}
                >
                  {" "}
                Add To Cart{" "}
              </Button>
            </div>


            {/* {productStock && productStock > 0 ? (
              // <button
              //   onClick={() =>
              //     addToCart(
              //       product,
              //       addToast,
              //       quantityCount
              //       // selectedProductColor,
              //       // selectedProductSize
              //     )
              //   }
              //   disabled={productCartQty >= productStock}
              // >
              //   {" "}
              //   Add To Cart{" "}
              // </button>
              <Button variant="contained" color="primary"     
                onClick={() =>
                  addToCart(
                    product,
                    addToast,
                    quantityCount
                    // selectedProductColor,
                    // selectedProductSize
                  )
                }
                style={{ height:'40px', width:'100%',padding:'0px' }}
                disabled={productCartQty >= productStock}   
                >
                  {" "}
                Add To Cart{" "}
              </Button>
            ) : (
              <button disabled>Out of Stock</button>
            )}
          </div> */}
          {/* <div className="pro-details-wishlist">
            <button
              className={wishlistItem !== undefined ? "active" : ""}
              disabled={wishlistItem !== undefined}
              title={
                wishlistItem !== undefined
                  ? "Added to wishlist"
                  : "Add to wishlist"
              }
              onClick={() => addToWishlist(product, addToast)}
            >
              <i className="pe-7s-like" />
            </button>
          </div>
          <div className="pro-details-compare">
            <button
              className={compareItem !== undefined ? "active" : ""}
              disabled={compareItem !== undefined}
              title={
                compareItem !== undefined
                  ? "Added to compare"
                  : "Add to compare"
              }
              onClick={() => addToCompare(product, addToast)}
            >
              <i className="pe-7s-shuffle" />
            </button>
          </div> */}
        </div>
      )}

      <div className={classes.root}>
        <Accordion className={classes.accordionborder}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5" className={classes.heading}>Shipping</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>Estimated delivery date</p>
              <h5>26 June - 27 June</h5>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion  className={classes.accordionborder}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Payment Terms</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>Peeba covers the upfront costs of your order and you will not be charged for the items until after the items are shipped.</p>
              <p>If you qualify for net-60 terms, you will be able to choose “Pay with Net-60 terms” on checkout.</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion  className={classes.accordionborder}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>Free returns</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>  
              <p>We offer free returns on the first order you place with any brand within 60 days, so you can feel confident buying new lines online.</p>
              <p>These returns are only available for your first order with a new brand; any reorders from that brand will not be eligible for returns.</p>
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>

    </div>
  );
};

ProductDescriptionInfoTwelve.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  addToast: PropTypes.func,
  cartItems: PropTypes.array,
  compareItem: PropTypes.array,
  currency: PropTypes.object,
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  product: PropTypes.object,
  wishlistItem: PropTypes.object
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      // selectedProductColor,
      // selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          // selectedProductColor,
          // selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    }
  };
};

export default connect(null, mapDispatchToProps)(ProductDescriptionInfoTwelve);
