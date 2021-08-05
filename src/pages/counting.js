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
        <div className={classes.root + " px-0 fact-counter"} >
        <section id="counter-section" class="service counter-section text-white section-bg-img" data-bg="homepage/images/bg/bg-3.jpg" style={{backgroundImage:"url(https://www.xiphiastec.com/homepage/images/bg/bg-3.jpg)"}}>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="row py-md-4 py-4 mt-md-5 mt-0">
                            <div class="col-md-6 col-xs-6 ">
                                <div class="counter-wrapper text-center">
                                    <div class="">
                                        <div class="icon-box img-fluid"><i class="fas fa-briefcase "></i></div>
                                    </div>
                                    <div class="counter-value ">
                                        <h4 class="mb-1"><span class="counter-up" data-count="220" style={{left:"250px"}}>121</span></h4>
                                    </div>
                                    <div class="counter-title">
                                        <p class="text-uppercase">SERVED VERTICALS</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xs-6 ">
                                <div class="counter-wrapper text-center">
                                    <div class="">
                                        <div class="icon-box img-fluid"><i class="fas fa-trophy "></i></div>
                                    </div>
                                    <div class="counter-value ">
                                        <h4 class="mb-1"><span class="counter-up" data-count="220" style={{left:"250px"}}>5720</span></h4>
                                    </div>
                                    <div class="counter-title">
                                        <p class="text-uppercase">SUCCESSFUL PROJECTS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row py-md-4 py-4">
                            <div class="col-md-6 col-xs-6 ">
                                <div class="counter-wrapper text-center">
                                    <div class="">
                                        <div class="icon-box img-fluid"><i class="fas fa-trophy "></i></div>
                                    </div>
                                    <div class="counter-value ">
                                        <h4 class="mb-1"><span class="counter-up" data-count="220" style={{left:"250px"}}>33</span></h4>
                                    </div>
                                    <div class="counter-title">
                                        <p class="text-uppercase">AWARDS WON</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xs-6 ">
                                <div class="counter-wrapper text-center">
                                    <div class="">
                                        <div class="icon-box img-fluid"><i class="fa fa-users "></i></div>
                                    </div>
                                    <div class="counter-value ">
                                        <h4 class="mb-1"><span class="counter-up" data-count="220" style={{left:"250px"}}>2492</span></h4>
                                    </div>
                                    <div class="counter-title">
                                        <p class="text-uppercase">NO OF EMPLOYEES</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                          </div>
                    
                    <div class="col-lg-6 col-md-12 ">
                        <div class="video-wrap wrap-stretch relative">
                            <div class="video-wrap-inner">
                                <div class="video-wrap-details">
                                    <div class="video-play-btn text-center">
                                        <div class="video-img">
                                            <img src="https://www.xiphiastec.com/homepage/images/video/video-img-2.jpg" class="video-new" alt="video-img-2" />
                                            <div class="video-content">
                                                <a class="popup-youtube box-shadow1" href="javascript:void(0);" data-target="#video" data-toggle="modal"> <img src="https://www.xiphiastec.com/homepage/images/video/play-img-light.png" class="play-btn" width="80" height="80" alt="play-img" /> </a>
                                                <h6 class="mt-4 pt-2 video1">TAKE A TOUR ABOUT OUR SERVICES</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>     
        </div>
    );
}
