import React from "react";

const UserDetailsPage = ({
  aadharnum,
  firstname,
  middlename,
  lastname,
  gender,
  fathername,
  pan,
  email,
  mobilenumber,
  createdAt,
}) => {
  return (
    <div>
      <div>
        <div class="container">
          <div class="main-body">
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {firstname}&nbsp;{middlename}&nbsp;{lastname}&nbsp;
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Gender</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{gender}</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Gender</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{fathername}</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Pan Card Number</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{pan}</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{email}</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Aadhar Number</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{aadharnum}</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile Number</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{mobilenumber}</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Created At</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{createdAt}</div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <a class="btn btn-info ">Edit</a>
                    </div>
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

export default UserDetailsPage;
