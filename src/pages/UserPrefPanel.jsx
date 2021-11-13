



// User Preferences Panel is a reusable Component, 
// which covers different user-manipulation actions in this App.

// Important
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// Actions
import { addUser } from "../state/actions/usersActions";
import { updateUser } from "../state/actions/usersActions";
import { editUser } from "../state/actions/editUserActions";
// Icons
import { AiOutlineRollback } from 'react-icons/ai';
// Comonents
import PrefPanelInput from "../components/PrefPanelInput"

const UserPrefPanel = ({ panelType }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // editedUser is used as local user in case if Panel Type is "update".
    // It will be more generic to get editUser data from state when it is needed,
    // but unfortunately we cant use useSelector hook within conditions.
    const editedUser = useSelector(state => state.editUser)

    const [user, setUser] = useState(() => {
        return panelType === "update" ? {...editedUser}:
        {
            username: "",
            email: "",
            fullName: "",
            password: "",
            billingPlan: {
                name: "",
                price: 0,
            },
            id: Date.now(),
        }
    })
    
    const [ifValid, setIfValid] = useState({
        username: panelType === 'update',
        email: panelType === 'update',
        fullName: panelType === 'update',
        password: panelType === 'update',
        billingPlan: panelType === 'update',
        allProps: function() {return Object.values(this).every(prop => prop)},
    });

    const handleOnSaveUser = () => {
        dispatch(addUser(user));
        navigate("/user_list");
    };

    const handleOnUpdateUser = () => {
        dispatch(updateUser(user));
        dispatch(editUser({}));
        navigate("/user_list");
    };

    const handleBackToUserList = () => {
        dispatch(editUser({}));
        navigate("/user_list")
    }

    const handleInputChange = (e) => {
        // If event came from select(billingPlan) we need some logic, else just e.target.value.
        // The logic need is coused by select->option->value prop.
        // We can't give an object to value prop of select option.
        const eventValue = e.target.id === "billingPlan" && 
        e.target.value === "100" && {name: "week", price: 100} ||
        e.target.value === "350" && {name: "month", price: 350} || 
        e.target.value === "4000" && {name: "year", price: 4000} || 
        e.target.value;

        setUser(prev => ({
            ...prev,
            [e.target.id]: eventValue,
        }));

        setIfValid(prev => ({
            ...prev,
            [e.target.id]: e.target.id === "billingPlan" && typeof eventValue === 'object' || ifIsValid(e),
            // This check is caused by billing plan->select->option->defaultValue which is doing placeholder job.
            // If the user exidentally selects defaultValue the validation will be false, thanks to this check.
        }));
    };

    const ifIsValid = (e) => {
        const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const passRegex = /^(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,32}$/;
        switch(e.target.id){
            case "fullName":
            case "username":
                return e.target.value.length > 2;
            case "email":
                return mailRegex.test(e.target.value);
            case "password":
                return passRegex.test(e.target.value);
            default:
                return false;
        };
    };

    return (
        <div>
            <button 
                className="btn btn-outline-primary btn-sm fs-6 mb-3" 
                onClick={handleBackToUserList}
            >
                User List
                <AiOutlineRollback  size={25}/>
            </button>
            <div className="border p-4">
                <h3 className="pb-2">
                    {panelType === "create" && "Create new user " || "Edit user"}
                </h3>
                <PrefPanelInput name="fullName" type="text" placeholder="Full Name"
                    ifValid={ifValid} onInputChange={handleInputChange}
                    errorLog="Full name requires 3 or more letters"
                    disabled={panelType === 'update'} value={user.fullName}
                />
                <PrefPanelInput name="email" type="email" placeholder="Email address"
                    ifValid={ifValid} onInputChange={handleInputChange}
                    errorLog="Enter valid email" value={user.email}
                />
                <PrefPanelInput name="username" type="text" placeholder="Username"
                    ifValid={ifValid} onInputChange={handleInputChange}
                    errorLog="Username requires 3 or more letters" value={user.username}
                />
                <PrefPanelInput name="password" type="password" placeholder="Password"
                    ifValid={ifValid} onInputChange={handleInputChange} value={user.password}
                    errorLog="Password requires [A-Z], [0-9], [!@#$&*], at least 8 characters. "
                />

                <select className="form-select form-control" required
                    className={ ifValid.billingPlan && "is-valid form-select mb-3" || "is-invalid form-select" }
                    id="billingPlan" onChange={e => handleInputChange(e)} value={user.billingPlan.price}
                >
                    <option defaultValue>Choose Billing Plan</option>
                    <option value="100">Week: 100 $</option>
                    <option value="350">Month: 350 $</option>
                    <option value="4000">Year: 4000 $</option>
                </select>
                <div className="invalid-feedback mb-3">Billing plan required</div>
                
                <div className="d-flex align-items-center">
                    <button onClick={panelType === "update" && handleOnUpdateUser || handleOnSaveUser }
                    className={ ifValid.allProps()? "btn btn-success": "btn btn-warning disabled" }>
                        {panelType === "update" && "Update User" || "Save User"}
                    </button>

                    <h6 className="ms-3 fs-6 text-warning fw-light fst-italic"> 
                        {!ifValid.allProps() && "Please fill all required fields."}
                    </h6>
                </div>
            </div>
        </div>
    )
};

export default UserPrefPanel;