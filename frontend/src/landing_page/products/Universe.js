import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>

        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* First Row */}
        <div className="col-md-4 col-12 p-3 mt-4">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid universe-logo"
          />
          <p className="text-muted mt-3">Thematic investment platform</p>
        </div>

        <div className="col-md-4 col-12 p-3 mt-4">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="img-fluid universe-logo"
          />
          <p className="text-muted mt-3">Algo &amp; strategy platform</p>
        </div>

        <div className="col-md-4 col-12 p-3 mt-4">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid universe-logo"
          />
          <p className="text-muted mt-3">Options trading platform</p>
        </div>

        {/* Second Row */}
        <div className="col-md-4 col-12 p-3 mt-4">
          <img
            src="media/images/zerodhaFundHouse.png"
            alt="Zerodha Fund House"
            className="img-fluid universe-logo"
          />
          <p className="text-muted mt-3">Asset management</p>
        </div>

        <div className="col-md-4 col-12 p-3 mt-4">
          <img
            src="media/images/goldenPiLogo.png"
            alt="GoldenPi"
            className="img-fluid universe-logo"
          />
          <p className="text-muted mt-3">Bonds trading platform</p>
        </div>

        <div className="col-md-4 col-12 p-3 mt-4">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="img-fluid universe-logo"
          />
          <p className="text-muted mt-3">Insurance</p>
        </div>

        {/* Signup Button */}
        <div className="col-12 text-center mt-4 mb-5">
          <button className="btn btn-primary universe-btn" type="button">
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
