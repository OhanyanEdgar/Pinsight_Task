
// Important
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
// Actions
import { fillFakeData } from "../state/actions/usersActions";
import { setFilterCriterion } from "../state/actions/filterActions";
import { countUsers } from "../state/actions/usersCountActions";
import { setUsersToShow } from "../state/actions/usersToShowActions"
// Components
import PaginatedUsers from "../components/Pagination";
// Icons
import { GoHome } from 'react-icons/go';

const UserList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const filterCriterion = useSelector(state => state.filter);
    const {all, week, month, year} = useSelector(state => state.counter);
    const [pageCount, setPageCount] = useState(5);

    useEffect(() => {
        handleFilterUsers(filterCriterion);
        dispatch(countUsers(users));
    }, [filterCriterion, users]);

    const handleFilterUsers = criterion => {
        const { bill, name } = criterion;
        // This check covers both filters by nasting the result of Bill filter into Name filter.
        const filterByBill = bill === "all" && users ||
            users.filter(user => user.billingPlan.price === Number(criterion.bill));
        const filterByName = name === "" && filterByBill ||
            filterByBill.filter(user => user.username.includes(name));

        dispatch(setUsersToShow(filterByName));
    };

    const handleFilterNameChange = name => {
        dispatch(setFilterCriterion({
            ...filterCriterion,
            name,
        }));
    };
   
    const handleFilterBillChange = bill => {
        dispatch(setFilterCriterion({
            ...filterCriterion,
            bill,
        }));
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="btn btn-outline-primary rounded-circle d-flex me-2" 
                style={{ height: 55+'px', width: 55+'px'}}
                onClick={() => navigate("/")}>
                <GoHome size={40} />
            </div>
            <div 
                className="border border-3 p-3 rounded-3 
                d-flex flex-column align-items-center"
                style={{'width': 500+'px'}}>

                <div className="input-group mb-3" >
                    <span className="input-group-text">Filter By Name</span>
                    <input 
                        type="text" className="form-control" 
                        placeholder="Username" value={filterCriterion.name} 
                        onChange={e => handleFilterNameChange(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label className="input-group-text" htmlFor="billingPlan">Filter By Billing Plan</label>
                    <select className="form-select"id="billingPlan" 
                        onChange={e => handleFilterBillChange(e.target.value)} 
                        value={filterCriterion.bill}
                    >
                        <option value="all">Show All ({all} users)</option>
                        <option value="100">Week: 100 $ ({week} users)</option>
                        <option value="350">Month: 350 $ ({month} users)</option>
                        <option value="4000">Year: 4000 $ ({year} users)</option>
                </select>
                </div>
                
                <div 
                    style={{'width': 100+'%'}}
                    className="d-flex justify-content-evenly pt-3"
                    >

                    <button className="btn btn-success"
                        onClick={() => navigate("/create_user")}>
                            Create User
                    </button>
                    <button className="btn btn-outline-primary "
                        onClick={() => dispatch(fillFakeData())}>
                        Fill Fake Users
                    </button>

                    <div className="input-group" style={{'width': 35+'%'}}>
                        <label className="input-group-text" htmlFor="usersPerPage">Per Page</label>
                        <select className="form-select " id="usersPerPage"
                            onChange={e => setPageCount(e.target.value)} 
                            value={pageCount}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                </div>
                
                <PaginatedUsers usersPerPage={pageCount} />
            </div>
        </div>
    );
};

export default UserList;