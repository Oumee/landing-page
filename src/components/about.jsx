import React from "react";

export const About = (props) => {
  return (
    <div id="about">
    <div className="intro" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
      <div className="overlay" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
        <div className="container" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text">
              <h1>
                {props.data ? props.data.title : "Loading"}
                
              </h1>
              <p>{props.data ? props.data.paragraph : "Loading"}</p>
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
