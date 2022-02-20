import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function UserCard(props) {
  return (
    <Card sx={{  minHeight:'60vh', width:'45%',border:'8px solid gray' , borderRadius:'25px' }}>
      <CardContent>
        <Typography style={{ fontFamily:'cursive',fontSize:'40px',textAlign:'center'}} gutterBottom  component="div">
        <u><b>Your Profile Details</b></u>
        </Typography>
        <Typography style={{ fontFamily:'cursive',fontSize:'30px',fontStyle:'oblique',color:'navy',marginLeft:'15px'}} variant="body2" color="text.secondary">
                <b><u>First Name</u></b>: {props.firstName} <br /> 
                <b><u>Last Name</u></b>:  {props.lastName} <br /> 
                <b><u>userName</u></b>: {props.userName} <br /> 
                <b><u>Email</u></b>: {props.email} <br /> 
                <b><u>Gender</u></b>: {props.gender} <br /> 
                <b><u>Country</u></b>: {props.country} <br /> 
                <b><u>City</u></b>: {props.city} <br /> 
                <b><u>Street</u></b>: {props.street} <br />
                <b><u>House Number</u></b>: {props.houseNumber}
        </Typography>

        <Typography style={{ fontFamily:'cursive',fontSize:'18px',fontStyle:'oblique',color:'navy',textAlign:'center'}} variant="body2" color="text.secondary">
        
          <button onClick={() => props.goToMyCart()} style={{backgroundColor:'#03A586', cursor:'pointer',border:'2px solid black', borderRadius:'28px', padding:'9px 12px',margin:'10px'}}>my cart</button>
          <button onClick={() => props.moveToUpdateDetails()} style={{backgroundColor:'#03A586', cursor:'pointer',border:'2px solid black', borderRadius:'28px', padding:'9px 12px'}}>Update Details</button>
          <button onClick={() => props.logOut()} style={{backgroundColor:'#D76C01', cursor:'pointer',border:'2px solid black', borderRadius:'28px', padding:'9px 12px',margin:'10px'}}>Sign out</button>
          <button onClick={() => props.deleteUser(props.email)} style={{backgroundColor:'#B00B00', cursor:'pointer',border:'2px solid black', borderRadius:'28px', padding:'9px 12px'}}>Delete my account</button>

        </Typography>

      </CardContent>
    </Card>
  );
}
