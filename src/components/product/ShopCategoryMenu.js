import PropTypes from "prop-types";
import React from "react";
// import { setActiveSort_twelve } from "../../helpers/product_twelve";
// import { makeStyles } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
// const useStyles = makeStyles((theme) => ({
//   formControlLabel:{   
//     fontFamily: 'lato',
//     fontSize: '15px',
//     fontColor:'#1d252d',
//     margin:'0px!important',  
//     padding:'0px!important',    
//   },
//    radiostyle:{
//     paddingBottom:'0px',
//     paddingTop:'0px',
//    }
// }));


const useStyles = makeStyles({
  root: {
    height: 'auto',
    flexGrow: 1,
    width:'auto',
    // maxWidth: 500,
    marginLeft:'-1vw',
    fontFamily: 'lato',
    fontSize: '15px',
    fontColor:'#1d252d',
    backgroundColor:'#fdfdfd',
    whiteSpace:'pre-line',
    paddingBottom:'15px',
    borderBottom:'1px solid #e1e1e1'  
    // wordBreak: 'break-all' 
  },
  formControlLabel:{   
    fontFamily: 'lato',
    fontSize: '15px',
    fontColor:'#1d252d',
    margin:'0px!important',  
    padding:'0px!important',    
  },
}); 



const ShopCategoryMenu = ({ categories, getSortParams }) => {

  // const [selectedValue, setSelectedValue] = React.useState('fashion');

  // const handleRadioChange = (e,category) => {
  //   setSelectedValue(e.target.value);
  //   getSortParams("category", category);
  //   setActiveSort_twelve(e);
  // };
  const classes = useStyles();
  const renderTree = (nodes) => (
    <TreeItem className={classes.treeItem} key={nodes.id} nodeId={nodes.id} label={
      <Typography variant="h5" className = {classes.formControlLabel}>{nodes.name}</Typography>}>      
        {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
      
    </TreeItem>
  );

  return (
    <TreeView
    className={classes.root}
    defaultCollapseIcon={<ExpandMoreIcon />}
    defaultExpanded={['root']}
    defaultExpandIcon={<ChevronRightIcon />}
  >
    {renderTree(categories)}
  </TreeView>
  );
};

ShopCategoryMenu.propTypes = {
  categories: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopCategoryMenu;
