
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
        <div className="d-flex justify-content-center">
            <div 
                className="border border-3 p-3 rounded-3 
                d-flex flex-column align-items-center"
                style={{'width': 500+'px'}}>

                <select className="form-select"id="billingPlan" 
                        // onChange={e => handleInputChange(e)} value={user.billingPlan.price}
                    >
                        <option defaultValue>Sort By Billing Plan</option>
                        <option value="100">Week: 100 $</option>
                        <option value="350">Month: 350 $</option>
                        <option value="4000">Year: 4000 $</option>
                </select>

                <div 
                    style={{'width': 300+'px'}}
                    className="d-flex justify-content-evenly pt-3">

                    <button className="btn btn-success"
                        onClick={() => navigate("/create_user")}>
                            Create User
                    </button>
                    <button className="btn btn-outline-primary"
                        onClick={() => dispatch(fillFakeData())}>
                        Fill Fake Users
                    </button>
                </div>
                
                {users.map(user => <User user={user} key={user.id} />)}
            </div>
        </div>
    );
};

export default UserList;