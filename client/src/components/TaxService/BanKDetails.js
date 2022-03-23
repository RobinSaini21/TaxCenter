import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BanKDetails() {
  const firsname = useSelector((store) => store.pdf.userbasicdata.firsname);
  const lastname = useSelector((store) => store.pdf.userbasicdata.lastname);
  const middlename = useSelector((store) => store.pdf.userbasicdata.middlename);
  return (
    <div>
      <div class="container py-3">
        <div class="title h1 text-center"></div>

        <div class="card">
          <div class="row ">
            <div class="col-md-7 px-3">
              <div class="card-block px-6">
                <h4 class="card-title">Bank Details</h4>
                <p class="card-text">
                  Please provide details of all Saving and Current Bank Account
                  in India, held in the name of {firsname}&nbsp;{middlename}{" "}
                  &nbsp;{lastname} at any time during financial year 2020-21.
                  Refund if any will be credited in the Primary Bank selected
                  here. This is a mandatory requirement.
                </p>
                <div className="PanCa">
                <br />
                </div>
                <a href="#">
                  <Link
                    to={"/AddBankDetails"}
                    className="mt-auto btn btn-new btn-primary d-flex justify-content-center "
                  >
                    + Add Bank Details
                  </Link>
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

export default BanKDetails;
