import React from 'react'
import { useSelector } from 'react-redux'
import './AdminPage.css';
import { useRoutes } from 'react-router';
import Users from './Users';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Apidata from '../ApiData/Apidata';



function AdminPage() {
  const {apidata}= useSelector(state => state.api)  

const Navigate = useNavigate()

  return (
    <div>
      {/* <Users/> */}
      <Apidata/>
  <div class="col-md-10 col-lg-6 d-flex justify-content-center" style={{ width: "100%"}}>
    <div class="row  ">
        <div class="col-xl-3 "style={{width:"45%"}}>
            <div class="card l-bg-cherry" >
                <div class="card-statistic-3 p-4" >
                    <div class="card-icon card-icon-large"><i class="fas fa-shopping-cart"></i></div>
                    <div class="mb-4">
                      
                          <Link to={"/user"}>
                        <h5 class="card-title mb-0">New Users</h5>
                        </Link>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                            22
                            </h2>
                        </div>
                        <div class="col-4 text-right">
                            <span>12.5% <i class="fa fa-arrow-up"></i></span>
                        </div>
                    </div>
                    <div class="progress mt-1 " data-height="8" style={{height:"8px"}}>
                        <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width:`34%`}}></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-6" style={{width:"45%"}}>
            <div class="card l-bg-blue-dark">
                <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large"><i class="fas fa-users"></i></div>
                    <div class="mb-4">
                        <h5 class="card-title mb-0">Customers</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                                15.07k
                            </h2>
                        </div>
                        <div class="col-4 text-right">
                            <span>9.23% <i class="fa fa-arrow-up"></i></span>
                        </div>
                    </div>
                    <div class="progress mt-1 " data-height="8" style={{height:"8px"}}>
                        <div class="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width:"25%"}}></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-6" style={{width:"45%"}}>
            <div class="card l-bg-green-dark">
                <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large"><i class="fas fa-ticket-alt"></i></div>
                    <div class="mb-4">
                        <h5 class="card-title mb-0">Ticket Resolved</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                                578
                            </h2>
                        </div>
                        <div class="col-4 text-right">
                            <span>10% <i class="fa fa-arrow-up"></i></span>
                        </div>
                    </div>
                    <div class="progress mt-1 " data-height="8" style={{height:"8px"}}>
                        <div class="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" sstyle={{width:"25%"}}></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-6" style={{width:"45%"}}>
            <div class="card l-bg-orange-dark">
                <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large"><i class="fas fa-dollar-sign"></i></div>
                    <div class="mb-4">
                        <h5 class="card-title mb-0">Revenue Today</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                                $11.61k
                            </h2>
                        </div>
                        <div class="col-4 text-right">
                            <span>2.5% <i class="fa fa-arrow-up"></i></span>
                        </div>
                    </div>
                    <div class="progress mt-1 " data-height="8" style={{height:"8px"}}>
                        <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width:"25%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default AdminPage