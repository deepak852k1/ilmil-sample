import React from "react";
import "./Header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
       <Link to='/'>
          <img
            className="header__logo"
            src="https://ilmil.com/wp-content/uploads/2019/09/logo.png"
          />
        </Link>
       <div className="header__search">

        </div>

      <div className="header__nav">
        
          < div  className="header__option">
            <span className="header__optionLineOne"><Link to='/Courses'style={{ color: '#FFF' }}>Courses </Link></span>
            </div>
            <div className="header__option">
            <span className="header__optionLineOne">About us</span>
            
          </div>
          <div className="header__option">
          <span className="header__optionLineOne">Contact us</span>
          
        </div>

        
          <div className="header__optionaccount">
            <AccountCircleIcon />
            <span className="header__optionLineTwo header__basketCount">
              
            </span>
          </div>
        
      </div>
    </div>
  );
}

export default Header;
          
        

       
          
       
        

        