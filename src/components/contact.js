import React from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import swal from 'sweetalert2';
import{ init } from 'emailjs-com';
init("user_hEx4K6AQOjllIv40nYfyL");

export default function Contact() {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID = 'service_71qm0xo', process.env.REACT_APP_EMAILJS_TEMPLATE_ID = 'template_hw9p3ht',
        e.target, process.env.REACT_APP_EMAILJS_USER_ID = 'user_hEx4K6AQOjllIv40nYfyL')
        .then((result) => {
            console.log(result.text);
            swal.fire(
                'Message sent',
                'Lisette will get back to you as soon as possible!',
                'success'
            )
        }, (error) => {
            console.log(error.text);
            swal.fire(
                'Message error',
                error.text,
                'error'
            )
        });
        e.target.reset()
}

  return( 
    <div>
      <h1 className='contact'>Contact Us</h1>
      <div id="contact-container">
        <div className="contact-info">
          <h4>
            Contact Information
          </h4>
          <p className="alt">Fill up the form and our team will get back to you!</p>
            <div className="icon-text">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span className="info">+ 372 50 21 770</span>
            </div>
            <div className="icon-text">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span className="info">bachata.studio.tallinn@gmail.com</span>
            </div>
            <div className="icon-text">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span className="info">Veerenni 29/1, Tallinn 10135</span>
            </div>
            <div className="social-media">
              <a href="https://www.facebook.com/BachataStudioTallinn" className="icon-circle">
                <i class="fa fa-facebook-official" style={{color:'black'}} aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/bachatastudiotallinn/" className="icon-circle">
                <i class="fa fa-instagram" style={{color:'black'}} aria-hidden="true"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCG9vMivwJAl7kCJf78-WypQ" className="icon-circle">
                <i class="fa fa-youtube" style={{color:'black'}} aria-hidden="true"></i>
              </a>
            </div>
        </div>
        <form id="form" onSubmit={handleFormSubmit}>
          <div className="col">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name='user_name'/>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name='user_name'/>
            </div>
            </div>
              <div className="form-group-mail">
                <label>E-Mail</label>
                <input type="email" name='user_email'/>
              </div>
              <div className="form-group-message">
                <label className="message">Message</label>
                <textarea name='user_message'></textarea>
              </div>
              <div className="form-group-message">
                <button className="message-button" id="button">Send Message</button>
              </div>      
        </form>
      </div>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
      <script type="text/javascript">
        (function() {
          emailjs.init("user_hEx4K6AQOjllIv40nYfyL")
          })();
      </script>
    </div>
  );
}