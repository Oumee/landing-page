import React from "react";

export const Services = (props) => {
  return (
    <div id="services" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
    <div className="intro" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
      <div className="overlay" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
        <div className="container" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text">
               <p>Tarifs</p>  
            <br></br>
             <p> Système de base			0,00  dh
             </p>
             <a
                  href="https://kristofferseninvest.dk/register"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  S'inscrire
                </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
