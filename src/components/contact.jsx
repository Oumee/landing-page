import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";


export const Contact = (props) => {

  return (
    <div id="contact" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
      <div className="intro" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
        <div className="overlay" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
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
                </div>

              </div>
              <div >
                <div className="footer">
                  <div className="social">
                    <ul>
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

      // <div id="contact" style={{ padding: 0, height: '500px', textAlign: 'center' }} >
      // <div className="intro" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
      //   <div className="overlay" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
      //     <div className="container" style={{ padding: 0, height: '500px', margin: 0, textAlign: 'center' }}>

      //   <div className="section-title">
      //     <h2>Contact</h2>    
      //   </div>

      //     <div >




      //   </div>
      // </div>
      // </div>
      // </div>
   );
};
