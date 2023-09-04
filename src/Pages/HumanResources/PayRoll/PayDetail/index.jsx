import React, { useState } from "react";
import "./Style.scss";
import Download from "../../../../assets/icons/download.png";
import html2pdf from "html2pdf.js";
import { Link } from "react-router-dom";
import FinalBill from "../FinalBill";

const PayDetail = () => {
  const [show, setShow] = useState(false);
  const empName = "Huraira";
  const handleDownload = () => {
    const content = document.querySelector(".paySlip2"); // The element you want to capture
    const options = {
      filename: `${empName} PaySlip.pdf`,
      //   image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().from(content).set(options).save();
  };
  return (
    <div className="payDetailMain">
      <div className="payDetail">
        <p className="p1">Abu Huraira</p>
        <div className="downloadDiv" onClick={handleDownload}>
          <img src={Download} alt="download" height={20} />
          <p>Download</p>
        </div>
      </div>
      <div className="paySlip">
              <div className="paySlip1">
              {show && <FinalBill setShow={setShow}/>}
          <div className="paySlip1Detail">
            <p>Earings</p>
            <p>Amount</p>
          </div>
          <div className="pay">
            <p>Base Pay</p>
            <p>$2000</p>
          </div>
          <div className="pay">
            <p>Bonus</p>
            <p>$20</p>
          </div>
          <div className="PayCommon">
            <p className="p1">Total Amount</p>
            <p className="p2">$2020</p>
          </div>
          <div className="PayCommon">
            <p className="p1">Deductions</p>
            <Link to="pay-detail/final-bill" onClick={() => setShow(true)}>
              Final Bill
            </Link>
                  </div>
                  
          <div className="pay">
            <p>Travel Allowance</p>
            <p>$20</p>
          </div>
          <div className="pay">
            <p>Income Tax</p>
            <p>$20</p>
          </div>
          <div className="PayCommon">
            <p className="p1">Total Deductions</p>
            <p className="p2">$40</p>
          </div>
          <div className="netIncome">
            <p>Net Income</p>
            <p>$2020</p>
          </div>
          <div className="taxIncome">
            <p>Taxable Income</p>
            <p>$1980</p>
          </div>
          <div className="detailPara">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
        </div>
        <div className="paySlip2">
          <div className="payDetail2">
            <p className="p1">Payslip Details</p>
            <div className="div1">
              <p>Period</p>
              <p>March 2023</p>
            </div>
            <div className="div1">
              <p>Issue Date</p>
              <p>12 mar,2023</p>
            </div>
            <div className="div1">
              <p>Id number</p>
              <p>3234</p>
            </div>
          </div>
          <div className="payDetail2">
            <p className="p1">Employee Details</p>
            <div className="div1">
              <p>Full Name</p>
              <p>Abu Huraira</p>
            </div>
            <div className="div1">
              <p>Designation</p>
              <p>VP of finance</p>
            </div>
            <div className="div1">
              <p>ID/passport number</p>
              <p>323478878</p>
            </div>
            <div className="div1">
              <p>Income tax number</p>
              <p>8976442</p>
            </div>
          </div>
          <div className="payDetailLast">
            <p className="p1">Company Details</p>
            <div className="div1">
              <p>Arabella inc.</p>
            </div>
            <div className="div1">
              <p>Lorem ipsum dolor sit, amet consectetur</p>
            </div>
            <div className="div1">
              <p>Lorem ipsum dolor sit, amet consectetur</p>
            </div>
            <div className="div1">
              <p>Lorem ipsum dolor sit, amet consectetur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayDetail;
