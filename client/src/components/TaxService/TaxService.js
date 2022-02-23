import React from 'react';
import './TaxService.css';
import { Link } from 'react-router-dom';

function TaxService() {
  return (
    <div >

<div className='TaxService'>
    <div class="container bootstrap snippets bootdeys">
    <h5 style={{opacity: 0.5 , margin:"20px"}}>TOOLS</h5>
      <div class="row">
        <div class="col-md-4 col-sm-6 content-card h-50">
          <div class="card-big-shadow">
            <div
              class="card card-just-text"
              data-background="color"
              data-color="blue"
              data-radius="none"
            >
              <div class="content">
           
                <h4 class="title" style={{color: "black"}}>
               Upload Form16
                </h4>
                <p class="description" style={{opacity: 0.5 }}>
               Upload Form16 and Finish Quickly
                </p>
                <ul>
                    <li>
                        5 minutes - 10 minutes 
                    </li>
                    <li>
                        Starting from Rupees 300 onwards
                    </li>
                </ul>
              </div>
              <div class="card-footer text-muted d-flex justify-content-center">
                  <Link to={"/taxsummary"}>
         Upload Form-16
         </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-6 content-card h-50">
          <div class="card-big-shadow">
            <div
              class="card card-just-text"
              data-background="color"
              data-color="blue"
              data-radius="none"
            >
              <div class="content">
             
                <h4 class="title" style={{color: "black"}}>
                Generate Rent Receipt
                </h4>
                <p class="description" style={{opacity: 0.5}}>
                Use this feature to generate rent receipts online in required format. Download and Print receipts and claim HRA with your employer on timely basis.
                </p>
              </div>
              <div class="card-footer text-muted d-flex justify-content-center">
              GENERATE NOW
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 content-card h-50">
          <div class="card-big-shadow">
            <div
              class="card card-just-text"
              data-background="color"
              data-color="blue"
              data-radius="none"
            >
              <div class="content">
             
                <h4 class="title" style={{color: "black"}}>
                Check Refund Status
                </h4>
                <p class="description" style={{opacity: 0.5}}>
                Check Income-tax refund status year wise. It is important to keep a record for refunds and here is a convenient place to find out for all the years when return is e-filed.
                </p>
              </div>
              <div class="card-footer text-muted d-flex justify-content-center">
              GENERATE NOW
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
    </div>
  )
}

export default TaxService