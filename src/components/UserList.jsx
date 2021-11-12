
// Important
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

// Components
import User from "./User";

const UserList = () => {

    const navigate = useNavigate();
    const users = useSelector(state => state.users);

    return (
        <div className="col">
            <button className="btn btn-success"
                onClick={() => navigate("/create_user")}
            >Create User</button>
            {users.map(user => <User user={user} key={user.id} />)}
        </div>
    );
};

export default UserList;