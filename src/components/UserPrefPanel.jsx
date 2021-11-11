



// User Preferences Panel is a reusable Component, 
// which covers different user-manipulation actions in this App.

// Important
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

// Icons
import { AiOutlineRollback } from 'react-icons/ai';

const UserPrefPanel = ({ panelType, onAddUser }) => {

    const navigate = useNavigate();
    // Collecting user data locally to add(or edit) to actual state. 
    const [user, setUser] = useState({
        username: "",
        email: "",
        fullName: "",
        password: "",
        billingPlan: {},
        id: Date.now(),
      });
    console.log("Local user:", user);

    const handleInputChange = (e) => {
        // If event came from select(billingPlan) we need some logic, else just e.target.value.
        // The logic need is coused by select option value prop.
        // We can't give an object to value prop of select option.
        const eventValue = e.target.id === "billingPlan" && 
        e.target.value === "100" && {week: 100} ||
        e.target.value === "350" && {month: 350} || 
        {year: 4000} && e.target.value;

        setUser(prev => ({
            ...prev,
            [e.target.id]: eventValue,
        }));
        console.log("e.target: ", e.target);
    }

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
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" 
                        id="fullName" placeholder="Full Name" value={user.fullName}
                        onChange={e => handleInputChange(e)}
                        disabled={panelType === 'update' && true}
                    />
                    <label htmlFor="fullName">Full Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" 
                        id="email" placeholder="name@example.com" 
                        onChange={e => handleInputChange(e)}
                    />
                    <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" 
                        id="username" placeholder="Username" 
                        onChange={e => handleInputChange(e)}
                    />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" 
                        id="password" placeholder="Password" 
                        onChange={e => handleInputChange(e)}
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <select className="form-select mb-3" aria-label="Default select example"
                    id="billingPlan" onChange={e => handleInputChange(e)}
                >
                    <option defaultValue>Choose Billing Plan</option>
                    <option value="100">Week: 100 $</option>
                    <option value="350">Month: 350 $</option>
                    <option value="4000">Year: 4000 $</option>
                </select>
                <button className="btn btn-success"
                    onClick={() => onAddUser(user)}
                >Save User</button>
            </div>
            
        </div>
    )
};

export default UserPrefPanel;