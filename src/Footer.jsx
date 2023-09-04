import './Footer.css'
function Footer()
{
    return (
        <>
        <div className="footer">
           <div className="vertical-line"></div>
             <div className="company-box">
                <h4>Company</h4>
                <p>About Us</p>
                <p>Team</p>
                <p>Careers</p>
                <p>Blog</p>
             </div>
             <div className="contact-box">
                <h4>Contact</h4>
                <p>Help & Support</p>
                <p>Partner with us</p>
                <p>Ride with us</p>
            </div>
            <div className="legal-box">
                <h4>Legal</h4>
                <p>Terms & Conditions</p>
                <p>Refund & Cancellation</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
            </div>
        <div className="follow">
                <h4>FOLLOW US</h4>
                  <div className="social-icon">
                    <i className="fa-brands fa-instagram" style={{color: '#f5f5f5'}}></i>
                    <i className="fa-brands fa-facebook" style={{color: '#f5f5f5'}}></i>
                    <i className="fa-brands fa-twitter" style={{color: '#f5f5f5'}}></i>
                  </div>
                  <div className="input-email">
                   <h4>Receive exclusive offers in your mailbox</h4>
                  </div>
                  <div className="email-box">
                    <span></span>
                     <i className="fa-solid fa-envelope" style={{color: '#adadad'}}></i>

                     <input type="text" name="" placeholder="Enter your Email" />
                  
                <button id="btn4">
                    <div style={{display: 'flex' ,flexDirection: 'row', width:  ' max-content'}}>
                      Subscribe
                    </div>
                </button>
                </div>
        </div>
      <div className="vertical-line"></div>
      
      <h5 className="rights">
        All rights Reserved
        <i className="fa-regular fa-copyright" style={{color: '#ffffff'}}></i>
      </h5>
    </div>
        
        
        
        
        </>
    )
}

export default Footer