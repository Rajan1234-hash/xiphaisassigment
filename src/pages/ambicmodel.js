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
        <div className={classes.root + " main-team px-0 "} >
            <div class="overlay"></div>
            <div className="row px-md-5 px-2 py-md-4 py-3">
                
                <div className="col-md-12 text-center">
                
                    <h1>
                        <div className="linebar m-auto" style={{width:"250px"}} ></div>
                        <span class="main-text pr-4"> AMBIC Model <span class="reflection">AMBIC Model</span> </span>
                    </h1>
                    <p class="ambic-header">AMBIC Model secures the digital infrastructure protecting against cyber-attacks and threats, verifies the authenticity or the trade status of products by thoroughly tracking them from their origin without ever having to explicitly trust anyone in the network.</p>
                </div>

                <div className="col-md-4 single-about-container">
                <div class="row">
                            <div class="col-4 about-image"> <img class="img-fluid" src="https://www.xiphiastec.com/homepage/images/svg/Artificial_intelligence.png" alt="Png Icon" /></div>
                            <div class="col-8 text-center about-content">
                                <h4 class="text-transparent main-gradient-bg">AI &amp; Robotics</h4>
                                <ul class="model list quick point">
                                    <li>AI-based Predictive Analytics</li>
                                    <li>Automating Business Process Activity</li>
                                    <li>Robotics Secure Hash Data Management</li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div className="col-md-4 single-about-container">
                <div class="row">
                            <div class="col-4 about-image"> <img class="img-fluid" src="https://www.xiphiastec.com/homepage/images/svg/Mobility.png" alt="Png Icon" /></div>
                            <div class="col-8 text-center about-content">
                                <h4 class="text-transparent main-gradient-bg"> Mobility</h4>
                                <ul class="model list quick point">
                                    <li>Improved Omni-channel Interaction</li>
                                    <li>Real-time Data Tranfer</li>
                                    <li>Smart P2P Digital Transformation</li>
                                </ul>
                            </div>
                        </div>
                </div>

                <div className="col-md-4 single-about-container">
                <div class="row">
                            <div class="col-4 about-image"> <img class="img-fluid" src="https://www.xiphiastec.com/homepage/images/svg/Block%20Chain.png" alt="Png Icon" /></div>
                            <div class="col-8 text-center about-content">
                                <h4 class="text-transparent main-gradient-bg">Blockchain</h4>
                                <ul class="model list quick point">
                                    <li> Secure Hash: P2P transfers and payment</li>
                                    <li>More efficient business relation through self-executing smart contracts</li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div className="col-md-4 offset-md-2  single-about-container ">
                <div class="row">
                            <div class="col-4 about-image"> <img class="img-fluid" src="https://www.xiphiastec.com/homepage/images/svg/IOT.png" alt="Png Icon" /></div>
                            <div class="col-8 text-center about-content">
                                <h4 class="text-transparent main-gradient-bg">IoT</h4>
                                <ul class="model list quick point">
                                    <li>Analytics As-is &amp; “To-Be” state roadmap</li>
                                    <li>Integration of structured and unstructured data</li>
                                    <li> Integrated IoT Data</li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div className="col-md-4 single-about-container">
                <div class="row">
                            <div class="col-4 about-image"> <img class="img-fluid" src="https://www.xiphiastec.com/homepage/images/svg/Cloud.png" alt="Png Icon" /></div>
                            <div class="col-8 text-center about-content">
                                <h4 class="text-transparent main-gradient-bg">Cloud</h4>
                                <ul class="model list quick point">
                                    <li>Public, Hybrid &amp; Multi-Cloud for Cloud adoption</li>
                                    <li>Creating Customer-Centric Digital Ecosystem</li>
                                    <li> Cloud Adoption Strategy</li>
                                </ul>
                            </div>
                        </div>
                </div>
                 </div>
        </div>
    );
}
