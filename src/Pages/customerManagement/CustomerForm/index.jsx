

// const CustomerForm = ({ setShowForm,address}) => {
//   const defaultValue = options[0];
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [register, setRegister] = useState(false);
//   const [profile, setProfile] = useState();
//   const [value, setValue] = useState();
//   const fileInputRef = useRef(null);
//   const navigate = useNavigate();
//   const profileImg = useRef(null);


//   const handleProfileClick = () => {
//     profileImg.current.click();
//   };

//   const handleProfileImage = (event) => {
//     const selectedImg = event.target.files[0];
//     if (selectedImg) {
//       setProfile(selectedImg.name);
//       console.log(selectedImg);
//     }
//   };
//   const handleCancle = () => {
//     setShowForm(0);
//     navigate(`${address}`, { replace: true });
//   };
//   return (
//     <div className="customerForm">
     
//       <div className="formDiv1">
//         <p className="p1">Create New Customer</p>
//         <IoMdClose
//           color="black"
//           size={20}
//           onClick={handleCancle}
//           className="icon"
//         />
//       </div>
//       <div className="toggleDiv">
//         <div className="nameDiv">
//           <p className="p5">Your Name(required)*</p>
//           <div className="inputDiv">
//             <div className="nameDiv">
//               <input type="text" placeholder="First Name" />
//             </div>
//             <div className="nameDivv">
//               <input type="text" placeholder="Last Name" />
//             </div>
//           </div>
//           <div className="cnic">
//             <p className="p5">National ID(optional)</p>
//             <input type="text" placeholder="xxxxx-xxxxxx-x" />
//           </div>
//           <div className="picAndphone">
//             <div className="picDiv">
//               <p className="p6">Upload Your Picture*</p>
//               <div className="imgDiv">
//                 <p>{profile}</p>
//                 <img src={Camera} alt="camera" onClick={handleProfileClick} />
//                 <input
//                   type="file"
//                   style={{ display: "none" }}
//                   onChange={handleProfileImage}
//                   ref={profileImg}
//                   accept="image/*"
//                 />
//               </div>
//             </div>
//             <div className="phoneDiv">
//               <p className="p6"> Phone Number(required)*</p>
//               <div className="phoneIn">
//                 <PhoneInput
//                   defaultCountry="SA"
//                   placeholder="phone number"
//                   value={value}
//                   onChange={setValue}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="address">
//             <p className="p5">Your Address</p>
//             <input type="text" placeholder="Address" />
//           </div>
//           <div className="customerType">
//             <p className="p5">Customer's Type*</p>
//             <input type="text" placeholder="Farmers" />
//           </div>
//           <div className="selectDiv">
//             <p className="p3">Loyalty Program*</p>
//             <Select
//               value={selectedOption}
//               onChange={setSelectedOption}
//               options={options}
//               className="select"
//               defaultValue={defaultValue}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="buttons">
//         <button onClick={handleCancle}>Cancle</button>
//         <button>Create</button>
//       </div>
//     </div>
//   );
// };

// export default CustomerForm;

import React, { useState, useRef } from "react";
import "./Style.scss";
import { IoMdClose } from "react-icons/io";
import Tick from "../../../assets/icons/Tick.png";
import Select from "react-select";
import Camera from "../../../assets/icons/camera.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Fade, Tooltip } from "@mui/material";
import Theme from "../../../Theme/Theme";
import { useDispatch, useSelector } from "react-redux";
import { openCustomerForm,closeCustomerForm } from "../../../Redux/slice/handleshortcuts";


const options = [
  { value: "Gold", label: "Gold" },
  { value: "Silver", label: "Silver" },
  { value: "Platinum", label: "Platinum" },
];


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  maxHeight:'80vh',
  borderRadius: " 10px",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 20px 0px rgba(238, 238, 238, 0.52)",
  padding: "15px 0",
  overflowY: 'scroll',
  scrollbarWidth: 'none', /* Firefox */
  msOverflowStyle: 'none', /* IE/Edge */
  '&::-webkit-scrollbar': {
    width: '0px',
    background: 'transparent', /* Hide scrollbar in Chrome/Safari/Webkit */
  },
};

export default function CustomerForm({address}) {
  const lightTheme = Theme();
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const defaultValue = options[0];
  const [selectedOption, setSelectedOption] = useState(null);
  const [register, setRegister] = useState(false);
  const [profile, setProfile] = useState();
  const [value, setValue] = useState();
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const profileImg = useRef(null);
  const dispatch = useDispatch();
const open=useSelector((state)=>state.shortcuts.isOpenC)


  const handleProfileClick = () => {
    profileImg.current.click();
  };

  const handleProfileImage = (event) => {
    const selectedImg = event.target.files[0];
    if (selectedImg) {
      setProfile(selectedImg.name);
    }
  };
  const handleCancel = () => {
    dispatch(closeCustomerForm())
    navigate(`${address}`, { replace: true });
  };
  const handleOpenForm = () => {
    dispatch(openCustomerForm())
  }

  return (
    <div>
      <Tooltip title="Create Customer" position="top">
      <Link
            to="create-customer"
            className="p2"
            onClick={handleOpenForm}
          >
            + Create New Customer
          </Link>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleCancel}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style}>
          <div className="customerForm">
     
     <div className="formDiv1">
       <p className="p1">Create New Customer</p>
       <IoMdClose
         color="black"
         size={20}
         onClick={handleCancel}
         className="icon"
       />
     </div>
     <div className="toggleDiv">
       <div className="nameDiv">
         <p className="p5">Your Name(required)*</p>
         <div className="inputDiv">
           <div className="nameDiv">
             <input type="text" placeholder="First Name" />
           </div>
           <div className="nameDivv">
             <input type="text" placeholder="Last Name" />
           </div>
         </div>
         <div className="cnic">
           <p className="p5">National ID(optional)</p>
           <input type="text" placeholder="xxxxx-xxxxxx-x" />
         </div>
         <div className="picAndphone">
           <div className="picDiv">
             <p className="p6">Upload Your Picture*</p>
             <div className="imgDiv">
               <p>{profile}</p>
               <img src={Camera} alt="camera" onClick={handleProfileClick} />
               <input
                 type="file"
                 style={{ display: "none" }}
                 onChange={handleProfileImage}
                 ref={profileImg}
                 accept="image/*"
               />
             </div>
           </div>
           <div className="phoneDiv">
             <p className="p6"> Phone Number(required)*</p>
             <div className="phoneIn">
               <PhoneInput
                 defaultCountry="SA"
                 placeholder="phone number"
                 value={value}
                 onChange={setValue}
               />
             </div>
           </div>
         </div>
         <div className="address">
           <p className="p5">Your Address</p>
           <input type="text" placeholder="Address" />
         </div>
         <div className="customerType">
           <p className="p5">Customer's Type*</p>
           <input type="text" placeholder="Farmers" />
         </div>
         <div className="selectDiv">
           <p className="p3">Loyalty Program*</p>
           <Select
             value={selectedOption}
             onChange={setSelectedOption}
             options={options}
             className="select"
             defaultValue={defaultValue}
           />
         </div>
       </div>
     </div>

     <div className="buttons">
       <button onClick={handleCancel}>Cancle</button>
       <button>Create</button>
     </div>
   </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}