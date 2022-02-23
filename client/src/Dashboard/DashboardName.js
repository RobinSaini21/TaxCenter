import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TaxService from '../components/TaxService/TaxService';


function Dashboard() {
  const pannum = useSelector((state) => state.pdf.userbasicdata.pan);
  const firsname = useSelector((store) => store.pdf.userbasicdata.firsname);
  const lastname = useSelector((store) => store.pdf.userbasicdata.lastname);
  const middlename = useSelector((store) => store.pdf.userbasicdata.middlename);
  const auth =  useSelector((store) =>store.auth.auth_token)
  return(
    <div>
    <div class="container py-3">
      <div class="title h1 text-center">INCOME-TAX RETURN FILING SERVICE</div>
      {/* <i class="fad fa-camera"></i> */}
      <div class="card">
        <div class="row ">
          <div class="col-md-7 px-3">
            <div class="card-block px-6">
              <h4 class="card-title">Dashboard Of {firsname}&nbsp;{lastname}[{pannum}]</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <br />
<TaxService/>
  </div>
  )
}

export default Dashboard;
