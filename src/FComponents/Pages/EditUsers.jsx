import React, { useState } from 'react'
import EditUserCard from '../Cards/EditUserCard';
import HeaderCard from '../Cards/HeaderCard'

export default function EditUsers() {

    let users = JSON.parse(localStorage.getItem('Users')); // יוזרס מקבל את מערך המשתמשים שנמצא בלוקאל סטורייג
    const [usersState, setUsersState] = useState(users)

    const deleteUser = (emailToDelete) => {
        let newLocalUsers = users.filter((user) => user.email !== emailToDelete);
        localStorage.setItem('Users', JSON.stringify(newLocalUsers));
        setUsersState(newLocalUsers)
    }

    let usersStr = usersState.map((user,index) => <EditUserCard key={index}  firstName = {user.firstName}  lastName = {user.lastName}  userName = {user.userName}
    email = {user.email} gender={user.gender} country = {user.country} city = {user.city} street = {user.street} houseNumber = {user.houseNumber} deleteUser = {deleteUser} />)


    return (

        <div style={{display:'flex', flexDirection:'column', alignItems:'center',minHeight:'83vh'}}>

        <HeaderCard pageName = {'Edit Users'} />

            
            
            {usersStr}
            
        </div>
        
    )
}
