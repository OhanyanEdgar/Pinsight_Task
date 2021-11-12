
// Important
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
// Actions
import { fillFakeData } from "../state/actions/usersActions";
// Components
import User from "./User";

const UserList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    return (
        <div className="col">
            <button className="btn btn-primary"
            onClick={() => dispatch(fillFakeData())}>
                Fill Fake Users
            </button>
            <button className="btn btn-success"
                onClick={() => navigate("/create_user")}
            >Create User</button>
            {users.map(user => <User user={user} key={user.id} />)}
        </div>
    );
};

export default UserList;