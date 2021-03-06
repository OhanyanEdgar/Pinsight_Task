
// Important
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
// Actions
import { editUser } from "../state/actions/editUserActions";
// Components
import DialogPopUp from "./UserDelDialog";

const User = ({ user }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEditUser = user => {
        dispatch(editUser(user));
        navigate(`/update_user/${user.username}`);
    };


    return (
        <div className="card border-3 p-2 mt-2" style={{'width': 350+'px'}}>
            <h4 className="card-title" >Full name: {user.fullName}</h4>
            <h6 className="card-text" >Username: {user.username}</h6>
            <h6 className="card-text" >Mail: {user.email}</h6>
            <div className="btn-toolbar d-flex justify-content-evenly">
                <button 
                    className="btn btn-sm btn-primary"
                    onClick={() => handleEditUser(user)}>
                        Edit
                </button>
        
                <DialogPopUp user={user} />
            </div>
        </div>
    );
};

export default User;

