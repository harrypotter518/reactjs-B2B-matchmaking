import PropTypes from "prop-types";
import React from "react";
import { setActiveSort_twelve } from "../../helpers/product_twelve";
import { makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  formControlLabel:{   
    fontFamily: 'lato',
    fontSize: '15px',
    fontColor:'#1d252d',
    margin:'0px!important',  
    padding:'0px!important',    
  },
   radiostyle:{
    paddingBottom:'0px',
    paddingTop:'0px',
   }
}));
const ShopCategoriesTwelve = ({ categories, getSortParams }) => {
  const classes =useStyles();
  const [selectedValue, setSelectedValue] = React.useState('fashion');

  // const handleRadioChange = (e,category) => {
  //   setSelectedValue(e.target.value);
  //   getSortParams("category", category);
  //   setActiveSort_twelve(e);
  // };

  return (
    <div className="sidebar-widget mt-10 mb-10">
      <h4 className="pro-sidebar-title">Categories</h4> 
      <div className="sidebar-widget-list mt-10">
        {categories ? (
          <FormControl component="fieldset">
            <RadioGroup aria-label="category" name="category" className= {classes.radioGroup} value={selectedValue}>
  
              {categories.map((category, key) => {
                return (
                  <FormControlLabel                  
                    key={key} 
                    value= {category} 
                    label={<Typography variant="h5" className = {classes.formControlLabel}>{category}</Typography>} 
                    control={<Radio color="default" size="small"    className={classes.radiostyle}  
                    onChange={e => {
                      setSelectedValue(e.target.value);
                      getSortParams("category", category);
                      setActiveSort_twelve(e);
                    }}/>}  
                  />
                );
              })}
              </RadioGroup>
          </FormControl>
        ) : (
          "No categories found"
        )}
        </div>
   
    </div>
  );
};

ShopCategoriesTwelve.propTypes = {
  categories: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopCategoriesTwelve;
