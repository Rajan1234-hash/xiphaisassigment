import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"100%"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:"#345fbf"
  },
  title: {
    flexGrow: 1,
    float:"right"
  },
  navbar:{
      fontWeight:"bold",
      color:"black",
      letterSpacing: "1px"
  },navbarheader:{
    fontSize:"13px !important"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.root+"  px-md-5 px-0 border"} >
      <div position="static" className="px-md-2 px-0 ">
        <Toolbar className="row">
            <div className="col-md-2  col-8">
           <div className="d-flex">
           <img src={"https://www.xiphiastec.com/images/xiphias-logo.png"} alt="" width="60" />
            <span class="tag-line">
            <marquee width="100">Innovation Beyond Imagination</marquee>
            </span>
           </div>
            </div>
            
            <span className="col-md-9 text-right pr-md-0" id="navbarlist">
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.navbarheader}
           
            >
            <BottomNavigationAction label="HOME" className={classes.navbar}  />
            <BottomNavigationAction label="COMPANY" className={classes.navbar} />
            <BottomNavigationAction label="KIOSK" className={classes.navbar} />
            <BottomNavigationAction label="PRODUCT"  className={classes.navbar}/>
            <BottomNavigationAction label="WEB PROCESS" className={classes.navbar}/>
            <BottomNavigationAction label="CLIENTLE" className={classes.navbar} />
            <BottomNavigationAction label="TRAINING" className={classes.navbar} />
            <BottomNavigationAction label="CAREERS" className={classes.navbar}/>
            <BottomNavigationAction label="CONTACT US" className={classes.navbar}/>
        </BottomNavigation>
              </span>
          <Typography className="social col-md-1 col-4 pl-md-0">
              
              <span class="pr-md-2 pr-2 border-right">
              <i className="icon fa fa-search"></i>
            </span>
          <span class="social-cube">
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            </span>
          </Typography>
        </Toolbar>

        </div>

      </div>
  );
}
