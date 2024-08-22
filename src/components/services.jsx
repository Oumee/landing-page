import React from "react";

export const Services = (props) => {
  return (
    <div id="services" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
     <div className="intro" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
        <div className="overlay" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
          <div className="container" style={{ padding: 0, height: '500px', margin: 0, textAlign: 'center' }}>
       <br></br>
       <br></br>
       <br></br>
        <div className="section-title">
          <h2>Pricing</h2>
        </div>
        <div className="row">
          tarifs <br />

          system de base : 0,00 dh
          {/* {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"} */}
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};
