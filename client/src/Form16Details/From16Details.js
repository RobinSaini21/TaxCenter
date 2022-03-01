import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router";
import { form16api } from "../services/AuthApi";
import { useSelector } from "react-redux";
import store from "../Store";


const From16Details = () => {
  const Navigate = useNavigate()
  const { pannum,salarysection1,standarDeduction1,tannub,incomefromsalary1,c801 ,d801,totaldeduciton1,totaltaxdeducted1  } = useSelector((state) => state.pdf.userform16data)

console.log(salarysection1)
  const intialData = {
    pan: pannum,
    finacialyear: "",
    regimetype: "",
    tanofemployer: tannub,
    organisation: "",
    typeoforganisation: "",
    //INCOMES
    salarysec171: salarysection1,
    salarysec172: "",
    lieusalarysec173: "",
    grossalary: salarysection1,
    allowancessection10: "",
    balance: salarysection1,
    standarDeduction: standarDeduction1,
    professionaltax: "",
    incomefromsalary: incomefromsalary1,
    incomeonhouse: "",
    incomeothersource: "",
    //DEDUCTIONS
    c80: c801,
    ccc80: "",
    ccd80: "",
    ccd801b: "",
    ccc80companycontribution: "",
    d80: d801,
    dd80: "",
    ddb80: "",
    e80: "",
    ee80: "",
    u80: "",
    g80: "",
    gg80: "",
    tta80: "",
    totaldeduciton: totaldeduciton1,
    reliefus89: "",
    totaltaxdeducted: totaltaxdeducted1,
  };
  const basicRegistrationSchema = (values) => {
    const errors = {};
    if (!values.pan) {
      errors.pan = "Required";
    } else if (values.pan.length > 10) {
      errors.pan = "Invalid Pan Card Number Format";
    }
    if (!values.finacialyear) {
      errors.finacialyear = "Required";
    }
    if (!values.regimetype) {
      errors.regimetype = "Required";
    }

    if (!values.tanofemployer) {
      errors.tanofemployer = "Required";
    }

    if (!values.organisation) {
      errors.organisation = "Required";
    }

    if (!values.typeoforganisation) {
      errors.typeoforganisation = "Required";
    }
    if (!values.salarysec171) {
      errors.salarysec171 = "Required";
    }
    if (!values.salarysec172) {
      errors.salarysec172 = "Required";
    }
    if (!values.lieusalarysec173) {
      errors.lieusalarysec173 = "Required";
    }
    if (!values.grossalary) {
      errors.grossalary = "Required";
    }
    if (!values.allowancessection10) {
      errors.allowancessection10 = "Required";
    }
    if (!values.balance) {
      errors.balance = "Required";
    }
    if (!values.standarDeduction) {
      errors.standarDeduction = "Required";
    }
    if (!values.professionaltax) {
      errors.professionaltax = "Required";
    }
    if (!values.incomefromsalary) {
      errors.incomefromsalary = "Required";
    }
    if (!values.incomeonhouse) {
      errors.incomeonhouse = "Required";
    }
    if (!values.incomeothersource) {
      errors.incomeothersource = "Required";
    }
    if (!values.c80) {
      errors.c80 = "Required";
    }
    if (!values.ccc80) {
      errors.ccc80 = "Required";
    }
    if (!values.ccd80) {
      errors.ccd80 = "Required";
    }
    if (!values.ccd801b) {
      errors.ccd801b = "Required";
    }
    if (!values.ccc80companycontribution) {
      errors.ccc80companycontribution = "Required";
    }
    if (!values.d80) {
      errors.d80 = "Required";
    }
    if (!values.dd80) {
      errors.dd80 = "Required";
    }
    if (!values.ddb80) {
      errors.ddb80 = "Required";
    }
    if (!values.e80) {
      errors.e80 = "Required";
    }
    if (!values.ee80) {
      errors.ee80 = "Required";
    }
    if (!values.u80) {
      errors.u80 = "Required";
    }
    if (!values.g80) {
      errors.g80 = "Required";
    }
    if (!values.gg80) {
      errors.gg80 = "Required";
    }
    if (!values.tta80) {
      errors.totaldeduciton = "Required";
    }
    if (!values.reliefus89) {
      errors.reliefus89 = "Required";
    }
    if (!values.totaltaxdeducted) {
      errors.totaltaxdeducted = "Required";
    }
    if (!values.regimetype) {
      errors.regimetype = "Required";
    }
    if (!values.tanofemployer) {
      errors.tanofemployer = "Required";
    }
    if (!values.organisation) {
      errors.organisation = "Required";
    }
    if (!values.typeoforganisation) {
      errors.typeoforganisation = "Required";
    }
    return errors;
  };

  return (
    <div>
      <Formik
        initialValues={intialData}
        validate={basicRegistrationSchema}
        onSubmit={(values, { setSubmitting }) => {
        
          const pan = values.pan;
          const finacialyear = values.finacialyear;
          const regimetype = values.regimetype;
          const tanofemploye = values.tanofemployer;
          const organisation = values.organisation;
          const typeoforganisation = values.typeoforganisation;
          const salarysec171 = values.salarysec171;
          const salarysec172 = values.salarysec172;
          const lieusalarysec173 = values.lieusalarysec173;
          const grossalary = values.grossalary;
          const allowancessectio = values.allowancessection10;
          const balance = values.balance;
          const standarDeduction = values.standarDeduction;
          const professionaltax = values.professionaltax;
          const incomefromsalary = values.incomefromsalary;
          const incomeonhouse = values.incomeonhouse;
          const incomeothersource = values.incomeothersource;
          const c80 = values.c80;
          const ccc80 = values.ccc80;
          const ccd80 = values.ccd80;
          const ccd801b = values.ccd801b;
          const ccc80companycontriion = values.ccc80companycontribution;
          const d80 = values.d80;
          const dd80 = values.dd80;
          const ddb80 = values.ddb80;
          const e80 = values.e80;
          const ee80 = values.ee80;
          const u80 = values.u80;
          const g80 = values.g80;
          const gg80 = values.gg80;
          const tta80 = values.tta80;
          const totaldeduciton = values.totaldeduciton;
          const reliefus89 = values.reliefus89;
          const totaltaxdeducted = values.totaltaxdeducted;

          const form16Data = {
            pan,
            finacialyear,
            regimetype,
            tanofemploye,
            organisation,
            typeoforganisation,
            salarysec171,
            salarysec172,
            lieusalarysec173,
            grossalary,
            allowancessectio,
            balance,
            standarDeduction,
            professionaltax,
            incomefromsalary,
            incomeonhouse,
            incomeothersource,
            c80,
            ccc80,
            ccd80,
            ccd801b,
            ccc80companycontriion,
            d80,
            dd80,
            ddb80,
            e80,
            ee80,
            u80,
            g80,
            gg80,
            tta80,
            totaldeduciton,
            reliefus89,
            totaltaxdeducted,
          };

       
          console.log(form16Data);
          form16api(form16Data);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
       Navigate("/form16check")
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <div class="registration-form">
            <form type="submit" onSubmit={handleSubmit}>
              <div>
                <h4>Let Start With Basic Details</h4>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  id="pan"
                  type="pan"
                  placeholder={pannum}
                  name="pan"
                  // value={values.pan}
                  value={values.pan}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.pan}</span>
              </div>

              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  id="email"
                  type="number"
                  placeholder="2020-21"
                  name="finacialyear"
                  // value={values.pan}
                  value={values.finacialyear}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.finacialyear}</span>
              </div>
              <div class="form-group">
                <select
                  className="sSelect w-100"
                  name="regimetype"
                  id="regimetype"
                  value={values.regimetype}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" class="form-control item" disabled>
                    --Please choose an option--
                  </option>
                  <option value="Old Regime">Old Regime</option>
                  <option value="New Regime">New Regime</option>
                </select>

                <span style={{ color: "red" }}>{errors.regimetype}</span>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  id="tanofemployer"
                  type="text"
                  placeholder="Tan Of Employer(Check part A of Form16)"
                  name="tanofemployer"
                  // value={values.pan}
                  value={values.tanofemployer}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* <span style={{color:"red" }} >{errors.middlename}</span> */}
                <span style={{ color: "red" }}>{errors.tanofemployer}</span>
              </div>
         
              <div class="form-group">
                <select
                  className="sSelect w-100"
                  name="organisation"
                  id="organisation"
                  value={values.organisation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" class="form-control item" disabled>
                    --Please choose an option--
                  </option>
                  <option value="Private - Other than Goverment and PSU Organisation">Private - Other than Goverment and PSU Organisation</option>
                  <option value="State Goverment">State Goverment</option>
                  <option value="Central Goverment">Central Goverment</option>
                  <option value="Public Sector Unit">Public Sector Unit</option>
                  <option value="Pensioners">Pensioners</option>
                  <option value="Not Applicable">Not Applicable</option>
                </select>

                <span style={{ color: "red" }}>{errors.regimetype}</span>
              </div>

              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  id="typeoforganisation"
                  type="text"
                  placeholder="Type of Organisation"
                  name="typeoforganisation"
                  // value={values.pan}
                  value={values.typeoforganisation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* <span style={{color:"red" }} >{errors.mobilenumber}</span> */}
                <span style={{ color: "red" }}>
                  {errors.typeoforganisation}
                </span>
              </div>
              <div>
                <h4>Incomes</h4>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  type="Number"
                  placeholder="Salary Section 17(1)"
                  name="salarysec171"
                  value={values.salarysec171}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.salarysec171}</span>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  type="Number"
                  placeholder="Perquisities Section 17(2)"
                  name="salarysec172"
                  value={values.salarysec172}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* <span style={{color: "red"}}>{errors.aadharnum}</span> */}
                <span style={{ color: "red" }}>{errors.salarysec172}</span>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  type="Number"
                  placeholder="Profits in lieu of Salary Section 17(2)"
                  name="lieusalarysec173"
                  value={values.lieusalarysec173}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.lieusalarysec173}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="Gross Salary"
                  name="grossalary"
                  value={values.grossalary}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* <span style={{color: "red"}}>{errors.aadharnum}</span> */}
                <span style={{ color: "red" }}>{errors.grossalary}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="Allowances Exempt Under Section 10"
                  name="allowancessection10"
                  value={values.allowancessection10}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* <span style={{color: "red"}}>{errors.aadharnum}</span> */}
                <span style={{ color: "red" }}>
                  {errors.allowancessection10}
                </span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="Blance"
                  name="balance"
                  value={values.balance}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* <span style={{color: "red"}}>{errors.aadharnum}</span> */}
                <span style={{ color: "red" }}>{errors.balance}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="Standard Deduction"
                  name="standarDeduction"
                  value={values.standarDeduction}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.standarDeduction}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="Professional Tax"
                  name="professionaltax"
                  value={values.professionaltax}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.professionaltax}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="Income From Salary(Point 6 of Form 16)"
                  name="incomefromsalary"
                  value={values.incomefromsalary}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.incomefromsalary}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="Income/Interest on House Property(Point)"
                  name="incomeonhouse"
                  value={values.incomeonhouse}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.incomeonhouse}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="Income from Other Source(Point 7(b) of Form16)"
                  name="incomeothersource"
                  value={values.incomeothersource}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.incomeothersource}</span>
              </div>
              <div>
                <h4>Deduction</h4>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="80C (Point 10(a) of Form16)"
                  name="c80"
                  value={values.c80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.c80}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="80CCC (Point 10(b) of From16)"
                  name="ccc80"
                  value={values.ccc80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.ccc80}</span>
              </div>

              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="80CCD(Your contribution)(Point 10(c) of Form16)"
                  name="ccd80"
                  value={values.ccd80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.ccc80}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="80CCD(1B)(Point 10(e) of Form16)"
                  name="ccd801b"
                  value={values.ccd801b}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.ccd801b}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="80CCD(Company contribution)(Point 10(e) of Form16) "
                  name="ccc80companycontribution"
                  value={values.ccc80companycontribution}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.incomeothersource}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="80D (Point 10(g) of Form16)"
                  name="d80"
                  value={values.d80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.d80}</span>
              </div>
              <div class="form-group">
                <select
                  className="sSelect w-100"
                  name="dd80"
                  id="dd80"
                  value={values.dd80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // value={gender}
                  // onChange={(e) => selectGender(e.target.value)}
                >
                  <option value="" class="form-control item" disabled>
                    --Please choose an option--
                  </option>
                  <option value="Not Applicable">Not Applicable</option>
                  <option value="With Disability">With Disability</option>
                  <option value="With Severe Disability">
                    With Severe Disability
                  </option>
                </select>

                <span style={{ color: "red" }}>{errors.dd80}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="80DDB (Point 10(K) of Form16)"
                  name="ddb80"
                  value={values.ddb80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.ddb80}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="80E (Point 10(n) of Form16)"
                  name="e80"
                  value={values.e80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.e80}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="80EE (Point 10(k) of Form16)"
                  name="ee80"
                  value={values.ee80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.ee80}</span>
              </div>
              {/* <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="80U (Point 10(k) of Form16)"
                  name="u80"
                  value={values.u80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.u80}</span>
              </div> */}
              <div class="form-group">
                <select
                  className="sSelect w-100"
                  name="u80"
                  id="u80"
                  value={values.u80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // value={gender}
                  // onChange={(e) => selectGender(e.target.value)}
                >
                  <option value="" class="form-control item" disabled>
                    --Please choose an option--
                  </option>
                  <option value="Not Applicable">Not Applicable</option>
                  <option value="With Disability">With Disability</option>
                  <option value="With Severe Disability">
                    With Severe Disability
                  </option>
                </select>

                <span style={{ color: "red" }}>{errors.u80}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="80G (Point 10(i) of Form16)"
                  name="g80"
                  value={values.g80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.g80}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="80GG (Deduction Amount)(Point 10(k) of Form16)"
                  name="gg80"
                  value={values.gg80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.gg80}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="80TTA (Point 10(i) of Form16)"
                  name="tta80"
                  value={values.tta80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.gg80}</span>
              </div>

              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="Total Deduction"
                  name="totaldeduciton"
                  value={values.totaldeduciton}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.totaldeduciton}</span>
              </div>

              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="Relief us Point 18 Form-16(Part-B)"
                  name="reliefus89"
                  value={values.reliefus89}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.reliefus89}</span>
              </div>

              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="Total Tax Deducted at Source(Check in Part A of Form 16)"
                  name="totaltaxdeducted"
                  value={values.totaltaxdeducted}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.totaltaxdeducted}</span>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-block create-account">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default From16Details;
