import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OwlCarousel from 'react-owl-carousel';
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
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


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
    const item =[
        {
         "image":"https://www.xiphiastec.com/images/iso_isms-footer.png",
         "title":"India 500 Most Promising IT "
         },
         {
             "image":"https://www.xiphiastec.com/images/QC100LOGO-footer.png",
             "title":"National Excellence Award"
             },
             {
                 "image":"https://www.xiphiastec.com/images/iso_footer.png",
                 "title":" Asia Brand Excellence"
                 },     
    ]
    return (
        <div className={classes.root + " product px-0 "} >
           <footer class="main-footer px-md-5 px-4">
               <div className="row px-md-5 px-0">
                   <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                        <h2>Group Company</h2>
                        <div class="footer-logo">
                        <a href="#"><img src="https://www.xiphiastec.com/images/xiphias-logo.png" alt="logo" width="200" /></a>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <h2>ISO CERTIFIED</h2>
                        <OwlCarousel className='owl-theme' loop margin={10} nav={false} autoplay={true} dots={false} items={1}>
                        {item.map((item,i)=>{
                        return(
                            <div class=''>
                            <div class="">
                                <img class="w-50" src={item.image} alt="Card image cap" width="60" />
                                
                            </div>
        </div>
       )
    })}
    
    
</OwlCarousel>
                        </div>
                        <div className="col-md-12">
                        <h2 class="info-txt">info</h2>
                        <div class="">
                                <p class="certification-txt"></p>
                                <p class="gst-info-txt">
                                    Bangalore GST : 29AAACX0437D1ZK | Ranchi GST : 20AAACX0437D1Z2
                                    <br></br> <a href="iso.html" class="iso_f"> Our Certification: ISO 9001:2015 &amp; ISO/IEC 27001:2005 </a>
                                </p>
                            </div>
                        </div>
                    </div>
                   </div>
                   <div className="col-md-3">
                   <h2>QUICK LINKS</h2>
                   <div class="widget-content">
                                    <ul class="list quick p-0" style={{listStyle:"none"}}>
                                        <li><a href="https://www.atsi.in/">XIPHIAS ATSI</a></li>
                                        <li><a href="https://www.xiphiasimmigration.com/">XIPHIAS IMMIGRATION</a></li>
                                        <li><a href="http://www.xiphiasprojects.com/">XIPHIAS PROJECTS</a></li>
                                        <li><a href="https://www.xpay.life">XPAY.LIFE</a></li>
                                        <li><a href="http://www.tys361.com/">XIPHIAS TYS361</a></li>
                                        <li><a href="any-time-payment-kiosk.html">XIPHIAS ATP</a></li>
                                        <li><a href="events.html">XIPHIAS EVENTS</a></li>
                                    </ul>
                                </div>
                   </div>
                   <div className="col-md-3">
                   <h2>OUR BLOG</h2>
                   <div class="footer-widget gallery-widget text-white">
                                <div class="blog_contener">
                                    <div class="marquee">
                                        <marquee direction="up" loop="true">
                                        <div id="title"><h2><a href="http://blogs.xiphiastec.com/2018/08/how-to-use-kiosk-in-health-care.html " target="_blank">How to use Kiosk in Health Care Departments?</a></h2></div>
                                    <span class="para">Posted By Webmaster XIPHIAS On 2018-08-07T00:05:57-07:00</span>
                                    <div class="comment pl-md-2 pl-2"><span>8<a href="http://blogs.xiphiastec.com/2018/08/how-to-use-kiosk-in-health-care.html#comments" >Comments</a></span><a href="https://xiphiaskiosk.blogspot.in/1715129584627456488 "></a></div>
                                    <div id="title"><h2><a href="http://blogs.xiphiastec.com/2018/08/how-to-use-kiosk-in-health-care.html " target="_blank">How to use Kiosk in Health Care Departments?</a></h2></div>
                                    <span class="para">Posted By Webmaster XIPHIAS On 2018-08-07T00:05:57-07:00</span>
                                    <div class="comment pl-md-2 pl-2"><span>8<a href="http://blogs.xiphiastec.com/2018/08/how-to-use-kiosk-in-health-care.html#comments" >Comments</a></span><a href="https://xiphiaskiosk.blogspot.in/1715129584627456488 "></a></div>
                                    <div id="title"><h2><a href="http://blogs.xiphiastec.com/2018/08/how-to-use-kiosk-in-health-care.html " target="_blank">How to use Kiosk in Health Care Departments?</a></h2></div>
                                    <span class="para">Posted By Webmaster XIPHIAS On 2018-08-07T00:05:57-07:00</span>
                                    <div class="comment pl-md-2 pl-2"><span>8<a href="http://blogs.xiphiastec.com/2018/08/how-to-use-kiosk-in-health-care.html#comments" >Comments</a></span><a href="https://xiphiaskiosk.blogspot.in/1715129584627456488 "></a></div>
                                    <div id="title"><h2><a href="http://blogs.xiphiastec.com/2018/08/how-to-use-kiosk-in-health-care.html " target="_blank">How to use Kiosk in Health Care Departments?</a></h2></div>
                                    <span class="para">Posted By Webmaster XIPHIAS On 2018-08-07T00:05:57-07:00</span>
                                    <div class="comment pl-md-2 pl-2"><span>8<a href="http://blogs.xiphiastec.com/2018/08/how-to-use-kiosk-in-health-care.html#comments" >Comments</a></span><a href="https://xiphiaskiosk.blogspot.in/1715129584627456488 "></a></div>
                                    <div id="title"><h2><a href="http://blogs.xiphiastec.com/2018/08/how-to-use-kiosk-in-health-care.html " target="_blank">How to use Kiosk in Health Care Departments?</a></h2></div>
                                    <span class="para">Posted By Webmaster XIPHIAS On 2018-08-07T00:05:57-07:00</span>
                                    <div class="comment pl-md-2 pl-2"><span>8<a href="http://blogs.xiphiastec.com/2018/08/how-to-use-kiosk-in-health-care.html#comments" >Comments</a></span><a href="https://xiphiaskiosk.blogspot.in/1715129584627456488 "></a></div>
                                    <div id="title"><h2><a href="http://blogs.xiphiastec.com/2018/08/how-to-use-kiosk-in-health-care.html " target="_blank">How to use Kiosk in Health Care Departments?</a></h2></div>
                                    <span class="para">Posted By Webmaster XIPHIAS On 2018-08-07T00:05:57-07:00</span>
                                    <div class="comment pl-md-2 pl-2"><span>8<a href="http://blogs.xiphiastec.com/2018/08/how-to-use-kiosk-in-health-care.html#comments" >Comments</a></span><a href="https://xiphiaskiosk.blogspot.in/1715129584627456488 "></a></div>
                                       
                                        </marquee>
                                   
                                        </div>
                                </div>
                            </div>
                       </div>
               </div>
                 </footer>
                 <div class="container-fluid footer-bottom-bg ">
            <div class="row py-md-2 py-2 px-0">
                
                    <div class="col-md-7">
                        <div class="copyright foot-copyright text-left">
                            <ul>
                                <li><a href="sitemap.html">Sitemap</a></li>
                                <li><a href="data-security.html">Data Security</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="refundpolicy.html">Refund policy</a></li>
                                <li><a href="disclaimer.html">Disclaimer</a></li>
                                <li><a href="Blog.html">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="copyright foot-copyright text-right">© Copy Right 2018-19 XIPHIAS Software Technologies</div>
                    </div>
               
            </div>
        </div>
      
        </div>
    );
}
