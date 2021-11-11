
// Components
import User from "./User";


const UserList = ({ users }) => {
    return (
        <div className="col">
            {users.map(user => <User user={user} key={user.id} />)}
        </div>
    )
}

export default UserList;