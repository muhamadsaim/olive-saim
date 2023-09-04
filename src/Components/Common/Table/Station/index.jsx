import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Style.scss'
import Slider from '../../Slider/slider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor:'white',
  // border: '2px solid #000',
  boxShadow: '0px 4px 20px 0px rgba(238, 238, 238, 0.27)',
  p: 4,
  borderRadius:'10px'
};

export default function Stations({status}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='stationMain'>
          <p className="p1" onClick={handleOpen}>{status}</p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='insideMain'>

                  <p className='p2'>Station</p>
            <Slider />
          </div>
            <button className='saveBtn' onClick={()=>handleClose()}>Save</button>
        </Box>
      </Modal>
    </div>
  );
}