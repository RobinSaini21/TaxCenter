import React from "react";
import { Link } from "react-router-dom";
import "./ReturnFilingServices.css";

function ReturnFilingServices() {
  return (
    <div>
      <div class="container bootstrap snippets bootdeys">
        <h5 style={{ opacity: 0.5, margin: "20px" }}>
          INCOME-TAX RETURN FILING SERVICES
        </h5>
        <div class="row">
          <div class="col-md-4 col-sm-6 content-card h-50">
            <div class="card-big-shadow">
              <div
                class="card card-just-text"
                data-background="color"
                data-color="blue"
                data-radius="none"
              >
                <div class="content">
                  <h4 class="title" style={{ color: "black" }}>
                    Self IT Return Filing
                  </h4>
                  <p class="description" style={{ opacity: 0.5 }}>
                    Prepare your Income-tax Return yourself. Finish filing in
                    less than 15 minutes.
                  </p>
                </div>
                <div class="card-footer text-muted d-flex justify-content-center">
                  <Link className="Link_Route" to={"/dashboard"}>
                    START YOURSELF
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6 content-card h-50">
            <div class="card-big-shadow">
              <div
                class="card card-just-text"
                data-background="color"
                data-color="blue"
                data-radius="none"
              >
                <div class="content">
                  <h4 class="title" style={{ color: "black" }}>
                    Assisted IT Return Filing
                  </h4>
                  <p class="description" style={{ opacity: 0.5 }}>
                    Need assistance in filing your Income-tax return? Get your
                    Tax Return prepared by tax experts.
                  </p>
                </div>
                <div class="card-footer text-muted d-flex justify-content-center">
                  GET ASSISTANCE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReturnFilingServices;
