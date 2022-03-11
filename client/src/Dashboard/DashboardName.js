import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TaxService from "../components/TaxService/TaxService";

function Dashboard() {
  const { pan, firstname, lastname } = useSelector(
    (state) => state.pdf.userbasicdata
  );
  console.log( pan,lastname,firstname)
  return (
    <div>
      <div class="container py-3">
        <div class="title h1 text-center">INCOME-TAX RETURN FILING SERVICE</div>
        {/* <i class="fad fa-camera"></i> */}
        <div class="card">
          <div class="row ">
            <div class="col-md-7 px-3">
              <div class="card-block px-6">
                <h4 class="card-title">
                  Dashboard Robin&nbsp;{lastname}[{pan}]
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <TaxService />
    </div>
  );
}

export default Dashboard;
