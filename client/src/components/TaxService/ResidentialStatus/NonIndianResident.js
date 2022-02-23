import React from 'react';
import SelectCounter from './SelectCounter';

function NonIndianResident() {
  return (
    <div>
<h1>NonIndianResident</h1>
<div class="form-group">
    <label> Total Period of Stay In India </label>
                <input
                  type="text"
                  class="form-control item"
                  type="Number"
                //   placeholder="Perquisities Section 17(2)"
                  name="salarysec172"
                //   value={values.salarysec172}
                //   onChange={handleChange}
                //   onBlur={handleBlur}
                />
                {/* <span style={{color: "red"}}>{errors.aadharnum}</span> */}
          
              </div>
              <div class="form-group">
              <label> Total Period of Stay In India During The 4 Preceding Years (In Days)</label>
                <input
                  type="text"
                  class="form-control item"
                  type="Number"
                //   placeholder="Perquisities Section 17(2)"
                  name="salarysec172"
                //   value={values.salarysec172}
                //   onChange={handleChange}
                //   onBlur={handleBlur}
                />
                {/* <span style={{color: "red"}}>{errors.aadharnum}</span> */}
          
              </div>
<SelectCounter/>
    </div>
  
  )
}

export default NonIndianResident