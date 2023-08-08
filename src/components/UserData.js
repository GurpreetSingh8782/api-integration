import React from 'react'

const UserData = ({ users }) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const { id, name, email, address } = curUser;
                    return (
                        <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{address.city}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default UserData
