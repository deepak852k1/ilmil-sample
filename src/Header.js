import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




function Header() {
  



  return (
    <div className="header">
     
        <img
          className="header__logo"
          src="https://ilmil.com/wp-content/uploads/2019/09/logo.png"
        />
      

      <div className="header__search">
        
      </div>

      <div className="header__nav">
        
          <div  className="header__option">
            <span className="header__optionLineOne">Courses </span>
           
          </div>
        

       
          <div className="header__option">
            <span className="header__optionLineOne">About us</span>
            
          </div>
       
        

        <div className="header__option">
          <span className="header__optionLineOne">Contact us</span>
          
        </div>

        
          <div className="header__optionBasket">
            <AccountCircleIcon />
            <span className="header__optionLineTwo header__basketCount">
              
            </span>
          </div>
        
      </div>
    </div>
  );
}

export default Header;