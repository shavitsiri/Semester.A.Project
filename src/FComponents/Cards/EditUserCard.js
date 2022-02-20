import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function UserCard(props) {
  return (
    <Card sx={{ marginTop:'15px', minHeight:'35vh', width:'45%', textAlign:'center', marginBottom:'19px' }}>
      <CardContent>
        <Typography style={{ fontFamily:'cursive',fontSize:'30px'}} gutterBottom  component="div">
        <u><b>Profile Details</b></u>
        </Typography>
        <Typography style={{ fontFamily:'cursive',fontSize:'15px',fontStyle:'oblique',color:'#343434'}} variant="body2" color="text.secondary">
                <u>First Name</u>: {props.firstName} <br /> 
                <u>Last Name</u>:  {props.lastName} <br /> 
                <u>userName</u>: {props.userName} <br /> 
                <u>Email</u>: {props.email} <br /> 
                <u>Gender</u>: {props.gender} <br /> 
                <u>Country</u>: {props.country} <br /> 
                <u>City</u>: {props.city} <br /> 
                <u>Street</u>: {props.street} <br />
                <u>House Number</u>: {props.houseNumber}
        </Typography>
      </CardContent>
      <button onClick={() => props.deleteUser(props.email)} style={{backgroundColor:'#D34B4B', cursor:'pointer',border:'2px solid black', borderRadius:'30px', padding:'5px 8px'}}><b>Delete user</b></button>
    </Card>
  );
}
