
// Components
import PaginatedUsers from "../components/Pagination";
import UsersControlPanel from "../components/UsersControlPanel";
import HomeButton from "../components/HomeButton";

const UserList = () => {

    return (
        <div className="d-flex justify-content-center">
            <HomeButton />
            <div className="border border-3 p-3 rounded-3 
                d-flex flex-column align-items-center"
                style={{'width': 500+'px'}}>
                
                <UsersControlPanel />
                <PaginatedUsers />
            </div>
        </div>
    );
};

export default UserList;