import React from "react";
import AssistedServices from "./AssistedServices";
import ReturnFilingServices from "./ReturnFilingServices";
import Tools from "./Tools";
import Calculators from "./Calculators";
// import Navbar_2 from '../components/homepage/Navbar/Navbar_2';

function Allcards() {
  return (
    <div className="Allcards">
    
      <ReturnFilingServices />
      <AssistedServices />
      <Tools />
      <Calculators />
    </div>
  );
}

export default Allcards;
