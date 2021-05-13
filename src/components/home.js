import React from 'react';
import './home.css';

function Home() {
  return(
    <body>
      <title>Home Page</title>        
        <div>
          <img src="/images/home.jpg" alt="" className="background"/>
        </div>

        <section className="quote-container">
          <div className="quote-field">
            <p>"Great dancers are not great only because of their technique; they are great because of their passion."</p>
          </div>
        </section>

        <section className="info-container">
          <div className="info-field">
            <div class="row">
              <div class="column">
                <div class="card">
                  <div className="text-border">
                    <p>Bachata Couples</p>
                    <img src="/images/couplesdance-removebg-preview.png" alt="" className="dancers1"></img>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="card">
                <div className="text-border">
                  <p>Private classes</p>
                  <img src="/images/dancers-removebg-preview.png" alt="" className="dancers2"></img>
                </div>
                </div>
              </div>
              <div class="column">
                <div class="card">
                <div className="text-border">
                  <p>Events & parties</p>
                  <img src="/images/istockphoto-115056436-612x612-removebg-preview.png" alt="" className="dancers3"></img>

                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="home">
          <div className="container2">
            <div className="col-lg-7">
              <div id="map-container-google-11" className="z-depth-1-half map-container-6">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029.5857566527186!2d24.749270415992505!3d59.42330471052627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469294a324d62317%3A0x5c2a9054c9bd5ebe!2sVeerenni%2029%2F1%2C%2010135%20Tallinn!5e0!3m2!1set!2see!4v1610972106625!5m2!1set!2see"></iframe>
              </div>
              <br></br>      
            </div>    
          </div>
        </section>
       <div>
    </div>
  </body>
  );
}

export default Home;