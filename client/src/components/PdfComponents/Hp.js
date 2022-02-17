import React from 'react'
import { useNavigate } from 'react-router'
import { Formik } from 'formik';
import { hpapi } from '../../services/AuthApi';

function Hp() {
    const Navigate = useNavigate()
    const intialData = {
      house: "",
      interest: "",
      housepaid: "",
     
  
    }
    const basicRegistrationSchema = (values) => {
      const errors = {};
      if (!values.house) {
         
        errors.savinginterest = "Required";
      } if(!values.interest){
       
          errors.fdrinterest = "Required"
       
      }
      if(!values.housepaid){
       
          errors.ppfinterest = "Required"
     
      }
    
  
  
      return errors;
    }
  
  
  
  
   return(
    <div>
      <Formik
      
        initialValues={intialData}
        validate={basicRegistrationSchema}
        onSubmit={(values, { setSubmitting }) => {
     const house = values.house;
     const interest = values.interest;
     const housepaid =values.housepaid;

     const data = {house,interest,housepaid}
hpapi(data)
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        
        }) => (
          <div class="registration-form">
          <form type="submit" onSubmit={handleSubmit}>
              <div >
                 {/* <h4>Let Start With Basic Details</h4>  */}
              </div>
              <div class="form-group">
              <div class="form-group">
              <select
           className="sSelect w-100"
            name="house"
            id="house"
            value={values.house}
            onChange={handleChange}
            onBlur={handleBlur}
            // value={gender}
            // onChange={(e) => selectGender(e.target.value)}
          >
          
         <option value="" class="form-control item"   disabled>
              --Please choose an option--
            </option>
            <option value="Self Occupied">Self Occupied
            </option>
            <option value="Occupied">Occupied</option>  
          </select>
          
           <span style={{color:"red" }} >{errors.fdrinterest}</span> 
              </div>
                  <input type="text" class="form-control item"  id="savinginterest"
              type="text"
              placeholder="Interest"
              name="interest"
              // value={values.pan}
              value={values.interest}
              onChange={handleChange}
              onBlur={handleBlur}/>
              <span style={{color:"red" }} >{errors.savinginterest}</span>
              </div>
             
             
            
             
             
              
              <div class="form-group">
                  <input type="text" class="form-control item"    
                  id="housepaid"
              type="number"
              placeholder="House Paid"
              name="housepaid"
              // value={values.pan}
              value={values.housepaid}
              onChange={handleChange}
              onBlur={handleBlur}/>
            
              </div>
              <span style={{color:"red" }} >{errors.ppfinterest}</span>
              <div class="form-group">
                  <button type="submit"  class="btn btn-block create-account">Submit</button>
              </div>
          </form>
         
      </div>
        )}
      </Formik>
    </div>
   )
}

export default Hp