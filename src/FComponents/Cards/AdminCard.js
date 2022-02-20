import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 420 }}>

      <CardMedia component="img" minheight="235" image="../WebPictures/adminProfile.jpg"
        alt="admin picture animation" />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
            <h4 style={{fontFamily:'cursive'}} ><u>Profile Details</u>: </h4>
            <u>Email</u>: admin@g.com <br/>
            <u>Password</u>: 12345
        </Typography>
        
      </CardContent>

      <button onClick={() => props.moveToEditUsers()} style={{backgroundColor:'#03A586', cursor:'pointer',border:'2px solid black', borderRadius:'28px', padding:'5px 6px',margin:'5px'}}>Edit Users</button>
      <button onClick={() => props.logOut()} style={{backgroundColor:'#03A586', cursor:'pointer',border:'2px solid black', borderRadius:'28px', padding:'5px 6px',margin:'5px'}}>Sign out</button>
      <button onClick={() => props.moveToAddProd()} style={{backgroundColor:'#03A586', cursor:'pointer',border:'2px solid black', borderRadius:'28px', padding:'5px 6px',margin:'5px'}}>Add Product</button>

    </Card>
  );
}
