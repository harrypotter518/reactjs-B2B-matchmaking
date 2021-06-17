import PropTypes from "prop-types";
import React from "react";
// import { setActiveSort_twelve } from "../../helpers/product_twelve";
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

const title="Import Amounts";
const data = [
  {
    id: "1",
    value: "Show All"
  },
  {
    id: "2",
    value: "0-5000 units/month"
  },
  {
    id: "3",
    value: "5000-10000 units/month"
  },
  {
    id: "4",
    value: "5000-10000 units/month"
  },
  {
    id: "5",
    value: "10000-100000 units/month"
  },
  {
    id: "6",
    value: "100000-500000 units/month"
  }
];

const ShopImportAmount = ({ getSortParams }) => {
  const classes =useStyles();
  const [selectedValue, setSelectedValue] = React.useState('1');

  return (
    <div className="sidebar-widget mt-10 mb-10">
      <h4 className="pro-sidebar-title">{title}</h4>  
      <div className="sidebar-widget-list mt-10">
          <FormControl component="fieldset">
            <RadioGroup aria-label="category" name="category" className= {classes.radioGroup} value={selectedValue}  >
  
              {data.map(datum => {
                return (
                  <FormControlLabel                  
                    key={datum.id} 
                    value= {datum.id} 
                    label={<Typography variant="h5" className = {classes.formControlLabel}>{datum.value}</Typography>} 
                    control={<Radio color="default" size="small"    className={classes.radiostyle}  
                    onChange={e => {
                      setSelectedValue(e.target.value);
                      // getSortParams("category", category);
                      // setActiveSort_twelve(e);
                    }}/>}  
                  />
                );
              })}
              </RadioGroup>
          </FormControl>        
      </div>
    
    </div>
  );
};

ShopImportAmount.propTypes = {

  getSortParams: PropTypes.func
};

export default ShopImportAmount;
