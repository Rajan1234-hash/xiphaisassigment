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
                        <span class="main-text pr-4"> What We Do <span class="reflection">What We Do</span> </span>
                    </h1>
                    <p class="ambic-header"> With an expertise in software development and hardware engineering, XIPHIAS manufactures the widest range of Kiosks for different verticals, ERP and CRM software products and Web and Mobile App Development. The company offers a sophisticated range of customized kiosks within industry standards and specifications as per requirements.</p>
                </div>

                <div className="col-md-4 offset-md-2 ">
                <sapn target="_blank">
                                <div class="team-container-sub hoverable">
                                    <h4>XPay</h4>
                                    <p class="job-title"></p>
                                    <p class="description py-1">X-Pay is a unified multi-utility bill payment ecosystem based on Blockchain enabled digital transaction framework. The app incorporates all payment modes such as cards, e-wallets, Net-Banking etc.</p> <img src="https://www.xiphiastec.com/homepage/images/pro/xpay-image.jpg" alt="team image" />
                                </div>
                            </sapn>
                </div>
                <div className="col-md-4 ">
                <sapn target="_blank">
                                <div class="team-container-sub hoverable">
                                    <h4>SOIL Testing Kiosk</h4>
                                    <p class="job-title"></p>
                                    <p class="description py-1"> Self-Service Touch Screen Kiosk for automated soil testing provides quick soil analysis, soil fertility management and gives the recommendation on the correct dosage of fertilizers required for specified yield.</p>
                                    <p></p> <img src="https://www.xiphiastec.com/homepage/images/pro/soil-tester.png" alt="team image" />
                                </div>
                            </sapn>
                </div>

                <div className="col-md-4 ">
                <span  target="_blank">
                                <div class="team-container-sub hoverable">
                                    <h4> Touch Screen <br></br>Kiosk</h4>
                                    <p class="job-title"></p>
                                    <p class="description"> <b>IOT</b> based <b>Touch Screen Kiosk</b> is expertly configured self service solution that is made sturdy and secure to work even in hazardous environments, which is also capable of collecting secure digital payments.</p> <img src="https://www.xiphiastec.com/homepage/images/pro/kiosk-image.jpg" alt="team image" />
                                </div>
                            </span>
                </div>
                <div className="col-md-4 ">
                <span target="_blank">
                                <div class="team-container-sub hoverable">
                                    <h4>ERP/CRM Software Solutions</h4>
                                    <p class="job-title"></p>
                                    <p class="description"> Integrating AMBIC Model into ERP and CRM based software solutions create a highly secure collaboration platform within which system of records can be freely shared with trusted parties/stakeholders.</p> <img src="https://www.xiphiastec.com/homepage/images/pro/crm-image.jpg" alt="team image" />
                                </div>
                            </span>
                </div>
                <div className="col-md-4">
                <sapn target="_blank">
                                <div class="team-container-sub hoverable">
                                    <h4>Web &amp; Mobile App Development</h4>
                                    <p class="job-title"></p>
                                    <p class="description"> Transform your business and take it to unsurpassed heights with our trusted web development and designing services. Our team of experts ensure integrated operations and smooth functioning.</p> <img src="https://www.xiphiastec.com/homepage/images/pro/cloud-image.jpg" alt="team image" />
                                </div>
                            </sapn>
                </div>
                 </div>
        </div>
    );
}
