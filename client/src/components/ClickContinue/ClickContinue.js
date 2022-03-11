import React from "react";
import { Link } from "react-router-dom";
import "./ClickContinue.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearuserbasicdata } from "../../Store/actions/PdfActions";

function ClickContinue() {
  const dispatch = useDispatch();
  const { pan, firstname, lastname,middlename } = useSelector(
    (state) => state.pdf.userbasicdata
  );
  const auth = useSelector((store) => store.auth.auth_token);

  const DeleteDetails = () => {
    const handleDelete = () => {
      dispatch(clearuserbasicdata());
    };
    return (
      <div>
        <Link
          class="dropdown-item"
          to={`/basicuser/${auth}`}
          onClick={handleDelete}
        >
          Delete
        </Link>
      </div>
    );
  };
  return (
    <div>
      <div class="container py-3">
        <div class="title h1 text-center">INCOME-TAX RETURN FILING SERVICE</div>

        <div class="card">
          <div class="row ">
            <div class="col-md-7 px-3">
              <div class="card-block px-6">
                <h4 class="card-title">Click on a name to continue</h4>

                <p class="card-text">
                  Click on any of the Tax Filers listed below to start using our
                  services. You may click on "+Add" button on the right to add a
                  new Tax Filer.
                </p>
                <div className="PanCardSec">
                  <Link to={"/dashboard_Con"}>
                    <p>
                      {firstname}&nbsp;{middlename}&nbsp;{lastname}&nbsp;(Click
                      here to Continue )
                    </p>
                  </Link>
                  <p class="card-text">{pan}</p>
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
                    <a class="dropdown-item" href="#">
                      Continue
                    </a>
                    <Link to={`/basicuser/${auth}`} class="dropdown-item">
                      Edit
                    </Link>
                    <DeleteDetails />
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
  );
}

export default ClickContinue;
