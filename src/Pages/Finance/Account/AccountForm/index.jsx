import React from "react";
import "./style.scss";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useState } from "react";

const accountOptions = [
  { label: "Assets", value: "Assets" },
  { label: "Liabilities", value: "Liabilities" },
  { label: "Equity", value: "Equity" },
  { label: "Revenue", value: "Revenue" },
  { label: "Expenses", value: "Expenses" },
];

const detailOptions = [
  { label: "100 Cash On Hand", value: "100 Cash On Hand" },
  { label: "1010 Accounts receivable", value: "1010 Accounts receivable" },
  { label: "1020 Prepaid expenses", value: "1020 Prepaid expenses" },
  {
    label: "1030 Property,plant,equipments",
    value: "1030 Property,plant,equipments",
  },
  { label: "2000 Accounts Payable", value: "2000 Accounts Payable" },
  { label: "2010 Accrued expenses", value: "2010 Accrued expenses" },
  { label: "2020 Unearned revenue", value: "2020 Unearned revenue" },
  { label: "2030 Long term liabilities", value: "2030 Long term liabilities" },
  { label: "3000 Owner’s capital", value: "3000 Owner’s capital" },
];

const parentOptions = [
  { label: "Cash On Hand (Assets)", value: "Cash On Hand (Assets)" },
  {
    label: "Accounts receivable  (Assets)",
    value: "Accounts receivable (Assets)",
  },
  { label: "Prepaid expenses (Assets)", value: "Prepaid expenses (Assets)" },
  {
    label: "Property,plant,equipments (Assets)",
    value: "Property,plant,equipments (Assets)",
  },
  {
    label: "Accounts Payable (Liabilities)",
    value: "Accounts Payable (Liabilities)",
  },
  {
    label: "Accrued expenses (Liabilities)",
    value: "Accrued expenses (Liabilities)",
  },
  {
    label: "Unearned revenue (Liabilities)",
    value: "Unearned revenue (Liabilities)",
  },
  {
    label: "Long term liabilities  (Equity)",
    value: "Long term liabilities (Equity)",
  },
  { label: "Owner’s capital (Equity)", value: "Owner’s capital (Equity)" },
];

const AccountForm = ({ setShowForm }) => {
  const navigate = useNavigate();
    const [isSubAccount, setIsSubAccount] = useState(false);
  const [accountType, setAccountType] = useState(null);
  const [detailType, setDetailType] = useState(null);
    const [parentAccount, setParentAccount] = useState(null);
  const handleClose = () => {
    setShowForm(false);
    navigate("/finance/Chart-accounts", { replace: true });
  };
  return (
    <div className="AccountForm">
      <div className="mainForm">
        <p className="p1">Account</p>
        <IoIosClose size={20} onClick={handleClose} className="icon" />
      </div>
      <div className="form">
        <div className="div1">
          <div className="input1">
            <p>Account Type</p>
            <Select
              onChange={setAccountType}
              value={accountType}
              options={accountOptions}
              placeholder="Account Type"
            />
          </div>
          <div className="input1">
            <p>Name</p>
            <input type="text" placeholder="Name" />
          </div>
        </div>
        <div className="div1">
          <div className="input1">
            <p>Detail Type</p>
            <Select
              onChange={setDetailType}
              value={detailType}
              options={detailOptions}
              placeholder="Detail Type"
            />
          </div>
          <div className="input1">
            <p>Description</p>
            <input type="text" placeholder="Name" />
          </div>
        </div>
        <div className="div22">
          <div className="textDiv">
            <p>
              Use a <strong>Cash on hand</strong> account to track cash your
              company keeps for occasional expenses, also called petty cash.
            </p>
            <p>
              To track cash from sales that have not been deposited yet, use a
              pre-created account called <strong>Undeposited funds</strong>,
              instead
            </p>
          </div>
          <div className="inputDiv">
            <div className="checkDiv">
              <input
                type="checkBox"
                onChange={(e) => setIsSubAccount(e.target.checked)}
              />
              <p>is sub-account</p>
            </div>
            <div className="parent">
              <Select
                onChange={setParentAccount}
                value={parentAccount}
                options={parentOptions}
                              placeholder="parent Account"
                              isDisabled={!isSubAccount}
              />
            </div>
            <div className="balance">
              <div className="input1">
                <p>Balance</p>
                <input type="text" />
              </div>
              <div className="input1">
                <p>as of</p>
                <input type="date" placeholder="07/08/23" />
              </div>
            </div>
          </div>
        </div>
        <div className="borderDiv"></div>
        <div className="btns">
          <button className="b1" onClick={handleClose}>Cancle</button>
          <button className="b2" onClick={handleClose}>Close And Save</button>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
