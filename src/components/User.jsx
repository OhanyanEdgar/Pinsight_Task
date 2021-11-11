



const User = ({ user }) => {
    return (
        <div className="card" style={{width: 18+'rem'}}>
            <h5 className="card-title" >Full name: {user.fullName}</h5>
            <p className="card-text" >Username: {user.username}</p>
            <p className="card-text" >Mail: {user.email}</p>
        </div>
    )
}

export default User;