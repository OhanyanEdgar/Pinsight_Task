



const User = ({ user, onDelUser }) => {
    return (
        <div className="card p-2 mt-2" style={{width: 18+'rem'}}>
            <h5 className="card-title" >Full name: {user.fullName}</h5>
            <p className="card-text" >Username: {user.username}</p>
            <p className="card-text" >Mail: {user.email}</p>
            <div className="btn-toolbar d-flex justify-content-around">
                <button className="btn btn-sm btn-primary">Edit</button>
                <button 
                    className="btn btn-sm btn-danger"
                    onClick={() => onDelUser(user.id)}
                >Delete</button>
            </div>

        </div>
    )
}

export default User;