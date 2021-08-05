import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
    <div className={classes.root+"  px-0 "} >
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://www.xiphiastec.com/images/banner/awards.jpg" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="	https://www.xiphiastec.com/images/banner/kiosk-banner.jpg" alt="Second slide" />
    </div>	
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.xiphiastec.com/images/banner/digital%20marketing.jpg" alt="Third slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.xiphiastec.com/images/banner/Web-Development.jpg" alt="forth slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.xiphiastec.com/images/banner/Product_services.jpg" alt="fifth slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      
      </div>
  );
}
