import React from 'react';
import UserCard from '../Cards/UserCard';
import ProfileNoExist from '../Cards/ProfileNoExist';
import AdminCard from '../Cards/AdminCard';
import { useNavigate } from 'react-router-dom';
import HeaderCard from '../Cards/HeaderCard';



export default function Profile() {

    const navigate = useNavigate();

    const moveToAllOrders = () => {
        navigate("/AllOrders");
    }

    const moveToUpdateDetails = () => {
        navigate("/UpdateDetails");
    }

    const goToMyCart = () => {
        navigate("/MyCart")
    }
    
    const moveToEditUsers = () => {
        navigate("/EditUsers")
    }

    const logOut = () => {
        sessionStorage.clear();
        navigate("/")
    }

    const moveToAddProd = () => {
        navigate("/AddProduct")
    }

    const goToSignUp = () => {
        navigate("/SignUp")
    }

    const goToLogin = () => {
        navigate("/Login")
    }
       
    let sessionUser = JSON.parse(sessionStorage.getItem(`login_user`)); // מקבל את המשתמש המחובר
    let userDetails = JSON.parse(localStorage.getItem(`Users`)); // מקבל את מערך המשתמשים מהלוקאל סטורייג

    const deleteUser = (emailToDelete) => {
        console.log('emailTodelete: ' + emailToDelete);
        let newLocalUsers = userDetails.filter((user) => user.email !== emailToDelete);
        localStorage.setItem('Users', JSON.stringify(newLocalUsers));
        logOut();
        
    }

    const updateDetaile = () => {
        console.log();
    }
    
    //משתנים להצגת הפרופיל
    let firstNameProf = "";
    let lastNameProf = "";
    let userNameProf = "";
    let emailProf = "";
    let genderProf = "";
    let countryProf = "";
    let cityProf = "";
    let streetProf = "";
    let houseNumberProf = "";
    let profileCard;
    
    
    if(sessionUser !== null){ // 
        if(sessionUser.emailUser === 'admin@g.com'){ // אם המשתמש הוא האדמין
            firstNameProf = "Admin";
            lastNameProf = "admin";
            emailProf = 'admin@g.com';
            profileCard = <AdminCard logOut = {logOut} moveToAddProd = {moveToAddProd} moveToEditUsers = {moveToEditUsers} moveToAllOrders = {moveToAllOrders} />
        }
        else{
            for(let i = 0; i < userDetails.length; i++){ // 
                if(userDetails[i].email === sessionUser.emailUser){
                     firstNameProf = userDetails[i].firstName;
                     lastNameProf = userDetails[i].lastName;
                     userNameProf = userDetails[i].userName;
                     emailProf = userDetails[i].email;
                     genderProf = userDetails[i].gender;
                     countryProf =  userDetails[i].country;
                     cityProf = userDetails[i].city;
                     streetProf = userDetails[i].street;
                     houseNumberProf = userDetails[i].houseNumber;

                     profileCard = <UserCard firstName = {firstNameProf} lastName = {lastNameProf}  userName = {userNameProf}
                        email = {emailProf} gender = {genderProf} country = {countryProf} city = {cityProf} street = {streetProf} houseNumber = {houseNumberProf}
                         logOut = {logOut} goToMyCart ={goToMyCart} deleteUser ={deleteUser} updateDetaile = {updateDetaile} moveToUpdateDetails = {moveToUpdateDetails} />
                }
            } 
        } 
    }

    if(sessionUser === null){
        profileCard = <ProfileNoExist goToLogin = {goToLogin} goToSignUp = {goToSignUp} />
    }


    

   

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center',minHeight:'83vh'}}>

            

            <HeaderCard pageName = {'Profile'} />
            
            <br/>

                {profileCard}

        </div>
    )
}
