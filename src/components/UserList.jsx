
// Important
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
// Actions
import { fillFakeData } from "../state/actions/usersActions";
import { setFilterCriterion } from "../state/actions/filterActions";
import { countUsers } from "../state/actions/usersCountActions";
// Components
import User from "./User";

const UserList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const filterCriterion = useSelector(state => state.filter)
    const {all, week, month, year} = useSelector(state => state.counter)
    const [usersToShow, setUsersToShow] = useState([])
    console.log(all, week, month, year);

    // const [usersCounter, setUsersCounter] = useState({
    //     all: 0,
    //     week: 0,
    //     month: 0,
    //     year: 0,
    // })

    // useEffect(() => {
    //     setUsersCounter({
    //         all: users.length,
    //         week: users.filter(user => user.billingPlan.name === 'week').length,
    //         month: users.filter(user => user.billingPlan.name === 'month').length,
    //         year: users.filter(user => user.billingPlan.name === 'year').length,
    //     })
    // }, [users])

    // console.log(usersCounter);

    useEffect(() => {
        handelFilterByBilling(filterCriterion);
        dispatch(countUsers(users))
    }, [filterCriterion, users])

    const handelFilterByBilling = bill => {
        setUsersToShow(bill === "all" && users ||
            users.filter(user => user.billingPlan.price === Number(bill))
        );
    };

    const handleOnSelectChange = e => {
        dispatch(setFilterCriterion(e.target.value));
    }

    return (
        <div className="d-flex justify-content-center">
            <div 
                className="border border-3 p-3 rounded-3 
                d-flex flex-column align-items-center"
                style={{'width': 500+'px'}}>

                <div className="input-group">
                    <label className="input-group-text" htmlFor="billingPlan">Filter By Billing Plan</label>
                    <select className="form-select"id="billingPlan" 
                        onChange={e => handleOnSelectChange(e)} 
                        value={filterCriterion}
                    >
                        <option value="all">Show All ({all} users)</option>
                        <option value="100">Week: 100 $ ({week} users)</option>
                        <option value="350">Month: 350 $ ({month} users)</option>
                        <option value="4000">Year: 4000 $ ({year} users)</option>
                </select>
                </div>
                
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
                
                {usersToShow.map(user => <User user={user} key={user.id} />)}
            </div>
        </div>
    );
};

export default UserList;