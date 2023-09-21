
import { openCustomerForm, openEmployeeForm,openAccountForm,openLabForm,openLeaveForm,openStockForm } from '../../../Redux/slice/handleshortcuts';
import { setActiveButton, setActiveButtonFinance } from '../../../Redux/slice/handleToggle';
const customerPath = "/customer-management/create-customer"
const employeePath="/human-resources/employees/add-employee"
const leaveRequest="/human-resources/employees/leave-request"
const stock="/warehouse-management/add-stock"
const financeR="/finance/Ledger"
const lab = "/lab-service/new-order"
const account='/finance/Chart-accounts/new-entry'
const payroll = '/human-resources/payroll'
import Emp from "../../../assets/icons/user.png";
import Leave from "../../../assets/icons/leave.png";
import NewStock from "../../../assets/icons/stock.png";
import Receipt from "../../../assets/icons/receipt.png";
import Complain from "../../../assets/icons/complain.png";
import PayBill from "../../../assets/icons/paybill.png";
import RunPay from "../../../assets/icons/runpay.png";
export const shortcuts = [
    {
      img: Emp,
      label: "Add Customer",
      path: customerPath,
      sideBar: 3,
      actions: [openCustomerForm()],
    },
    {
      img: Emp,
      label: "Add Employee",
      path: employeePath,
      sideBar: 6,
      actions: [openEmployeeForm(), setActiveButton(1)],
    },
    {
      img: Leave,
      label: "Leave Requests",
      path: leaveRequest,
      sideBar: 6,
      actions: [openLeaveForm(), setActiveButton(1)],
    },
    {
      img: NewStock,
      label: "Add New Stock",
      path: stock,
      sideBar: 4,
      actions: [openStockForm()],
    },
    {
      img: Receipt,
      label: "Add Receipt",
      path: financeR,
      sideBar: 7,
      actions: [setActiveButtonFinance(2)],
    },
    {
      img: Complain,
      label: "Add Test",
      path: lab,
      sideBar: 10,
      actions: [openLabForm()],
    },
    {
      img: PayBill,
      label: "Add New Entry",
      path: account,
      sideBar: 7,
      actions: [openAccountForm(), setActiveButtonFinance(1)],
    },
    {
      img: RunPay,
      label: "Run Payroll",
      path: payroll,
      sideBar: 6,
      actions: [setActiveButton(3)],
    },
  ];