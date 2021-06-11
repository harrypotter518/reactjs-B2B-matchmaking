import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutTwenty from "../../layouts/LayoutTwenty";
// import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginLeft:0,
    minWidth: 120,
    width:"100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const LoginRegisterEleven = ({ location }) => {
  const { pathname } = location;

  const classes = useStyles();
  const [accountType, setAccountType] = React.useState('');
  const handleChange = (event) => {
    setAccountType(event.target.value);
  };

  return (
    <Fragment>
      <MetaTags>
        <title>OpenAsia | Login</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Seller</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Login Register
      </BreadcrumbsItem>
      <LayoutTwenty
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible">
        {/* breadcrumb */}
        {/* <Breadcrumb /> */}
        <div className="login-register-area pt-130 pb-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                  type="text"
                                  name="user-name"
                                  placeholder="Username"
                                  className="form-control"
                                />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                                className="form-control"
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox"  />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                  </Link>
                                </div>
                                <Link to= {process.env.PUBLIC_URL + "/seller/SellerDashboard"}>
                                  <button type="submit">
                                    <span>Login</span>
                                  </button>
                                </Link>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">                     
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form >
                               
                                <div className="row">
                                  <div className="col-lg-12 col-md-12">
                                    <label>User Name</label>
                                    <input
                                      type="text"
                                      name="user-name"
                                      placeholder="User name"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                    <label>Password</label>
                                    <input
                                      type="password"
                                      name="user-password"
                                      placeholder="Password"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                    <label>Confirm Password</label>
                                    <input
                                      type="password"
                                      name="user-password"
                                      placeholder="Password"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                    <label>Email Address</label>
                                    <input
                                      name="user-email"
                                      placeholder="Email"
                                      type="email"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                    <label>Phone Number</label>
                                    <input
                                      name="user-phone"
                                      placeholder="Phone number"
                                      type="number"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <FormControl variant="outlined" className={classes.formControl}>
                                    <label>Account Type</label>
                                      <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={accountType}
                                        onChange={handleChange}
                                        style={{ height:"40px" }}
                                      >
                                          <MenuItem value="AF">I am a Seller/Manufacturer</MenuItem>
                                          <MenuItem value="AX">I am a Buyer/Distributor</MenuItem>
                                      </Select>
                                    </FormControl>
                                  </div>                                                           
                                  <div className="col-lg-12 col-md-12">
                                    <h4 style={{ color:'blue', marginTop:'1rem' }}>Step 1/2</h4>
                                    <div className="button-box" style={{ textAlign:"right"}}>
                                      <Link to={process.env.PUBLIC_URL + "/seller/LoginRegisterEleven2"}>
                                        <button type="submit">
                                          <span>Continue</span>
                                        </button>
                                      </Link>
                                    </div>
                                  </div>
                              </div>  
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutTwenty>
    </Fragment>
  );
};

LoginRegisterEleven.propTypes = {
  location: PropTypes.object
};

export default LoginRegisterEleven;
