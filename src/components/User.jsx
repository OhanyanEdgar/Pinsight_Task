
// important
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { delUser } from "../state/actions/usersActions";
import { editUser } from "../state/actions/editUserActions";

const User = ({ user }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEditUser = user => {
        dispatch(editUser(user));
        navigate("/update_user");

    }

    return (
        <div className="card p-2 mt-2" style={{ width: 25+'vw' }}>
            <h5 className="card-title" >Full name: {user.fullName}</h5>
            <p className="card-text" >Username: {user.username}</p>
            <p className="card-text" >Mail: {user.email}</p>
            <div className="btn-toolbar d-flex justify-content-around">
                <button 
                    className="btn btn-sm btn-primary"
                    onClick={() => handleEditUser(user)}
                >Edit</button>
                <button 
                    className="btn btn-sm btn-danger"
                    onClick={() => dispatch(delUser(user.id))}
                >Delete</button>
            </div>
        </div>
    );
};

export default User;

