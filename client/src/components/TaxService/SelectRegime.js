import React from 'react';
import { Link } from 'react-router-dom';

function SelectRegime() {
  return (
    <div>
    <div class="container py-3">
      <div class="title h1 text-center"></div>

      <div class="card">
        <div class="row ">
          <div class="col-md-7 px-3">
            <div class="card-block px-6">
              <h4 class="card-title">Which Tax Regime Have You Opted For? </h4>

              <p class="card-text">
              Old Regime and New Regime are two different ways to calculation of Tax
              </p>
              <div className="PanCa">
              <div class="form-group">
              <select
                // className="other-list-item"
                name="dd80"
                id="dd80"
                //   value={values.dd80}
                //   onChange={handleChange}
                //   onBlur={handleBlur}
                // value={gender}
                // onChange={(e) => selectGender(e.target.value)}
              >
                <option value="" class="form-control item" disabled>
                  --Please choose an option--
                </option>
                <option value="Let Tax Center decided the description for me">Let Tax Center decided the description for me</option>
                <option value="Old Regime">Old Regime</option>
                <option value="New Regime">New Regime</option>
              </select>
            </div>
                <br />
              </div>
              <a href="#" class="mt-auto btn btn-new btn-primary  ">
                + Add
              </a>
            </div>
          </div>

          <div class="col-md-5">
            <div
              id="CarouselTest"
              class="carousel slide"
              data-ride="carousel"
            >
              <div className="EDCMEnu">
                <ol>
                  {/* <a class="dropdown-item" href="#">
                    Continue
                  </a> */}
                  {/* <Link to={`/basicuser/${auth}`} class="dropdown-item">
                    Edit
                  </Link> */}
                 <Link to={"/ChooseTypeofRegime"}>
                     Continue
                 </Link>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <br />
  </div>
  )
}

export default SelectRegime