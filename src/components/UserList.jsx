
// Components
import User from "./User";


const UserList = ({ users, onDelUser }) => {
    return (
        <div className="col">
            {users.map(user => <User onDelUser={onDelUser} user={user} key={user.id} />)}
        </div>
    )
}

export default UserList;