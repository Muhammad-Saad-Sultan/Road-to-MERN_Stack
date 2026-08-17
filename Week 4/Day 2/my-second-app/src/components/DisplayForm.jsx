const DisplayForm = ({firstName, lastName, email}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{lastName}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DisplayForm
