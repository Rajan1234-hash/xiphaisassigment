import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OwlCarousel from 'react-owl-carousel';
import $ from "jquery"
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
        "image":"https://www.xiphiastec.com/images/product/product-2.jpg",
        "title":"LMS"
        },
        {
            "image":"https://www.xiphiastec.com/images/product/product-3.jpg",
            "title":"HRMS"
            },
            {
                "image":"https://www.xiphiastec.com/images/product/product-4.jpg",
                "title":"ATP"
                },
                {
                    "image":"https://www.xiphiastec.com/images/product/product-1.jpg",
                    "title":"VMK"
                    },
                    {
                        "image":"https://www.xiphiastec.com/images/product/product-5.jpg",
                        "title":"ATSI"
                        }
   ]
   

    return (
        <div className={classes.root + " product px-0 "} >
            <div class="overlay"></div>
            <div className="row px-md-5 px-2 py-md-4 py-3">
                
                <div className="col-md-12 text-center">
                
                    <h1>
                        <div className="linebar m-auto" style={{width:"250px"}} ></div>
                        <span class="main-text pr-4">  Products and Services Offered  <span class="reflection"> Products & Services</span> </span>
                    </h1>
                    <p class="ambic-header">XIPHIAS powers digital transformation through products and services designed to reinvent your business and portfolio. We capably combine the business and industry insights to drive the growth of your business.</p>
                </div>
              
                 </div>
                 <div class="row news-container px-md-5 mx-md-5 px-3 mx-0" >
                 <OwlCarousel  className='owl-theme' loop margin={10} nav={false} autoplay={true} dots={false}>
    {item.map((item,i)=>{
       return(
        <div class='item'>
        <div class="card">
                                <img class="card-img-top" src={item.image} alt="Card image cap" />
                                <div class="card-body">
                                    <h6>{item.title}</h6>
                                    <div class="small-details"> <span>Any Time Student Information</span></div>
                                    <hr></hr>
                                    <p class="card-text">XIPHIAS offers end to end solution which helps the institution in proper functioning depending upon the workflow of each department. Its built on blockchain technology which is the most secure payment option for digital transactions.</p> 
                                    <span class="text-transparent d-flex float-right" target="_blank" style={{alignItems:"baseline"}} > <div className="linebar" style={{ width: "60px" }}></div><span class="font-weight-bold pl-2"> Read More </span></span>
                                </div>
                            </div>
        </div>
       )
    })}
    
    
</OwlCarousel>
                  </div>
        </div>
    );
}
