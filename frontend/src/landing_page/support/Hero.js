import React from "react";

function Hero() {
  return (
    <section className="bg-light py-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h2 fw-semibold text-dark mb-0">Support Portal</h1>
          <a href="/support" className="btn btn-primary rounded-1 px-3 py-2">
            My tickets
          </a>
        </div>
        <div className="input-group bg-white border rounded-1">
          <span className="input-group-text bg-white border-0 ps-4">
            <i
              className="fa-solid fa-magnifying-glass text-secondary"
              aria-hidden="true"
            />
          </span>
          <input
            type="search"
            className="form-control border-0 shadow-none py-3"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
            aria-label="Search support topics"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
