import React from "react";

export const About = (props) => {
  return (
    <div id="about" style={{ padding: 0, textAlign: 'center', height: '500px' }}  >
      <div className="intro" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
        <div className="overlay" style={{ padding: 0, height: '500px', textAlign: 'center' }}>
          <div className="container" style={{ padding: 0, height: '500px', margin: 0, textAlign: 'center' }}>

            
              <div className="section-title">
                <h2>About Us</h2>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
