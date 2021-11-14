
// Important
import { useState } from "react";
import { useDispatch } from "react-redux";
// Actions
import { delUser } from "../state/actions/usersActions";
// MUI
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

const DialogPopUp = (props) => {
  const dispatch = useDispatch();
  const { onClose, open, user } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle className="text-center">
        You are about to delete <br/> user {user.fullName}.<br/>Are you Sure ?
      </DialogTitle>
      <div className="d-flex justify-content-evenly mb-3">
        <button 
          className="btn btn-lg btn-danger"
          onClick={() => dispatch(delUser(user.id))}>
            Delete
        </button>
        <button 
          className="btn btn-lg btn-success"
          onClick={handleClose}>
            Keep
        </button>
      </div>
    </Dialog>
  );
};

const UserDelDialog = ({ user }) => {

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="btn btn-sm btn-danger" onClick={handleClickOpen}>Delete</button>
      <DialogPopUp
        user={ user }
        open={ open }
        onClose={ handleClose }
      />
    </div>
  );
};


export default UserDelDialog;