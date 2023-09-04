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
  overflowY: "hidden",
};

const GettingThings = () => {
  const navigation = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateWithDelay = () => {
    // setTimeout(() => {
    //   navigation(url, { replace: true });
    // },0); // Delay navigation by 100 milliseconds
    handleClose();
  };
  const handleNavigate = () => {
    navigation("/getting-things-don", { replace: true });
    handleClose(); // Close the popover
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <FaAngleRight color="white" size={20} onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        style={{ height: "200px" }}
      >
        <Link
          to="/dashboard/getting-things-don"
          onClick={() => navigateWithDelay()}
          style={{
            ...linkStyle,
            // overflowY: 'hidden !important', // Apply the !important flag
          }}
        >
          Get Things Done
        </Link>
      </Popover>
    </div>
  );
};

export default GettingThings;
