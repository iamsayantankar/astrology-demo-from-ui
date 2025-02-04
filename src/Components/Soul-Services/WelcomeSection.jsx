import React from "react";

const WelcomeSection = () => {
  return (
    <section className="text-center py-5 " style={{ backgroundColor: "rgba(255, 255, 255, 0.17)" }}>
      <div className="container">
        {/* Circular Image */}
        <div className="d-flex justify-content-center mb-4">
          <div
            className="rounded-circle overflow-hidden"
            style={{
              width: "400px",
              height: "400px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src="./Images/Profile.png" 
              alt="Profile"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Welcome Text */}
        <p className="text-white ">
          Hello! I'm so glad you're here.
        </p>
        <p className="text-white text-center m-auto" style={{maxWidth: "600px"}}>
          Welcome to the place where every part of you is welcome, free to be
          expressed and celebrated. You can lay down your sword, pick up your
          wand, and exhale a deep sigh of pause and relief.
        </p>

        {/* Quote Section */}
        <div
          className="mx-auto p-3 mt-4"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "10px",
            maxWidth: "600px",
            color: "#84054F",
            fontFamily:"italic"
          }}
        >
          <h5>
            I work with freedom fighters, spiritual warriors, and visionary
            leaders who know a better world is not only possible but a part of
            their life’s mission to create.
          </h5>
        </div>

        {/* Bottom Text */}
        <p className="text-white mt-4 fw-bold">If this is you, keep reading.</p>
      </div>
    </section>
  );
};

export default WelcomeSection;
