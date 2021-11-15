
// Important
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

// Actions
import { setUsersPerPage } from "../state/actions/cantrolPanelActions";
import { setDnDtogle } from "../state/actions/cantrolPanelActions";
import { fillFakeData } from "../state/actions/usersActions";
import { setFilterCriterion } from "../state/actions/filterActions";
import { countUsers } from "../state/actions/usersCountActions";
import { setUsersToShow } from "../state/actions/usersToShowActions";

const UsersControlPanel = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { users } = useSelector(state => state);
    const { usersPerPage, dNdTogle } = useSelector(state => state.controlPanel);
    const filterCriterion = useSelector(state => state.filter);
    const { all, week, month, year } = useSelector(state => state.counter);

    useEffect(() => {
        handleFilterUsers(filterCriterion);
        dispatch(countUsers(users));
    }, [filterCriterion, users]);

    const handleOnUsersPerPage = e => dispatch(setUsersPerPage(e.target.value));
    const handleOnDnDtogle = e => dispatch(setDnDtogle(e.target.checked));

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

    const handleFilterUsers = criterion => {
        const { bill, name } = criterion;
        // This check covers both filters by nasting the result of Bill filter into Name filter.
        const filterByBill = bill === "all" && users ||
            users.filter(user => user.billingPlan.price === Number(criterion.bill));
        const filterByName = name === "" && filterByBill ||
            filterByBill.filter(user => user.username.includes(name));

        dispatch(setUsersToShow(filterByName));
    };


    return (
        <div className=" mb-2" style={{'width': 100+'%'}}>
            {/* Filters */}
            <div className="input-group mb-2" >
                <span className="input-group-text">Filter By Name</span>
                <input 
                    type="text" className="form-control" 
                    placeholder="Username" value={filterCriterion.name} 
                    onChange={e => handleFilterNameChange(e.target.value)}
                />
            </div>

            <div className="input-group mb-2">
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
            {/* Users Per Page */}
            <div className="input-group">
                <label className="input-group-text" htmlFor="usersPerPage">Users Per Page</label>
                <select className="form-select " id="usersPerPage"
                    onChange={e => handleOnUsersPerPage(e)} 
                    value={usersPerPage}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
                {/* Drag & Drop Togle */}
                <span className="input-group-text" htmlFor="drag&drop">Drag and Drop</span>
                <span className="input-group-text" >
                    <input 
                        className="form-check-input ms-0" 
                        type="checkbox" role="switch" 
                        id="drag&drop" 
                        value={dNdTogle}
                        onClick={e => handleOnDnDtogle(e)}
                    />
                </span>
            </div>
            {/* Create & Fake Users Buttons */}
            <div className="btn-group pt-2" style={{'width': 100+'%'}}>
                <button className="btn btn-success"
                    onClick={() => navigate("/create_user")}>
                        Create User
                </button>
                <button className="btn btn-outline-primary"
                    onClick={() => dispatch(fillFakeData())}>
                    Fill Fake Users
                </button>
            </div>
        </div>
    );
};

export default UsersControlPanel;