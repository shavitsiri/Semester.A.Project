import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const Footer = () => {
return (
	<Box>

	<Container>
		<Row>
		<Column>
        
			<Heading style={{fontFamily:'cursive',color:'#F74E7E'}}>All rights reserved to Shavit Siri</Heading>
			{/* <FooterLink href="#">Aim</FooterLink> */}
			
		</Column>
		 <Column >
			
				
			
		</Column> 
		<Column >
			
			
		
	    </Column> 



		<Column style={{marginRight:'10px',float:'right'}} >
			
			<a  href="#"><ArrowUpwardIcon style={{color:'#F74E7E', fontSize:'40px'}}  /></a> 
		
	    </Column> 
       
      
      
      
    
		
		
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
