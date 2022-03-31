import React from "react";
import { Alert, Button, Accordion, Card } from "react-bootstrap";
import { useState } from "react";
import Rectangle3861 from "../../../../Logo/Rectangle3861.png";
import Rectangle3863 from "./Rectangle3863.png";
import "./About.css";

const AboutBootStrap = () => {
  const styles = {
    heading: {
      fontfamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "500",
      fontsize: "45px",
      lineHeight: "68px",
      color: "#051C49",
    },
    paragraph: {
      fontfamily: "Poppins",
      fontstyle: "normal",
      fontweight: "400",
      fontsize: "25px",
      lineheight: "38px",
      color: "#000000",
    },
  };
  return (
    <div className="container-fluid my-5" style={{ width: "100%" }}>
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
        <div className="col-sm-6">
          {/* <h3>Column 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris...
          </p> */}
        </div>
      </div>
    
      <div class="container-fluid p-5  text-center">
          <h1 style={styles.heading}>THE LATEST</h1>
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-4"></div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-4"></div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     

      <div className="row" style={{ width: "100%" }}>
        <div className="col">
          <div className="text-center">
            <h1 style={{ color: "#051C49" }}>
              What are our clients saying about us?
            </h1>
            <div className="d-flex justify-content-center">
              <div className="card " style={{ height: "100px", width: "40%" }}>
                <div className="card-img-overlay ">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
            <div className="">
              <button
                className="btn btn-primary btn-lg"
                style={{
                  width: "308px",
                  height: " 73px",
                  borderRadius: "30px",
                }}
              >
                Primary
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="" style={{ width: "100%" }}>
        <h1 className="text-center mt-5" style={{ color: "#051C49" }}>
          {" "}
          Put your ITC journey on auto pilot{" "}
        </h1>
        <p className="text-center">
          Exclusive features that completely automate the ITC claim process
        </p>
        <div class="container mt-5">
          <div class="row">
            <div class="col-sm-5">
              <div class="card w-100">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="card w-100">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row">
            <div class="col-sm-5">
              <div class="card w-100">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="card w-100">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row">
            <div class="col-sm-5">
              <div class="card w-100">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="card w-100">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
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
        <h1 className="text-center mt-5" style={{ color: "#051C49" }}>
          Frequently Asked Questions
        </h1>
        <div class="container mt-5">
          <div class="row">
            <div class="col-sm-4">
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="card-link">
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="col-sm-4">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="card-link">
                      Card link
                    </a>
                    <a href="#" class="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="col-sm-4">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="card-link">
                      Card link
                    </a>
                    <a href="#" class="card-link">
                      Another link
                    </a>
                  </div>
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
