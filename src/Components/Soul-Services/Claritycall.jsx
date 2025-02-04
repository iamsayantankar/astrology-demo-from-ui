import React from "react";

const Claritycall = () => {
  return (
    <>
      <div
        className="d-flex flex-column align-items-center justify-content-center text-center text-white py-5"
        style={{
          minHeight: "100vh",
        }}
      >
        {/* Top Image */}
        <div className="mb-4">
          <img
            src="./Images/soulfluent-icon-2.gif.png"
            alt="Top Icon"
            className="img-fluid"
            style={{ width: "150px", height: "auto" }}
          />
        </div>

        {/* Heading */}
        <h5 className="fw-light fst-italic mb-4">
          You are in the right place if:
        </h5>

        {/* List */}
        <ul
          className="list-unstyled text-start"
          style={{ height: "auto", padding: "16px" }}
        >
          <li className="mb-2 d-flex">
            <span role="img" aria-label="check">
              🔸
            </span>
            <span>You believe a better world is possible.</span>
          </li>
          <li className="mb-2">
            <span role="img" aria-label="check">
              🔸
            </span>{" "}
            <span>
              You’ve tried many approaches to doing business that left you
              tired, restless, and hungry for more.
            </span>
          </li>
          <li className="mb-2 d-flex">
            <span role="img" aria-label="check">
              🔸
            </span>{" "}
            <span>
              You know a better way of living, leading, and doing business is
              required to create lasting, positive change.
            </span>
          </li>
          <li className="mb-2">
            <span role="img" aria-label="check">
              🔸
            </span>{" "}
            <span>
              You crave more, and you’re ready to create it in a way that
              nourishes you.
            </span>
          </li>
          <li className="mb-2">
            <span role="img" aria-label="check">
              🔸
            </span>{" "}
            <span>
              You’re ready to express every part of yourself and move at a
              healthy pace.
            </span>
          </li>
          <li>
            <span role="img" aria-label="check">
              🔸
            </span>{" "}
            <span>
              You know that leading from your soul is the only way you want to
              lead.
            </span>
          </li>
        </ul>

        {/* Button */}
        <div className="mt-4">
          <button
            className="btn btn-sm btn-md-lg fw-bold text-white"
            style={{
              border: "none",
              borderRadius: "30px",
              padding: "10px 30px",
            }}
          >
            <img src="./Images/Link.png" alt="" style={{ width: "100%" }} />
          </button>
        </div>
      </div>

      {/* Quote with Image */}
      <div
        className="d-flex align-items-center justify-content-center py-4"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.17)",
          minHeight: "max-content",
        }}
      >
        <div className="container">
          <div
            className="d-flex align-items-center flex-column flex-md-row"
            style={{ gap: "48px" }}
          >
            {/* Left Side: Text Content */}
            <div style={{ flex: 1 }}>
              <div
                className="p-4 rounded"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.30)",
                  // width: "500px",
                }}
              >
                <p className="text-white fs-4  m-0 fw-bold">
                  <span className="fw-bold">Remember:</span>{" "}
                  <span className="fw-normal lh-lg">
                    if you’re feeling called to this work, you are in the right
                    place.
                  </span>
                </p>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="text-center">
              <img
                src="./Images/profile2.png"
                alt="Person"
                className="img-fluid rounded"
                style={{ maxHeight: "550px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Points Section */}

      <div
        className="position-relative d-flex align-items-center py-5"
        style={{
          minHeight: "100vh",
        }}
      >
        {/* Right Background Image */}
        <div
          className="position-absolute d-none d-md-block end-0 top-0"
          style={{
            backgroundImage: "url(./Images/image-52.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "right center",
            opacity: "0.56",
            width: "50%",
            height: "600px",
          }}
        ></div>

        {/* Main Content */}
        <div className="container position-relative">
          {/* Section Title */}
          <div className="text-start mb-4 bg-white" style={{ padding: "10px" }}>
            <h4 className="fw-normal" style={{ color: "#84054F" }}>
              These are the types of people who get the most out of my programs
              and achieve the best results:
            </h4>
          </div>

          {/* Content List */}
          <ul className="list-unstyled text-white">
            <li className="mb-3">
              <span role="img" aria-label="check">
                🔸
              </span>{" "}
              <span>
                <strong>Self-starters</strong> who have big goals and a deep
                belief in their ability to succeed.You do not wait to implement.
              </span>
            </li>
            <li className="mb-3">
              <span role="img" aria-label="check">
                🔸
              </span>{" "}
              <span>
                <strong>Visionary Entrepreneurs</strong> who believe their
                energy, frequency,and alignment are important to their overall
                success and have a strong spiritual core/foundation.
              </span>
            </li>
            <li className="mb-3">
              <span role="img" aria-label="check">
                🔸
              </span>{" "}
              <span>
                <strong>People who are willing to move on</strong> from the old
                ways they’ve done business (for example, to stop being the
                bottleneck) so they can succeed sustainably.
              </span>
            </li>
            <li className="mb-3">
              <span role="img" aria-label="check">
                🔸
              </span>{" "}
              <span>
                <strong>Successful businesswomen</strong> who have achieved
                great success in their industry and are looking to amplify their
                legacy and impact.
              </span>
            </li>
            <li>
              <span role="img" aria-label="check">
                🔸
              </span>{" "}
              <span>
                <strong>Seekers</strong> who are ready to learn who they truly
                are, what they truly want to experience, and who seek to do
                business from that place of being. People who have tried
                different approaches (who have been around the block) and are
                committed to honouring themselves by only doing business in a
                way that feels natural and true to them.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* last section */}
      <div
        className="d-flex align-items-center justify-content-center flex-column py-5"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.17)",
          minHeight: "max-content",
        }}
      >
        <div>
          {/* Heading */}
          <p className="text-white fs-5 mb-4 p-4">
            If this sounds like you, let’s discuss co-creating magic together.{" "}
            <br />
            Because <em>why wait</em> when the next step is calling?
          </p>
        </div>
        {/* Button */}
        <div>
          <button
            className="btn btn-lg fw-bold text-white"
            style={{
              border: "none",
              borderRadius: "30px",
              padding: "10px 30px",
            }}
          >
            <img src="./Images/Link.png" alt="" style={{ width: "100%" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Claritycall;
