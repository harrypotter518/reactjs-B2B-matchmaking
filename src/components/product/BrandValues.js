import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // formControl: {
  //   margin: theme.spacing(1),  
  // },
  formControlLabel:{   
    fontFamily: 'lato',
    fontSize: '15px',
    lineHeight: '23px',
    fontWeight: '400',
    color: '#1d252d',  
    margin:'0px!important',  
    padding:'0px!important',
    paddingLeft:'10px'
  },
  formGroup:{
    margin:'0px!important',
    padding:'0px!important',
    paddingBottom:'0px', 
    paddingLeft:'10px'
  },
  checkbox_size:{
    transform: "scale(0.8)",
    margin:'0px!important',
    padding:'0px!important',
  }
}));

const BrandValues = ({ getSortParams }) => {

  const classes = useStyles();
  const [state, setState] = React.useState({
    handmade: true,
    limited_production: false,
    not_on_amazon: false,
    not_on_taobao: false,
    organic: false,
    socially_responsible: false,
    sustainable: false,
    women_owned: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { handmade, limited_production, not_on_amazon, not_on_taobao, organic, socially_responsible, sustainable, women_owned} = state;

  return (
    <div className="sidebar-widget  mt-10 mb-5" style={{ marginBottom:'5px!important'}}>
      <h4 className="pro-sidebar-title"  style={{ marginBottom:'20px!important', paddingButtom:'10px'}}>Brand Values</h4>  
      <div className="sidebar-widget-list">
 
        <FormControl component="fieldset" className={classes.formControl} >
            <FormGroup className={classes.formGroup}>
              <FormControlLabel
                control={<Checkbox checked={handmade} className={classes.checkbox_size} color="default" onChange={handleChange} name="handmade"  />}
                label={<Typography variant="h5" className = {classes.formControlLabel}>Handmade</Typography>}             
              />
              <FormControlLabel
                control={<Checkbox checked={limited_production} className={classes.checkbox_size} color="default" onChange={handleChange} name="limited_production" />}
                label={<Typography variant="h5" className = {classes.formControlLabel}>Limited Production</Typography>} 
              />
              <FormControlLabel
                control={<Checkbox checked={not_on_amazon}  className={classes.checkbox_size} color="default" onChange={handleChange} name="not_on_amazon" />}
                label={<Typography variant="h5" className = {classes.formControlLabel}>Not on Amazon</Typography>}
              />
              <FormControlLabel
                control={<Checkbox checked={not_on_taobao}  className={classes.checkbox_size} color="default" onChange={handleChange} name="not_on_taobao" />}
                label={<Typography variant="h5" className = {classes.formControlLabel}>Not On Taobao</Typography>}
              />
              <FormControlLabel
                control={<Checkbox checked={organic}  className={classes.checkbox_size} color="default" onChange={handleChange} name="organic" />}
                label={<Typography variant="h5" className = {classes.formControlLabel}>Organic</Typography>}
              />
              <FormControlLabel
                control={<Checkbox checked={socially_responsible}  className={classes.checkbox_size} color="default" onChange={handleChange} name="socially_responsible" />}
                label={<Typography variant="h5" className = {classes.formControlLabel}>Socially Responsible</Typography>}
              />      
              <FormControlLabel
                control={<Checkbox checked={sustainable}  className={classes.checkbox_size} color="default" onChange={handleChange} name="sustainable" />}
                label={<Typography variant="h5" className = {classes.formControlLabel}>Sustainable</Typography>}
              />
              <FormControlLabel
                control={<Checkbox checked={women_owned}  className={classes.checkbox_size} color="default" onChange={handleChange} name="women_owned" />}
                label={<Typography variant="h5" className = {classes.formControlLabel}>Women Owned</Typography>}
              />
            </FormGroup>
        </FormControl>
      </div>
    
    </div>
  );
};

BrandValues.propTypes = {

  getSortParams: PropTypes.func
};

export default BrandValues;




