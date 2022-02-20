import { useEffect,useState } from 'react';
import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as Valid  from '../utils/Valid.jsx';
import HeaderCard from '../Cards/HeaderCard'
import { useNavigate } from 'react-router-dom';

export default function UpdateDetails() {

        const optionsCountry = [
        {
          value: "Usa",
          label: "Usa"
        },
        {
          value: "England",
          label: "England"
        },
        {
          value: "Israel",
          label: "Israel"
        },
        {
          value: "Japan",
          label: "Japan"
        }
        ];

        
        const navigate = useNavigate();
        let sessionUser = JSON.parse(sessionStorage.getItem(`login_user`)); // מקבל את המשתמש המחובר
        let userDetails = JSON.parse(localStorage.getItem(`Users`)) // מקבל את מערך המשתמשים מהלוקאל סטורייג
        console.log(userDetails.filter((user) => user.email === sessionUser.emailUser));
        let localUserTemp = userDetails.filter((user) => user.email === sessionUser.emailUser)
        const [localUser, setLocalUser] = useState(localUserTemp[0] );//מקבל את המשתמש הנוכחי
        console.log(localUser);
        let updateProf = localUser;
        
        
        const moveToLogin = () => {
            navigate('/Login');
        }

        // שינוי תצוגת שדה הקליטה בעט לחיצה
        const [name, setName] = useState('');
        const handleChange = (event) => {
        setName(event.target.value);
        }

                // סטייטים לקילטת הפרמטרים מהשדות
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [userName, setUserName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPass, setConfirmPass] = useState('');
        const [country, setCountry] = useState('');
        const [city, setCity] = useState('');
        const [street, setStreet] = useState('');
        const [houseNumber, setHouseNumber] = useState('');


        

        const updateProfileDetails = () => {

            if(password !== confirmPass){
                alert('password doesnt match');
                return;
            }
            
            if(firstName !== ''){
                updateProf.firstName = firstName
            }
            if(lastName !== ''){
                updateProf.lastName = lastName
            }
            if(userName !== ''){
                updateProf.userName = userName
            }
            if(email !== ''){
                updateProf.email = email
            }
            if(password !== ''){
                updateProf.password = password
            }
            if(country !== ''){
                updateProf.country = country
            }
            if(city !== ''){
                updateProf.city = city
            }
            if(street !== ''){
                updateProf.street = street
            }
            if(houseNumber !== ''){
                updateProf.houseNumber = houseNumber
            }
            
            userDetails = userDetails.filter((user) => user.email !== sessionUser.emailUser);
            userDetails.push(updateProf);
            localStorage.setItem('Users', JSON.stringify(userDetails));
            sessionStorage.clear();
            moveToLogin();
        }



        const validation = (event) => {
            event.preventDefault();
           
            if (Valid.validFirstName(firstName) === false && firstName !== ''  ) {
                alert(`first name can only contains letters in english `)
                return
            }
    
            if (Valid.validLastName(lastName) === false && lastName !== '' ) {
                alert(`last name can only contains letters in english `)
                return
            }
        
            if (Valid.validUsername(userName) === false && userName !== '' ) {
                alert(`username can only contains letters in englis / numbers or special chars`)
                return
            }
    
            if((Valid.validatePassword(password)) === false && password !== '' ){
                alert(`Password must contain at least one capital letter, one special char and one number`);
                return;
            }
    
            if ((!Valid.validateEmail(email)) && email !== '') {
                alert(`wrong Email"`)
                return
            }

            if(Valid.checkIfEmailExist(email) === false && email !== ''){
                alert('this email already exist in the system');
                return;
            }
    
            if (Valid.validCity(city) === false  && city !== ''  ) {
                alert(`email must finished with ".com"`)
                return
            }
    
            if(password !== confirmPass && password !== '' ){
                alert('passwords doesnt match');
                return;
            }

            if(Valid.validStreet(street) === false && street !== ''){
                alert("street can only contains letters in english");
                return;
            }
    
            if(Valid.validHouseNumber(houseNumber) === false && houseNumber !== ''){
                alert("hosenumber must be bigger than 0");
                return;
            }
            updateProfileDetails();
        }

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center',minHeight:'85vh',textAlign:'center'}}>
            
        <HeaderCard pageName = {'Update Your Details'} />
        
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off"
                    bgcolor={'lightblue'} marginTop={'50px'} border={'8px solid gray'} borderRadius={'30px'}   >

            <h2 style={{fontFamily:'Cursive', fontSize:'40px',color:'navy'}}> <b><u>update Details Form</u></b></h2> <br/>


                <TextField id="outlined-name" label ="First Name" onClick={handleChange}
                    onChange={e => setFirstName(e.target.value)} />

                <br/>

                <TextField id="outlined-uncontrolled" label="Last Name"
                    onChange={e => setLastName(e.target.value)} />

                <br/>

                <TextField id="outlined-name" label="userName"
                    onClick={handleChange} onChange={e => setUserName(e.target.value)} />

                <br/>

                <TextField id="outlined-uncontrolled" label="Email"
                    onChange={e => setEmail(e.target.value)} />

                <br/>

                <TextField id="outlined-uncontrolled" label="Password"
                    onChange={e => setPassword(e.target.value)} />

                <br/>

                <TextField id="outlined-name" label="confirm-password"onClick={handleChange}
                    onChange={e => setConfirmPass(e.target.value)} />

                <br/>

                <select style={{  border:'1px solid gray', borderRadius:'7px', height:'50px',backgroundColor:'lightblue', color:'#343a40'}} value={country}  onChange={e => setCountry(e.target.value)} >
                        <option value="">choose country</option>
                        <option value="Usa">Usa</option>
                        <option value="Israel">Israel</option>
                        <option value="Spain">Spain</option>
                        <option value="Portugal">Portugal</option>
                        <option value="England">England</option>
                        <option value="Germany">Germany</option>
                        <option value="Natherlands">Natherlands</option>
                        <option value="Romania">Romania</option>
                        <option value="Greece">Greece</option>

                    </select>

                <br/>
                
                <TextField id="outlined-name" label="City"
                    onClick={handleChange} onChange={e => setCity(e.target.value)} />

                <br/>

                <TextField id="outlined-uncontrolled" label="Street"
                    onChange={e => setStreet(e.target.value)} />

                <br/>

                <TextField id="outlined-name" label="House Number"
                    onClick={handleChange} onChange={e => setHouseNumber(e.target.value)} />

                <br/>
                
                <button onClick={validation} style={{marginTop:'30px',backgroundColor:'#03A586', cursor:'pointer',border:'2px solid black', borderRadius:'28px', padding:'9px 12px'}}><b>Update Details</b></button>
                
                </Box>
                
    </div>
    )
}
