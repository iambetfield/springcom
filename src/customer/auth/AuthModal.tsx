
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import RegisterForm from './RegisterForm';
import { useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface AuthProps {
  handleClose : ()=> void,
  open: boolean;
  
}

const AuthModal = ({handleClose, open}: AuthProps) => {

  const location = useLocation();

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname === "/login"? <LoginForm /> : <RegisterForm />}
      
        </Box>
      </Modal>
      
    </div>
  )
}

export default AuthModal