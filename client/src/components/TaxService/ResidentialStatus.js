import React from 'react';
import './TaxService.css';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import IndianResident from './ResidentialStatus/IndianResident';
import NonIndianResident from './ResidentialStatus/NonIndianResident';
import NotOrdinartResident from './ResidentialStatus/NotOrdinartResident';
import { Link } from 'react-router-dom';

function ResidentialStatus() {
  return (
<div className='Reesident'>
        <div className="Resid">
        
          <Tabs>
            <TabList>
              <Tab>Indian Resident</Tab>
              <Tab>Non Resident Indian</Tab>
              <Tab>Not Ordinart Resident</Tab>
         
            </TabList>
    
            <TabPanel>
             <IndianResident/>
            </TabPanel>
            <TabPanel>
           <NonIndianResident/>
            </TabPanel>
            <TabPanel>
            <NotOrdinartResident/>
            </TabPanel>
          </Tabs>
          <Link to={"/ChooseTypeofRegime"}>

            Choose Regime
          </Link>
        </div>
        </div>
      );

  
}

export default ResidentialStatus