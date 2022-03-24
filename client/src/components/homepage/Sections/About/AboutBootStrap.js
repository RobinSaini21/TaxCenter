import React from "react";
import { Alert, Button, Accordion, Card } from "react-bootstrap";
import { useState } from "react";
import Rectangle3861 from "../../../../Logo/Rectangle3861.png";
import Rectangle3863 from "./Rectangle3863.png";
import "./About.css";

const AboutBootStrap = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-6 px-5 mx-6 ">
          <h1
            className="fs-1 d-flex justify-content-center"
            style={{ color: "#037194" }}
          >
            Save Money Save Time
          </h1>
          <div className=" d-flex justify-content-center">
            <p
              className="col-sm-5"
              style={{
                fontfamily: "Poppins",
                fontstyle: "normal",
                fontWeight: "400",
                fontSize: "21px",
              }}
            >
              We are India’s largest tax and financial services software
              platform for individuals, tax experts, SMEs and enterprises with
              ITR, GST, e-Invoicing solutions and more.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-info">
              Primary
            </button>
            <button type="button" className="btn btn-outline-secondary mx-5">
              Secondary
            </button>
          </div>
        </div>
        <div className="col-sm-6  ">
          <h3>Column 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris...
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6  mt-5 d-flex justify-content-end">
          <div
            class="card w-50 h-50 "
            style={{
              marginTop: "20%",
              background: "#EBF3FF",
              marginRight: "30%",
            }}
          >
            <div class="card-body mt-100 ml-75">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-5">
          <div
            class="card w-50 h-50 "
            style={{ marginTop: "20%", background: "#EBF3FF" }}
          >
            <div class="card-body mt-100 ml-75 mb-1">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 d-flex justify-content-end">
          <div
            class="card w-50 h-50 "
            style={{ marginTop: "20%", background: "#EBF3FF" }}
          >
            <div class="card-body mt-100 ml-75">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div
            class="card w-50 h-50 "
            style={{
              marginTop: "20%",
              background: "#EBF3FF",
              marginLeft: "30%",
            }}
          >
            <div class="card-body mt-100 ml-75 mb-1">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6  mt-5 d-flex justify-content-end">
          <div
            class="card w-50 h-50 "
            style={{
              marginTop: "20%",
              background: "#EBF3FF",
              marginRight: "30%",
            }}
          >
            <div class="card-body mt-100 ml-75">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-5">
          <div
            class="card w-50 h-50 "
            style={{ marginTop: "20%", background: "#EBF3FF" }}
          >
            <div class="card-body mt-100 ml-75 mb-1">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ width: "100%" }}>
          <h1
            className="d-flex justify-content-center"
            style={{ marginTop: "10%" }}
          >
            Our Key Features
          </h1>
          <div className="row" style={{ marginLeft: "10%", }}>
            <div className="card" style={{ width: "18rem",marginRight: "1%","border-radius": "35px" }}>
              <div className="card-body" >
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
            <div className="card " style={{ width: "18rem","border-radius": "35px" }}>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="row" style={{ width: "100%", marginLeft: "10%" ,}}>
            <div className="row">
              <div className="card " style={{ width: "18rem" ,marginRight: "1%" ,"border-radius": "35px"}}>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
              <div className="card " style={{ width: "18rem" , "border-radius": "35px" }}>
                <div className="card-body rounded" >
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{width:"100%", border: "2px solid black"}}>
<div className="text-center">
  <h1  style={{color:"#051C49"}}>
  What are our clients saying about us?
  </h1>
  <div className="d-flex justify-content-center">
  <div class="card " style={{height:"100px" ,width:"40%"}}>
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
  </div>
</div>
        </div>

      </div>
    </div>
  );
};

export default AboutBootStrap;
