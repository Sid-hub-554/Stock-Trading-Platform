import React from "react";

const topics = [
  {
    title: "Account Opening",
    icon: "fa-plus-circle",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account Opening",
      "NRI Account Opening",
      "Charges at Zerodha",
      "Zerodha IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa-circle-user",
    links: [
      "Login credentials",
      "Your Profile",
      "Account modification",
      "Nomination",
      "Transfer and conversion of shares",
      "Closing your Zerodha account",
    ],
  },
  {
    title: "Kite",
    icon: "fa-gauge-high",
    links: [
      "Kite user manual",
      "How to place an order",
      "Order types",
      "Marketwatch",
      "Charts and indicators",
      "GTT orders",
      "Kite app and platform issues",
    ],
  },
  {
    title: "Funds",
    icon: "fa-indian-rupee-sign",
    links: [
      "Add funds",
      "Withdraw funds",
      "Fund transfer timelines",
      "Payment methods",
      "Funds not credited",
      "Ledger and fund statements",
    ],
  },
  {
    title: "Console",
    icon: "fa-bullseye",
    links: [
      "Console dashboard",
      "Reports and statements",
      "Profit and loss report",
      "Tax P&L",
      "Holdings and positions",
      "Corporate actions",
    ],
  },
  {
    title: "Coin",
    icon: "fa-circle-notch",
    links: [
      "Getting started with Coin",
      "Mutual fund investments",
      "SIP investments",
      "Redeeming mutual funds",
      "Mutual fund statements",
      "Coin app issues",
    ],
  },
];

const quickLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "Kite user manual",
  "Learn how to create a ticket",
];

function CreateTicket() {
  return (
    <section className="container py-5">
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="accordion" id="supportTopics">
            {topics.map((topic, index) => (
              <div
                className="accordion-item border rounded-0 mb-4"
                key={topic.title}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      index === 0 ? "" : "collapsed"
                    } bg-white shadow-none py-0 pe-3`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#topic-${index}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`topic-${index}`}
                  >
                    <span
                      className="d-flex align-items-center justify-content-center bg-light text-primary me-3"
                      style={{
                        width: "64px",
                        minWidth: "64px",
                        height: "52px",
                      }}
                    >
                      <i
                        className={`fa ${topic.icon} fs-5`}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="flex-grow-1 text-dark">{topic.title}</span>
                  </button>
                </h2>

                <div
                  id={`topic-${index}`}
                  className={`accordion-collapse collapse ${
                    index === 0 ? "show" : ""
                  }`}
                  data-bs-parent="#supportTopics"
                >
                  <div className="accordion-body py-3">
                    <ul className="mb-0 ps-5">
                      {topic.links.map((link) => (
                        <li className="mb-4 text-primary" key={link}>
                          <a
                            href="/support"
                            className="text-primary text-decoration-none"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="col-lg-4">
          <div
            className="p-3 ps-4 mb-3 border-start border-5 border-warning"
            style={{ backgroundColor: "#fff4e8" }}
          >
            <ul className="mb-0 ps-3">
              <li className="mb-2">
                <a href="/support" className="text-primary">
                  Current Takeovers and Delisting – October 2026
                </a>
              </li>
              <li>
                <a href="/support" className="text-primary">
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
            </ul>
          </div>

          <div className="border">
            <div className="bg-light px-3 py-2 fw-medium">Quick links</div>

            <div className="list-group list-group-flush">
              {quickLinks.map((link, index) => (
                <a
                  href="/support"
                  className="list-group-item list-group-item-action border-0 border-bottom rounded-0 py-3 text-primary"
                  key={link}
                >
                  {index + 1}. {link}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default CreateTicket;
