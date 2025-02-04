import React from "react";
import "../../assets/css/Soul-Services/coreOffer.css";

const CoreOffers = () => {
  return (
    <>
      <section style={{ margin: "60px 0px" }}>
        {/* Top Heading */}
        <div
          className="display-4 text-white text-center"
          style={{ marginTop: "150px", marginBottom: "50px" }}
        >
          Core Offers
        </div>

        <div
          className="justify-content-evenly d-flex d-md-block d-none align-items-center position-relative"
          style={{
            height: "100px",
            backgroundImage: "url('./Images/gold-line.jpg.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* <div className="circle-icon">
            <img
              src="./Images/sun-wh.gif.png"
              alt="Sun Icon"
              className="icon-img"
            />
          </div>
          <div className="circle-icon">
            <img
              src="./Images/sun-wh.gif.png"
              alt="Sun Icon"
              className="icon-img"
            />
          </div>
          <div className="circle-icon">
            <img
              src="./Images/sun-wh.gif.png"
              alt="Sun Icon"
              className="icon-img"
            />
          </div> */}
        </div>

        {/* Cards Portion */}
        <div
          className="cards-container container d-flex flex-column flex-md-row justify-content-around"
        >
          <div
            className="card"
            style={{
              // width: "18rem",
              flex: 1,
              borderRadius: "12px",
              backgroundImage:
                "linear-gradient(to bottom, #FFFFFFF2, #FF54B8F2)",
            }}
          >
            <div className="circle-icon">
              <img
                src="./Images/sun-wh.gif.png"
                alt="Sun Icon"
                className="icon-img"
              />
            </div>
            <div className="card-body" style={{ height: "260px" }}>
              <h3 className="card-title" style={{ color: "#84054F" }}>
                90 Minute Business Session
              </h3>
              <p className="card-text">
                Identify your next step to grow your business by aligning to
                your Soulfluent® Leadership Archetype.
              </p>
              <a href="#" className="card-link" style={{ color: "#6101A2" }}>
                Learn More
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{
              flex: 1,
              borderRadius: "12px",
              backgroundImage:
                "linear-gradient(to bottom, #FFFFFFF2, #FF54B8F2)",
            }}
          >
             <div className="circle-icon">
              <img
                src="./Images/sun-wh.gif.png"
                alt="Sun Icon"
                className="icon-img"
              />
            </div>
            <div className="card-body">
              <h3 className="card-title" style={{ color: "#84054F" }}>
                8-Week Intensive
              </h3>
              <p className="card-text">
                Design your comprehensive business roadmap to create the
                spacious lifestyle and business you’re craving.
              </p>
              <a href="#" className="card-link" style={{ color: "#6101A2" }}>
                Learn More
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{
              flex: 1,
              borderRadius: "12px",
              backgroundImage:
                "linear-gradient(to bottom, #FFFFFFF2, #FF54B8F2)",
            }}
          >
             <div className="circle-icon">
              <img
                src="./Images/sun-wh.gif.png"
                alt="Sun Icon"
                className="icon-img"
              />
            </div>
            <div className="card-body">
              <h3 className="card-title" style={{ color: "#84054F" }}>
                6-Month Mentorship
              </h3>
              <p className="card-text">
                Step into the next version of your business and legacy as you
                hone your CEO, Money & Leadership Mindset.
              </p>
              <a href="#" className="card-link" style={{ color: "#6101A2" }}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreOffers;
