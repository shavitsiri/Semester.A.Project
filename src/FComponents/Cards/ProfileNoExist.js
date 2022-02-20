import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345, minHeight:'40vh' }}>

      <CardMedia component="img" height="180" image="../WebPictures/userNotFound.png"
        alt="User Not Found !" />

      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
            To see your profile please log in first.
            <br/>
            Or if you dont have an account yet &nbsp; 
            <button onClick={props.goToSignUp} style={{backgroundColor:'lightBlue', cursor:'pointer',border:'2px solid black', borderRadius:'35px', padding:'1px 1px'}}>click here</button>

        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>

      </CardContent>

      <button onClick={props.goToLogin} style={{backgroundColor:'#03A586', cursor:'pointer',border:'2px solid black', borderRadius:'28px', padding:'9px 12px',margin:'10px'}}>Go to Login</button>
    
    </Card>
  );
}
