



// User Preferences Panel is a reusable Component, 
// which covers different user-manipulation actions in this App.

// Important
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addUser } from "../state/actions/usersActions";

// Icons
import { AiOutlineRollback } from 'react-icons/ai';

// Comonents
import PrefPanelInput from "./PrefPanelInput";

const UserPrefPanel = ({ panelType }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Collecting user data locally to add(or edit) to actual state. 
    const [user, setUser] = useState({
        username: "",
        email: "",
        fullName: "",
        password: "",
        billingPlan: {},
        id: Date.now(),
      });
    
    const [ifValid, setIfValid] = useState({
        username: false,
        email: false,
        fullName: panelType === 'update',
        password: false,
        billingPlan: false,
        allProps: function() {return Object.values(this).every(prop => prop)},
    });

    const handleOnSaveUser = () => {
        dispatch(addUser(user));
        navigate("/");
    };

    const handleInputChange = (e) => {
        // If event came from select(billingPlan) we need some logic, else just e.target.value.
        // The logic need is coused by select option value prop.
        // We can't give an object to value prop of select option.
        const eventValue = e.target.id === "billingPlan" && 
        e.target.value === "100" && {week: 100} ||
        e.target.value === "350" && {month: 350} || 
        e.target.value === "4000" && {year: 4000} || 
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
            // [e.target.id]: ifIsValid(e),
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
                onClick={() => navigate("/")}
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
                    disabled={panelType === 'update'}
                />
                <PrefPanelInput name="email" type="email" placeholder="Email address"
                    ifValid={ifValid} onInputChange={handleInputChange}
                    errorLog="Enter valid email"
                />
                <PrefPanelInput name="username" type="text" placeholder="Username"
                    ifValid={ifValid} onInputChange={handleInputChange}
                    errorLog="Username requires 3 or more letters"
                />
                <PrefPanelInput name="password" type="password" placeholder="Password"
                    ifValid={ifValid} onInputChange={handleInputChange}  
                    errorLog="Password requires [A-Z], [0-9], [!@#$&*], at least 8 characters. "
                />

                <select className="form-select form-control" aria-label="Default select example" required
                    className={ ifValid.billingPlan && "is-valid form-select mb-3" || "is-invalid form-select" }
                    id="billingPlan" onChange={e => handleInputChange(e)} 
                >
                    <option defaultValue>Choose Billing Plan</option>
                    <option value="100">Week: 100 $</option>
                    <option value="350">Month: 350 $</option>
                    <option value="4000">Year: 4000 $</option>
                </select>
                <div className="invalid-feedback mb-3">Billing plan required</div>
                
                <div className="d-flex align-items-center">
                    <button onClick={ handleOnSaveUser }
                    className={ ifValid.allProps()? "btn btn-success": "btn btn-warning disabled" }
                    >
                        Save User
                    </button>
                    <h6 className="ms-3 fs-6 text-warning fw-light fst-italic"> {!ifValid.allProps() && "Please fill all required fields"}</h6>
                </div>
            </div>
        </div>
    )
};

export default UserPrefPanel;