import React from "react";
import "./LandingPage.css";

const LandinPage = () => {
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
      /* identical to box height */

      color: "#037194",
    },
  };
  return (
    <div>
      <h1 style={styles.heading}>Save Money Save Time</h1>
      <p className="financial_services">
        We are India’s largest tax and financial services software platform for
        individuals, tax experts, SMEs and enterprises with ITR, GST,
        e-Invoicing solutions and more.
      </p>
      <div className="capsule"></div>
      <div className="capsule_large"></div>
      <div className="circle_small"></div>
      <div className="ring">
        <span className="img_1"></span>
      </div>
      <div>
        <button className="btn_try_it">
          <p className="text_free">Try it free</p>
        </button>
        <button className="btn_watch">
          <p className="text_watch">Watch how it works</p>
        </button>
        <div>
          <div className="card_1">
            <div className="child_div">
              <p className="child_p1">Grow your wealth, save tax</p>
            </div>
            <p className="child_p">
              File income tax returns, save more taxes, build wealth with mutual
              funds and much more.
            </p>
          </div>
          <div className="card_st"></div>
        </div>
        <div className="card_wh"></div>
        <div className="card_2">
          <div className="child_div">
            <p className="child_p1">Grow your wealth, save tax</p>
          </div>
          <p className="child_p">
            File income tax returns, save more taxes, build wealth with mutual
            funds and much more.
          </p>
        </div>
        <div>
          <div className="card_4"></div>
          <div className="card_child_4"></div>
        </div>
        <div>
          <div className="card_wh_2">
            <div className="card_child_5"></div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="key_feathures">Our Key Features</h1>
        <section className="section_2">
          <div className="card_section_1"></div>
          <div className="card_section_2"></div>
          <div className="card_section_3"></div>
          <div className="card_section_4"></div>
          <div className="card_side_section_4">
            <div>
              <h1 className="heading_feature">FEATURES</h1>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section>
          <h1 className="heading_about_us">
            What are our clients saying about us?
          </h1>
          <p className="paragraph_about_us">
            All customers reviews were collected from people who used Clear tax.
          </p>
          <div className="rating">
            <span className="star_1"></span>
            <span className="star_2"></span>
            <span className="star_3"></span>
            <span className="star_4"></span>
            <span className="star_5"></span>
            <div>
              <h3 className="ratings">5/5</h3>
            </div>
            <div className="rating_card">
              <p className="rating_paragraph">
                I was sent a link after having a con-versation about deciding on
                a logo. I liked one of the logos well enough to call it my own.
                It was quick, easy and affordable.
              </p>
              <button className="btn_rating"></button>
            </div>
          </div>
        </section>
        <section className="section_Itc">
          <div>
            <h1 className="heading_itc">Put your ITC journey on auto pilot</h1>
            <p className="para_itc">
              Exclusive features that completely automate the ITC claim process
            </p>
            <div>
              <div className="itc_card"></div>
              <div className="itc_card_1"></div>
              <div className="itc_card_2"></div>
              <div className="itc_card_3"></div>
              <div className="itc_card_4"></div>
              <div className="itc_card_5"></div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1 className="heading_ask">Frequently Asked Questions</h1>
          </div>
          <div className="ask_card_1"></div>
          <div className="ask_card_2"></div>
          <div className="ask_card_3"></div>
        </section>
      </div>
      <footer className="footer_blue"></footer>
    </div>
  );
};

export default LandinPage;
