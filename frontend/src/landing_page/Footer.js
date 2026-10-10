import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row pt-5 pb-4 footer-top">
          <div className="col-lg-3 col-md-6 footer-brand">
            <img
              src="/media/images/logo.svg"
              alt="Zerodha"
              className="footer-logo"
            />

            <p className="copyright">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="social-icons">
              <a href="#" aria-label="X">
                <i className="fa-brands fa-x-twitter fa-"></i>
              </a>

              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>

            <hr />

            <div className="social-icons">
              <a href="#" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a href="#" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>

              <a href="#" aria-label="Telegram">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h6>Account</h6>
            <a href="#">Open an account</a>
            <a href="#">Minor demat account</a>
            <a href="#">NRI demat account</a>
            <a href="#">HUF demat account</a>
            <a href="#">Commodity</a>
            <a href="#">Dematerialisation</a>
            <a href="#">Fund transfer</a>
            <a href="#">MTF</a>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h6>Support</h6>
            <a href="#">Contact</a>
            <a href="#">Support portal</a>
            <a href="#">How to file a complaint?</a>
            <a href="#">Status of your complaints</a>
            <a href="#">Bulletin</a>
            <a href="#">Circular</a>
            <a href="#">Z-Connect blog</a>
            <a href="#">Downloads</a>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h6>Company</h6>
            <a href="#">About</a>
            <a href="#">Philosophy</a>
            <a href="#">Press &amp; media</a>
            <a href="#">Careers</a>
            <a href="#">Zerodha Cares (CSR)</a>
            <a href="#">Zerodha.tech</a>
            <a href="#">Open source</a>
            <a href="#">Referral program</a>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h6>Quick links</h6>
            <a href="#">Brokerage charges</a>
            <a href="#">Market holidays</a>
            <a href="#">Economic calendar</a>
            <a href="#">Calculators</a>
            <a href="#">Markets</a>
            <a href="#">Sectors</a>
            <a href="#">Gift Nifty</a>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className="footer-bottom-links">
          <a href="#">NSE</a>
          <a href="#">BSE</a>
          <a href="#">MCX</a>
          <a href="#">MSEI</a>
          <a href="#">Terms &amp; conditions</a>
          <a href="#">Policies &amp; procedures</a>
          <a href="#">Privacy policy</a>
          <a href="#">Disclosure</a>
          <a href="#">For investor's attention</a>
          <a href="#">Investor charter</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
