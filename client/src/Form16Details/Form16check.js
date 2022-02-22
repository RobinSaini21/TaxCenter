import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Form16check() {
    const totalincome = 27000;
    // const Navigate = useNavigate()
    const auth = useSelector((store) =>store.auth.auth_token)
  return (
    <div>
        <div class="card display-none" id="form_16_summary" style={{display: "block"}}>
                    <div class="card-header">
                        <h2 class="color_4">Good. Just recheck your imported summary</h2>
                    </div>
                    <div class="card-body card-padding">
                        <h4 class="f-400 p-b-20">Here are the key fields of your Form-16. Please re-confirm and 'Continue'.</h4>
                        <div id="ass_form" class="m-t-10">
                            <div class="form-horizontal">
                                <div class="form-group">
                                    <label class="col-sm-4 col-md-3 col-xs-6 control-label f-14 text-left-imp">
                                        Total Income from Salary
                                    </label>
                                    <label class="col-sm-2 col-xs-6 text-right" id="summary_income_salary">{totalincome}</label>
                                </div>
                                <div class="form-group display-none" id="tr_summary_house_property" style={{display: "none"}}>
                                    <label class="col-sm-4 col-md-3 col-xs-6 control-label f-14 text-left-imp">
                                        Total House Property Income
                                    </label>
                                    <label class="col-sm-2 col-xs-6 text-right" id="summary_house_property">0</label>
                                </div>
                                <div class="form-group display-none" id="tr_summary_other_income" style={{display: "none"}}>
                                    <label class="col-sm-4 col-md-3 col-xs-6 control-label f-14 text-left-imp">
                                        Other Income
                                    </label>
                                    <label class="col-sm-2 col-xs-6 text-right" id="summary_other_income">0</label>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-4 col-md-3 col-xs-6 control-label f-14 text-left-imp">
                                        Less: Deductions
                                    </label>
                                    <label class="col-sm-2 col-xs-6 text-right" id="summary_less_deductions">29,000</label>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-4 col-md-3 col-xs-6 control-label f-14 text-left-imp">
                                        Total Taxable Income
                                    </label>
                                    <label class="col-sm-2 col-xs-6 text-right" id="summary_total_tax_income">2,66,750</label>
                                </div>
                                <div class="form-group display-none" id="tr_summary_relief" style={{display: "none"}}>
                                    <label class="col-sm-4 col-md-3 col-xs-6 control-label f-14 text-left-imp">
                                        Relief
                                    </label>
                                    <label class="col-sm-2 col-xs-6 text-right" id="summary_relief">0</label>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-4 col-md-3 col-xs-6 control-label f-14 text-left-imp">
                                        Total TDS
                                    </label>
                                    <label class="col-sm-2 col-xs-6 text-right" id="summary_total_tds">7,000</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row w-100 p-10 m-0 section-grey">
                        <div class="col-sm-12 p-0">
                            <div class="row c-gray">
                                <div class="col-sm-5 col-xs-3">
                                    {/* <a href="javascript:void(0);" onclick="backForm16Detail();"> */}
                                        <i class="zmdi zmdi-arrow-left zmdi-hc-fw p-t-25 pull-left c-gray"></i>
                                        <span class="l-h-18 c-gray hidden-xs">Previous</span>
                                        <div class="f-16 hidden-xs c-gray" id="previous_link_text">Edit</div>
                                    {/* </a> */}
                                </div>
                                <div class="col-sm-5 col-sm-offset-2 col-xs-9 text-right">
                                    <a href="javascript:void(0);" onclick="saveForm16Data();">
                                        <i class="zmdi zmdi-arrow-right zmdi-hc-fw p-t-27 pull-right"></i>
                                        {/* <span class="l-h-18 c-gray">Next</span> */}
                                        <Link to={`/basicuser/${auth}`}>
                                        <div class="f-18" id="next_link_text">Continue</div>
                                        </Link>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Form16check