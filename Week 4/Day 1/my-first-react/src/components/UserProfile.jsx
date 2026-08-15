const UserProfile = ({name, email, role}) => {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="card profile-card">
        <p>Name: {name}</p>
        <p>Role: {role}</p>
        <p>email: {email}</p>
      </div>
    </div>
  )
}

export default UserProfile
