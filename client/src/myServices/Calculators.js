import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Calculators() {
  return (
    <div>
    <div class="container bootstrap snippets bootdeys">
    <h5 style={{opacity: 0.5 , margin:"20px"}}>CALCULATORS</h5>
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
           
                <h4 class="title" style={{color: "black"}}>
                Income Tax Calculator 2023
                </h4>
                <p class="description" style={{opacity: 0.5 }}>
                Calculate Income-tax payable accurately. Just enter Income details, Investment details and Tax paid details for the Financial Year 2022-23 to calculate tax liability.
                </p>
              </div>
              <div class="card-footer text-muted d-flex justify-content-center">
              CALCULATE NOW
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
             
                <h4 class="title" style={{color: "black"}}>
                Income Tax Calculator 2022
                </h4>
                <p class="description" style={{opacity: 0.5}}>
                Calculate Income-tax payable accurately. Just enter Income details, Investment details and Tax paid details for the Financial Year 2021-22 to calculate tax liability.
              </p>
              </div>
              <div class="card-footer text-muted d-flex justify-content-center">
              CALCULATE NOW
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
             
                <h4 class="title" style={{color: "black"}}>
                HRA Calculator
                </h4>
                <p class="description" style={{opacity: 0.5}}>
                Calculate House Rent Allowance (HRA) using this simple tool. Just enter few details related to rent and get accurate calculations. HRA calculations are useful for tax planning.
                </p>
              </div>
              <div class="card-footer text-muted d-flex justify-content-center">
              CALCULATE NOW
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
             
                <h4 class="title" style={{color: "black"}}>
                EMI Calculator
                </h4>
                <p class="description" style={{opacity: 0.5}}>
                Find EMIs to be paid for loans taken, or if you wish to take a loan and would like to know the monthly installment amount. Use this simple tool to find it out.
                </p>
              </div>
              <div class="card-footer text-muted d-flex justify-content-center">
              CALCULATE NOW
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
             
                <h4 class="title" style={{color: "black"}}>
                BMI Calculator
                </h4>
                <p class="description" style={{opacity: 0.5}}>
                BMI is an inexpensive and easy-to-perform method of screening for weight categories that may lead to health problems. Check out your BMI using this tool from myITreturn. We care for you and wish you a good healthy life.
                </p>
              </div>
              <div class="card-footer text-muted d-flex justify-content-center">
              CALCULATE NOW
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Calculators;
