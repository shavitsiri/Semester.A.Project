import React, { useMemo } from 'react';
import { useEffect,useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import * as Valid  from '../utils/Valid.jsx';
import HeaderCard from '../Cards/HeaderCard';
import AlertSuccess from '../../Icons/AlertSuccess';
import {  FormControl, FormControlLabel, Radio, RadioGroup, FormLabel, Button } from '@mui/material';

export default function SignUp() {

    const [flagAlert, setFlagAlert] = useState(false);
    const severityAlert = "success";
    let message = "You have Signed up successfully, You can Login now";

    const closeAlert = () => {
        setFlagAlert(false);
    }

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

    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          border:'2px solid black',
          borderRadius:'25px',
          color: state.isSelected ? 'purple' : 'black',
          padding: 20,
          width: 200,
        }),
        control: () => ({
          // none of react-select's styles are passed to <Control />
          width: 200,
          border: '2px solid black',
          borderRadius: '28px',
          textAlign:'center'
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }
  
    const navigate = useNavigate();
    
    const goToLogin = () => {
        navigate('/login')
    }

    // שינוי תצוגת שדה הקליטה בעט לחיצה
    const [name, setName] = useState('');
    const handleChange = (event) => {
    setName(event.target.value);
    }
    
    let users = JSON.parse(localStorage.getItem('Users')); // יוזרס מקבל את מערך המשתמשים שנמצא בלוקאל סטורייג


    // סטייטים לקילטת הפרמטרים מהשדות
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    // const [country, setCountry] = useState({optionsCountryStr: optionsCountry[0]});
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [cart, setCart] = useState([]);
    const [gender, setGender] = useState('');
    

    //סטייט למערך המשתמשים
    const [usersState, setUsersState] = useState(users);

    // פונקציה להוספת משתמש ללוקאל סטורייג
    const sendToLocalStorage = () => {
        console.log('email:' + email);
        console.log('password:' +password);
        setUsersState([...usersState,{firstName,lastName,userName,email,password,gender,country,city,street,houseNumber,cart}]);
        setFlagAlert(true);
    }

    useEffect(() => {
        localStorage.setItem('Users', JSON.stringify(usersState))
    }, [usersState])

    const validation = (event) => {
        event.preventDefault();

        if (Valid.validFirstName(firstName) === false) {
            alert(`first name can only contains letters in english `);
            return;
        }

        if (Valid.validLastName(lastName) === false) {
            alert(`last name can only contains letters in english `);
            return;
        }
    
        if (Valid.validUsername(userName) === false) {
            alert(`username can only contains letters in englis / numbers or special chars`);
            return;
        }

        if (!Valid.validateEmail(email)) {
            alert(`wrong Email"`);
            return;
        }

        if(Valid.checkIfEmailExist(email) === false){
            alert('this email already exist in the system');
            return;
        }

        if((Valid.validatePassword(password)) === false){
            alert(`Password must contain at least one capital letter, one special char and one number`);
            return;
        }

        if(password !== confirmPass){
            alert('passwords doesnt match');
            return;
        }

        if(gender === ''){
            alert(`You must choose a your gender !`);
            return;
        }

        if(Valid.validCountry(country) === false){
            alert('country must be assigned');
            return;
        }

        if (Valid.validCity(city) === false) {
            alert(`city can only contains letters in english`);
            return;
        }

        if(Valid.validStreet(street) === false){
            alert("street can only contains letters in english");
            return;
        }

        if(Valid.validHouseNumber(houseNumber) === false){
            alert("hosenumber must be bigger than 0");
            return;
        }

        sendToLocalStorage();
    }

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center',minHeight:'85vh',textAlign:'center'}}>
            
            <HeaderCard pageName = {'Sign Up'} />

            {flagAlert ? <AlertSuccess severityAlert = {severityAlert} message = {message} closeAlert = {closeAlert}  /> : null} 
            
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off"
                    bgcolor={'lightblue'} marginTop={'50px'} border={'8px solid gray'} borderRadius={'30px'}   >

                    <h2 style={{fontFamily:'Cursive', fontSize:'40px',color:'navy'}}> <b><u>SignUp Form</u></b></h2>

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

                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                        >
                            <FormControlLabel onChange = {e => setGender(e.target.value)} value="female" control={<Radio />} label="Female" />
                            <FormControlLabel onChange = {e => setGender(e.target.value)} value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
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

                    

                    
                    <button onClick={validation} style={{marginTop:'30px',backgroundColor:'#03A586', cursor:'pointer',border:'2px solid black', borderRadius:'28px', padding:'9px 12px'}}><b>Sign Up</b></button>
                    <br/>
                    <button onClick={goToLogin} style={{marginTop:'30px',backgroundColor:'#03A586', cursor:'pointer',border:'2px solid black', borderRadius:'28px', padding:'9px 12px'}}><b>Already have an account?<br/>Go to Login</b></button>

                    </Box> 
        </div>
    )
}
