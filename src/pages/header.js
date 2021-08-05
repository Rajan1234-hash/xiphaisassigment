import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"100%"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    float:"right"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root+" header-bg px-md-5 px-0"} style={{background:"linear-gradient(180deg,#3561bf 10%,#223f7a 99%)"}} >
      <div position="static" className="px-md-2 px-0 " >
        <Toolbar className="row">
            <div className="col-md-3">
            <select name="cars" id="cars" className=" language">
            <option>Select Language</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
            </div>
            
            <span className="col-md-4 offset-md-3 text-right pr-md-0">
              <span class="pop-up1"> <i className="fa fa-handshake-o custom-icon"></i> PARTNER US |  </span>
            <span class="pop-up1"> <i className="fa fa-question-circle custom-icon" ></i> ENQUIRY | </span> 
            <span class="pop-up1"> <i className="fa fa-thumbs-o-up custom-icon" ></i> SUPPORT</span>
         
              </span>
          <Typography className="social col-md-2 pl-md-0">
              
              <span class="social-cube">
          <i class="fa fa-facebook "></i>
            </span>
          <span class="social-cube">
          <i class="fa fa-twitter"></i>
            </span>
            
            <span class="social-cube">
            <i class="fa fa-linkedin"></i>
            </span>
            <span class="social-cube">
            <i class="fa fa-instagram"></i>
            </span>
           
          </Typography>
        </Toolbar>

        </div>

      </div>
  );
}
