import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import HeaderCard from '../Cards/HeaderCard';
import AlertSuccess from '../../Icons/AlertSuccess';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import AlertMessage from '../../Icons/AlertMessage';

export default function Contact() {

    const messageSuccess = <b>Message have been send successfly, we will contact you as soon as possible ! </b>;
    const messageError = <b>You have must fill all the fields correctly ! </b>;

    const [alertSuccess, setAlertSuccess] = useState(false);
    const [alertError, setAlertError] = useState(false);

    const closeAlert = () => {
        setAlertError(false);
        setAlertSuccess(false);
    }

    const [name, setName] = useState('');
    const handleChange = (event) => {
    setName(event.target.value);
    }

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        console.log('hii');
        e.preventDefault();
        if(email.length < 7 || subject.length < 2 || message.length < 5){
            setAlertSuccess(false);
            setAlertError(true);
            return;
        }
        setAlertError(false);
        setAlertSuccess(true);
    }

    return (
        <div  style={{display:'flex', flexDirection:'column', alignItems:'center',minHeight:'85vh',textAlign:'center'}}>
               

               <HeaderCard pageName = {'Contact us'} />

               {alertSuccess ? <AlertSuccess message = {messageSuccess} closeAlert = {closeAlert} /> : null }
               {alertError ?  <AlertMessage message = {messageError} severityAlert = {'error'}  closeAlert = {closeAlert} /> : null }
              

               <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off"
                    bgcolor={'lightblue'} marginTop={'50px'}   border={'8px solid gray'} borderRadius={'30px'} >

                    <h2 style={{fontFamily:'Cursive', fontSize:'40px',color:'navy'}}> <b><u>Contact Form</u></b></h2>

                    <TextField id="outlined-name" label="Email" style={{width:'45%'}}
                        onClick={handleChange} onChange={e => setEmail(e.target.value)} />

                    <br/>

                    <TextField id="outlined-uncontrolled" label="Subject" style={{width:'45%'}}
                        onChange={e => setSubject(e.target.value)} />

                    <br/>

                    <TextField id="outlined-uncontrolled" label="Message" style={{width:'45%'}} multiline={true} rows={8}
                        onChange={e => setMessage(e.target.value)} />

                    <br/>

                    <button onClick={e => sendEmail(e)} style={{marginTop:'30px',backgroundColor:'#03A586', cursor:'pointer',border:'2px solid black', borderRadius:'28px', padding:'9px 12px'}}><b>Send</b></button>

            </Box>
        </div>
    )
}
