import React from "react";

const TrustandSafty = () => {
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
    <div class="jumbotron text-center">
      <h1 style={styles.heading}>Welcome to Clear trust and safety center.</h1>
      <p style={styles.paragraph}>
        We protect your data so that you can use our services worry-free.
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <div style={{ width: "70%" }}>
          <div class="row-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="row-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="row-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
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
  );
};

export default TrustandSafty;
