import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>Crafted with dedication and passion by Sujatha Kannan. Built using modern front-end technologies, including React. 
            <br/><br/>Thank you for visiting!</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">
            Subscribe
          </div>

        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Sujatha Kannan. All rights reserved.
        </p>
        <div className="footer-botom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect Wih Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer