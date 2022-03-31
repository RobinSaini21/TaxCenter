import React from "react";
import { Link } from "react-router-dom";

function SalaryIncome() {
  return (
    <div>
      <div class="container py-3">
        <div class="title h1 text-center"></div>

        <div class="card">
          <div class="row ">
            <div class="col-md-7 px-3">
              <div class="card-block px-6">
                <h4 class="card-title">Salary Income</h4>

                <p class="card-text">Please select the type of return</p>
                <div className="PanCa">
                  <p>
                    Is This a New/first (Original) Income-tax Return for the
                    Income earnd between 1st April 2020 and 31st 2021 that you
                    are filing this
                  </p>

                  <br />
                </div>
                <a
                  href="#"
                  class="mt-auto btn btn-new btn-primary d-flex justify-content-center "
                >
                  + Add Salary Income
                </a>
                <h4 className="d-flex justify-content-center"> OR</h4>
                <a
                  href="#"
                  class="mt-auto btn btn-new btn-primary d-flex justify-content-center "
                >
                  Upload Form16
                </a>
                <div></div>
              </div>
            </div>

            <div class="col-md-5">
              <div
                id="CarouselTest"
                class="carousel slide"
                data-ride="carousel"
              >
                <div className="EDCMEnu">
                  <ol>
                    <Link to={"/Deduction"}>Deduction Start</Link>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}

export default SalaryIncome;
