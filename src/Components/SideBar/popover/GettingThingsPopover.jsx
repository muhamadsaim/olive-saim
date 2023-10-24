import React from "react";
import Popover from "@mui/material/Popover";
import { useNavigate, Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const linkStyle = {
  padding: "0 10px",
  color: "rgba(0, 0, 0, 0.6)",
  fontSize: "13px",
  fontWeight: "400",
  textDecoration: "none",
};

// const GettingThings = () => {
//   const navigation = useNavigate();
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleNavigate = () => {
//     handleClose(); // Close the popover
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;
//   console.log("open", anchorEl);
//   return (
//     <div>
//       <FaAngleRight aria-describedby={id} color="white" size={20}  onClick={handleClick}
//       />
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "left",
//         }}
//         style={{ height: "200px" }}

//       >
//         <Link
//           to="/dashboard/getting-things-don"
//           onClick={() => {
//             handleClose()
//           }}
//           style={{
//             ...linkStyle,
//           }}
//         >
//           Get Things Done~
//         </Link>
//       </Popover>
//     </div>
//   );
// };

// export default GettingThings;

// import * as React from "react";
// import Popover from "@mui/material/Popover";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      
      <FaAngleRight
        aria-describedby={id}
        color="white"
        size={20}
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        style={{ height: "200px" }}
      >
        <Link
          to="/dashboard/getting-things-don"
          onClick={() => {
            handleClose();
          }}
          style={{
            ...linkStyle,
          }}
        >
          Get Things Done
        </Link>
      </Popover>
    </div>
  );
}
