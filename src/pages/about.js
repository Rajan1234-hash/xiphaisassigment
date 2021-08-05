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
        width: "100%"
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "#345fbf"
    },
    title: {
        flexGrow: 1,
        float: "right"
    },
    navbar: {
        fontWeight: "bold",
        color: "black",
        letterSpacing: "1px"
    }, navbarheader: {
        fontSize: "13px !important"
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div className={classes.root + "  px-0 "} >
            <div className="row px-md-5 px-2 py-md-4 py-3">
                <div className="col-md-12">
                    <div className="linebar"></div>
                </div>
                <div className="col-md-12">
                    <h1>
                        <span class="main-text"> About Us <span class="reflection">About Us</span> </span>
                    </h1>
                </div>
                <div className="col-md-6">

                    <div class="blue-gradient-bg">
                        <p>
                            XIPHIAS Software Technologies Pvt. Ltd. is a leading Touch Screen Kiosk manufacturing company in India that provides a turnkey solution to its users, including hardware and software as an embedded solution. The company has successfully marked its presence by offering Cloud-based ERP and CRM Software services, Website Designing and Development, Android and iOS Mobile Applications and On-Job Training Program.XIPHIAS Solutions incorporate Cloud-based web solutions in the form of Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS) and Data Analytics as a Service (DAaaS).
                                <br></br> Any Time Payment (ATP) Kiosk is our flagship product that facilitates people to pay their utility bills from the physically installed kiosk.
                                <br></br><span className="float-right d-flex" style={{ alignItems: "baseline" }}><div className="linebar" style={{ width: "140px" }}></div> <span class="font-weight-bold pl-2"> Read More </span></span>
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                <div id="carouselExampleIndicators" class="carousel slide mt-3" data-ride="carousel">
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block " src="https://www.xiphiastec.com/homepage/images/background/ui_landingpage_mercury.png" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block " src="https://www.xiphiastec.com/homepage/images/background/product-3.jpg" alt="Second slide" />
    </div>	
    <div class="carousel-item">
      <img class="d-block "  src="https://www.xiphiastec.com/homepage/images/background/product-5.jpg" alt="Third slide" />
    </div>
    
  </div>
  
</div>
    
                </div>
            </div>
        </div>
    );
}
