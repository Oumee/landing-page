import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";


export const Contact = (props) => {

  return (
    <div id="contact" style={{ padding: 0, height: '400px', textAlign: 'center' }}>
      <div className="intro" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
        <div className="overlay" style={{ padding: 0, height: '700px', textAlign: 'center' }}>
          <div className="container" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
            <div className="row text-center">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <div className="contact-item">

                  <p>
                    <span>
                      <i className="fa fa-map-marker"></i> Address
                    </span>
                    <br>
                    </br>
                    {props.data ? props.data.address : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> Email
                    </span>{" "}
                    {props.data ? props.data.email : "loading"}
                  </p>
                  <a
                  href="https://kristofferseninvest.dk/register"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  S'inscrire
                </a>
                <div className="footer"> 
                <ul className="social">
                      <li>
                        <a href={props.data ? props.data.facebook : "/"}>
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href={props.data ? props.data.twitter : "/"}>
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href={props.data ? props.data.youtube : "/"}>
                          <i className="fa fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                    </div>
                </div>

              </div>
             

             
          </div>
          
        </div>
      </div>
    </div>
  </div >

    
   );
};
