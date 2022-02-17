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
import { Card, Button } from "react-bootstrap";

function AssistedServices() {
  return (
    <div>
    <div class="container bootstrap snippets bootdeys">
    <h5 style={{opacity: 0.5 , margin:"20px"}}>ASSISTED SERVICES</h5>
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
                Notice Assistance Service
                </h4>
                <p class="description" style={{opacity: 0.5 }}>
                Received an Income-tax notice ? Do not worry! We can help you deal with it! Simply leave it on our tax experts who will assist you, provide proper advice and help you in concluding it.
                </p>
              </div>
              <div class="card-footer text-muted d-flex justify-content-center">
              GET ASSISTANCE
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
                Tax Planning Service
                </h4>
                <p class="description" style={{opacity: 0.5}}>
                Are you worried about your Tax planning? Do not worry! We are here to help you. Get your tax planning done by our tax professionals and enjoy our premium support service.
                </p>
              </div>
              <div class="card-footer text-muted d-flex justify-content-center">
              OPT FOR SERVICE
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </div>
  );
}

export default AssistedServices;
