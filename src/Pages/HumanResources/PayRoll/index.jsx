import React, { useState } from "react";
import "./Style.scss";
import PayrollTable from "./Table";
import PayDetail from "./PayDetail";

const Payroll = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="payrollMain">
      
      {show ? (
        <div>
          <PayDetail />
        </div>
          ) : (
                  <>
            <div className="payroll">
            <p className="p1">Payroll</p>
            <p className="p2">Run Payroll</p>
          </div>
        <div className="payTable">
                      <PayrollTable setShow={setShow} />
        </div>
                  </>
      )}
    </div>
  );
};

export default Payroll;
