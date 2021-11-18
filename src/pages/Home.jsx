
// Important
import { useNavigate } from 'react-router-dom';
// Icons 
import { FcInspection } from 'react-icons/fc';
// Components
import TaskItem from '../components/TaskItem';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="pb-4">
            <div className="title">
                <h1 className="font-monospace">Pinsight Task</h1>
                <p className="fw-lighter border-bottom pb-2">
                    The task is to create a simple user management CRUD Application
                </p>
            </div>
            <div className="requirements border-bottom pb-3">
                <h3 className="font-monospace">Requirements</h3>
                <h5 className="mt-3">User List</h5>
                <TaskItem status="done"
                    text="- The User list page should consist of a data table representing the users." 
                />
                <TaskItem status="done"
                    text="- Every entry of the list should show some user data, such as Full Name / 
                    Username / Email and have two actions: Delete User and Edit User." 
                />
                <TaskItem status="done"
                    text="- There should be a create user button, search by username and a filter by 
                    billing plan fields on top of the list." 
                />
                <TaskItem status="done"
                    text="- The data table should also support pagination." 
                />
                <h5 className="mt-3">Create a User</h5>
                <TaskItem status="done"
                    text="- The page should consist of the data fields that a user has." 
                />
                <TaskItem status="done"
                    text="- All the fields should have validaton and can not be blank." 
                />
                <TaskItem status="done"
                    text="- The billing plan field should be a select component showing both the name and the price." 
                />
                <TaskItem status="done"
                    text="- On top of the page there should be a button for going back to the list." 
                />
                <TaskItem status="done"
                    text="- On the bottom there should be a save user button." 
                />
                <TaskItem status="done"
                    text="- After creating a user the page should redirect back to the list page." 
                />
                <h5 className="mt-3">Edit a User</h5>
                <TaskItem status="done"
                    text="- The page should be the same as the create user page with a couple of differences." 
                />
                <TaskItem status="done"
                    text="- The fields should be filled in with data from the selected user." 
                />
                <TaskItem status="done"
                    text="- The username field should not be editable." 
                />
                <TaskItem status="done"
                    text="- Also the save user button should be replaced with the update user button." 
                />
                <h5 className="mt-3">Tech Stack</h5>
                <TaskItem status="done"
                    text="- React / Redux / React Router" 
                />
                <TaskItem status="done"
                    text="- MaterialUI" 
                />
                <TaskItem status="undone"
                    text="- TypeScript is a big plus" 
                />
                <TaskItem status="done"
                    text="- All the data should be serialized and stored in localStorage." 
                />
                <h5 className="mt-3">Additional</h5>
                <TaskItem 
                    text="- Popup dialog for delete user button." 
                />
                <TaskItem 
                    text="- Fill fake users button. Made easy to inspect the app." 
                />
                <TaskItem 
                    text="- Unable Save & Update User buttons, if required fields are empty." 
                />
                <TaskItem 
                    text="- User counter." 
                />
                <TaskItem 
                    text="- Users per page functionality." 
                />
                <TaskItem 
                    text="- Drag & Drop functionality for Users." 
                />
                <TaskItem 
                    text="- Dynamic routing, for each user." 
                />




            </div>
            <div className="footer mt-3 d-flex align-items-center">
                <div className="regards ms-5 ps-5">
                    <h2>Best regards,</h2>
                    <h3 className="fst-italic fw-light">Edgar Ohanyan.</h3> 
                </div>
                <button 
                    onClick={() => navigate("/user_list")}
                    className="btn btn-outline-success d-flex flex-column align-items-center ms-5">
                        <FcInspection size={80} />
                        <p className="fw-bolder fs-5">Inspect The App</p>
                </button>
            </div>
        </div>
    );
};

export default Home;