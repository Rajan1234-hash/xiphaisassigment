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
        "image":"https://www.xiphiastec.com/images/awards/India_500-1.jpg",
        "title":"India 500 Most Promising IT "
        },
        {
            "image":"https://www.xiphiastec.com/images/awards/national-excellence-award.jpg",
            "title":"National Excellence Award"
            },
            {
                "image":"https://www.xiphiastec.com/images/awards/award-image.jpg",
                "title":" Asia Brand Excellence"
                },
                {
                    "image":"https://www.xiphiastec.com/images/awards/award-certificate-2017.jpg",
                    "title":" Asia Brand Excellence"
                    },
                    
   ]

    return (
        <div className={classes.root + " product px-0 "} >
            <div class="overlay"></div>
            <div className="row px-md-5 px-2 py-md-4 py-3">
                
                <div className="col-md-12 text-center">
                
                    <h1>
                        <div className="linebar m-auto" style={{width:"250px"}} ></div>
                        <span class="main-text pr-4">   Awards & Recognition  <span class="reflection">  Awards & Recognition</span> </span>
                    </h1>
                    <p class="ambic-header">Of all our awards and accomplishments, we take pride in our dedication, performance and innovation. We are truly honored to be recognized for our success as we continue our journey.</p>
                </div>
              
                 </div>
                 <div class="row news-container px-md-5 mx-md-5 px-3 mx-0" >
                 <OwlCarousel className='owl-theme' loop margin={10} nav={false} autoplay={true} dots={false} items={4}>
                        {item.map((item,i)=>{
                        return(
                            <div class='item'>
                            <div class="card">
                                <img class="card-img-top" src={item.image} alt="Card image cap" />
                                <div class="card-body">
                                    <div class="small-details"> <span>{item.title}</span></div>
                                    <hr></hr>
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
