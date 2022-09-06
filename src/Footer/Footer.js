import React from 'react'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <div className='footer'>
      <footer class="footer-distributed">

<div class="footer-left">
    <img src="https://ilmil.com/wp-content/uploads/2019/09/logo.png" />
  <h3>About<span>Consultants Factory</span></h3>

  <p class="footer-links">
    <a href="#">Home</a>
    |
    <a href="#">Blog</a>
    |
    <a href="#">About</a>
    |
    <a href="#">Contact</a>
  </p>

  <p class="footer-company-name">© 2022 TMMS Solutions Pvt. Ltd.</p>
</div>

<div class="footer-center">
  <div>
    <i class="fa fa-map-marker"></i>
      <p><span> 2nd Floor, PVR Towers, BDA Layout BTM 4th Stage, 
       </span>
       Bengaluru, Karnataka 560076</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>+91 096062 37593</p>
  </div>
  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@Consultantsfactory.com">support@Consultantsfactory.com</a></p>
  </div>
</div>
<div class="footer-right">
  <p class="footer-company-about">
    <span>About the company</span>
    We are experts of IT management, and have a singular focus on IT management consultancy & workforce training. Such acute focus results in great services.</p>
  <div class="footer-icons">
    
    <a href="https://www.facebook.com/consultansfactory"><i class="fa fa-facebook"><FacebookIcon/></i></a>
    <a href="https://twitter.com/consultfactory"><i class="fa fa-twitter"><TwitterIcon /></i></a>
    <a href="https://www.instagram.com/consultantsfactory/?hl=en"><i class="fa fa-instagram"><InstagramIcon/></i></a>
    <a href="https://www.linkedin.com/company/consultants-factory/?originalSubdomain=in"><i class="fa fa-linkedin"><LinkedInIcon/></i></a>
    <a href="https://www.youtube.com/channel/UC6N9BXlbVNeTp51OD6FEu7g/videos?app=desktop"><i class="fa fa-youtube"><YouTubeIcon/></i></a>
  </div>
</div>
</footer>
    </div>
  )
}

export default Footer