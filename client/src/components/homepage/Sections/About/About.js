import React from "react";
import "./About.css";
//About

const About = () => {
  const styles = {
    heading: {
      position: "absolute",
      width: "522px",
      height: "68px",
      left: "102px",
      top: "180px",
      fontfamily: "Poppins",
      fontstyle: "normal",
      fontweight: "500",
      fontsize: "45px",
      lineheight: "68px",
      color: "#037194",
    },
  };
  return (
    <div>
      <h1 style={styles.heading}>
        We are Clear. Connected finances for Indian tax payers.
      </h1>
      <p className="financial_mission">
        Our mission is to simplify finances, save money and time for millions of
        Indian businesses and people.
      </p>
      <div className="capsule"></div>
      <div className="capsule_large"></div>
      <div className="circle_small"></div>
      <div className="ring">
        <span className="img_1"></span>
      </div>
      <section>
        <div>
          <h1 className="heading_with">
            We collaborate with 200+ leading Brands and 6000+ experts{" "}
          </h1>
          <p className="para_with">
            We are We are the trusted partners for tax experts and businesses
            across industries such as manufacturing, retail, FMCG, financial
            services, e-commerce and healthcare.reviews were collected from
            people who used Tax Center.
          </p>
        </div>
      </section>
      <section className="companies">
        <div id="parent_com">
          <span className="company_1"></span>
          <span className="company_2"></span>
          <span className="company_3"></span>
          <span className="company_4"></span>
          <span className="company_5"></span>
          <span className="company_6"></span>
        </div>
      </section>
      <section>
        <div className="valuescale">
          <h1 className="scale">Creating value at scale</h1>
        </div>
        <div>
          <p className="products_para">
            Products that perform seamlessly during any kind of surge , so you
            don’t have to worry about up-time and reliability. Upload and
            process any amount of data any time of the month, smoothly.
          </p>
        </div>
        <div>
          <div className="company_value_1"></div>
          <div className="company_value_2"></div>
          <div className="company_value_3"></div>
          <div className="company_value_4"></div>
        </div>
        <div>
          <h1 className="heading_value">Meet our core team</h1>
          <div className="parent_img">
            <span className="img_11"></span>
            <span className="img_2"></span>
            <span className="img_3"></span>
            <span className="img_4"></span>
            <span className="img_5"></span>
            <span className="img_6"></span>
            <span className="img_7"></span>
            <span className="img_8"></span>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1 className="heading_from">From compliance to financial services,
we cover them all.</h1>

        </div>
        <div className="card_grow"></div>
<div className="card_grow_1"></div>
<div className="card_grow_2"></div>
<div className="card_grow_3"></div>
      </section>
      <section>
        <div>
          <h1 className="heading_investor">
          Our investors
          </h1>
        </div>
      </section>
      <footer className="footer_2">

      </footer>
    </div>
  );
};

export default About;
