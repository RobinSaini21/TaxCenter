import React from "react";

const ClearnadLearn = () => {
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
    <div>
      <div class="jumbotron text-center">
        <h1 style={styles.heading}>Learn GST</h1>
        <div className="d-flex justify-content-center align-items-start">
          <div style={{ width: "70%" }}>
            <h4 style={styles.heading}>Browse articles across 12 categories</h4>
            <ol class="list-group list-group-numbered">
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Introduction to GST</div>
                  The right place to get started. Know if GST applies to your
                  business, what is a GSTIN number and what is a composition
                  scheme
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">GST Concepts</div>
                  The right place to get started. Know if GST applies to your
                  business, what is a GSTIN number and what is a composition
                  scheme
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">GST Rates and HSN codes</div>
                  The right place to get started. Know if GST applies to your
                  business, what is a GSTIN number and what is a composition
                  scheme
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Transition into GST </div>
                  The right place to get started. Know if GST applies to your
                  business, what is a GSTIN number and what is a composition
                  scheme
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Registration</div>
                  The right place to get started. Know if GST applies to your
                  business, what is a GSTIN number and what is a composition
                  scheme
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div
          className="d-flex w-100 justify-content-center"
          style={{ marginTop: "10%" }}
        >
          <div style={{ width: "70%" }}>
            <div class="list-group">
              <h1 style={styles.heading}>Trending</h1>
              <a href="#" class="list-group-item list-group-item-action ">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">
                    QRMP - Quarterly Return Filing and Monthly Payment of Taxes
                    (QRMP) Scheme under GST
                  </h5>
                </div>
                <p class="mb-1">
                  QRMP Scheme helps small taxpayers whose turnover is less than
                  Rs.5 crores. The QRMP scheme allows the taxpayers to file
                  GSTR-3B on a quarterly basis and pay tax every month.
                </p>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">All About E-Invoicing</h5>
                </div>
                <p class="mb-1">
                  The e-Invoicing system under GST was implemented from 1st
                  October 2020 for taxpayers with an aggregate turnover
                  exceeding Rs.500 crore. E-invoicing was extended to businesses
                  with an aggregate turnover exceeding Rs.100 crore from 1st
                  January 2021. These articles cover various aspects on the
                  e-invoicing system under GST.
                </p>
              </a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "10%" }}>
          {" "}
          <h1 style={styles.heading}>Choose from 7 Video tutorials</h1>
          <div className="d-flex justify-content-center align-items-start">
            <div style={{ width: "70%" }}>
              <ol class="list-group list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">GST vedio tutorial</div>
                    The right place to get started. Know if GST applies to your
                    business, what is a GSTIN number and what is a composition
                    scheme
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Power of 21 webinar</div>
                    The right place to get started. Know if GST applies to your
                    business, what is a GSTIN number and what is a composition
                    scheme scheme
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">GST Concepts</div>
                    The right place to get started. Know if GST applies to your
                    business, what is a GSTIN number and what is a composition
                    scheme
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">GST rates and HSN codes </div>
                    The right place to get started. Know if GST applies to your
                    business, what is a GSTIN number and what is a composition
                    scheme
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Transition into GST</div>
                    The right place to get started. Know if GST applies to your
                    business, what is a GSTIN number and what is a composition
                    scheme scheme
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Registration</div>
                    The right place to get started. Know if GST applies to your
                    business, what is a GSTIN number and what is a composition
                    scheme
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div style={{marginTop: "10%"}}>
            <h1 style={styles.heading} className="text-center">Why With Tax Center</h1>
            <div className="d-flex justify-content-center">
            <ul class="list-group list-group-flush">
  <li class="list-group-item">Built by 80+ Chartered Accountants and Tax experts</li>
  <li class="list-group-item">Trusted by 10 Mn Users annually</li>
  <li class="list-group-item">Updated based on revised tax rules</li>   
</ul>
            </div>
        </div>
      </div>
    </div>
  );
};

// Built by 80+ Chartered Accountants and Tax experts
// Trusted by 10 Mn Users annually
// Updated based on revised tax rules

export default ClearnadLearn;
