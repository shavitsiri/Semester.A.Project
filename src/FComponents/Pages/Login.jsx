import React from 'react';
import { useEffect,useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import HeaderCard from '../Cards/HeaderCard';
import { Checkbox } from '@mui/material';


export default function Login() {

    const navigate = useNavigate();

    const checkText = "i'm not a robot";
    const [robot, setRobot] = useState(true);

    const [name, setName] = useState('');
    const handleChange = (event) => {
    setName(event.target.value);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = (event) => {
        event.preventDefault();
        let exist = false;
    
        let data = JSON.parse(localStorage.getItem(`Users`));

        
        if(robot === true){
            alert('you must provide that you are not a robot');
            return;
        }

        for(let i = 0; i < data.length; i ++ ){ //  עובר על מערך המשתשים בלוקאל סטורייג
            if(data[i].email === email && data[i].password === password){
                let user = {emailUser:email, passUser:password}
                sessionStorage.setItem('login_user', JSON.stringify(user))
                exist = true;
            }
        }
        if(!exist){
            alert(`המשתמש לא נמצא במאגר`)
            return false
        }
        else{
            let userObj = {emailUser: email, passUser: password};
            navigate('/Profile', {state: userObj});
        }
    }

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center',minHeight:'85vh',textAlign:'center'}} >
           
           <HeaderCard pageName = {'Login'} />

                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off"
                    bgcolor={'lightblue'} marginTop={'50px'}   border={'8px solid gray'} borderRadius={'30px'} >
                    
                        <h2 style={{fontFamily:'Cursive', fontSize:'40px',color:'navy'}}> <b><u>Login Form</u></b></h2>

                        <br/>

                        <TextField id="outlined-name" label="Email"onClick={handleChange} 
                                    onChange={e => setEmail(e.target.value)} />
                        <br/>

                        <TextField id="outlined-uncontrolled" label="Password"
                            onChange={e => setPassword(e.target.value)} />

                        <br/>

                        <Checkbox onChange={e => setRobot(!robot)} style={{width:'5px'}} />i'm not a robot 
                        <br/>

                        <button onClick={loginUser} style={{marginTop:'30px',backgroundColor:'#03A586', cursor:'pointer',border:'2px solid black',
                                    borderRadius:'28px', padding:'9px 12px'}}><b>Login</b></button>
                    
                </Box>
        </div>
    )
}
