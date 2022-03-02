import React from "react";
import { Link } from "react-router-dom";

function FamilyIncome() {
  return (
    <div>
      <div class="container py-3">
        <div class="title h1 text-center"></div>

        <div class="card">
          <div class="row ">
            <div class="col-md-7 px-3">
              <div class="card-block px-6">
                <h4 class="card-title">
                  Income of other person to be included in this return
                </h4>

                <p class="card-text">Add your family income details</p>
                <div className="PanCa">
                  {/* <p>Add your family income details</p> */}

                  <br />
                </div>
                <a
                  href="#"
                  class="mt-auto btn btn-new btn-primary d-flex justify-content-center "
                >
                  + Add Family Income
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
                    {/* <a class="dropdown-item" href="#">
                  Continue
                </a> */}
                    {/* <Link to={`/basicuser/${auth}`} class="dropdown-item">
                  Edit
                </Link> */}
                    <Link to={"/ContactDetails"}>Contact Details</Link>
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

export default FamilyIncome;
