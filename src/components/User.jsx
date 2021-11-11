



const User = ({ user }) => {
    return (
        <div>
            <p>Username: {user.username}</p>
            <p>Full name: {user.fullName}</p>
            <p>Mail: {user.email}</p>
        </div>
    )
}

export default User;