import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import HeaderCard from '../Cards/HeaderCard';
import AlertSuccess from '../../Icons/AlertSuccess';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import * as ValidAddProd  from '../utils/ValidAddProd.jsx';



export default function AddProduct() {
    const messageSuccess = <b>Product added to products page Successfully &nbsp;</b>; 
    const [prodAdded, setProdAdded] = useState(false);

    const closeAlert = () => {
        setProdAdded(false);
    }


    const [prodImg, setProdImg] = useState('');
    const [imgData, setImgData] = useState('');

    const onChangePicture = (e) => {
        if (e.target.files[0]) {
          console.log("picture: ", e.target.files);
          setProdImg(e.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setImgData(reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
        }
      };

    const [name, setName] = useState('');
    const handleChange = (event) => {
    setName(event.target.value);
    }

    const [prodName, setProdName] = useState('');
    const [prodPrice, setProdPrice] = useState('');
    const [prodDesc, setProdDesc] = useState('');
    
    const [prodCategory, setProdCategory] = useState('');



    const addProduct = () => {
        
        let dataProd = JSON.parse(localStorage.getItem(`Products`)); // מקבל את מערך המוצרים מהלוקאל סטורייג
        let product = {prod_id:dataProd.length+1, prod_name: prodName, prod_img: imgData,prod_desc:prodDesc,prod_price: prodPrice,category:prodCategory};
        console.log(product);
        dataProd.push(product)
        localStorage.setItem('Products' ,JSON.stringify(dataProd)); // מעדכן את הלוקאל סטורייג במערך המשתמשים המעודכן
        setProdAdded(true);
    }
     
    const validation = (e) => {
        e.preventDefault();

        if (ValidAddProd.validName(prodName) === false) {
            alert(` name can only contains letters in english `)
            return;
        }
        if(ValidAddProd.validPrice(prodPrice) === false){
            alert(` price must be bigger than 0 `)
            return;
        }
        if(ValidAddProd.validDescription(prodDesc) === false){
            alert(` description must contain at least 5 chars `)
            return;
        }
        if(ValidAddProd.validImage(imgData) === false){
            alert('Please add image')
            return;
        }
        
        if(ValidAddProd.validCategory(prodCategory) === false){
            alert(` category must be chosen  `)
            return;
        }
        
        addProduct();
    }
    

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center',minHeight:'85vh',textAlign:'center'}} >

                <HeaderCard pageName = {'Add Product Page'} />          
           
               {prodAdded ? <AlertSuccess message = {messageSuccess} closeAlert = {closeAlert} /> : null}
        
             <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off"
                 bgcolor={'lightblue'} marginTop={'50px'}   border={'6px solid gray'} borderRadius={'25px'}
                 >
                 
                     <h2 style={{fontFamily:'Cursive', fontSize:'40px',color:'navy'}}> <b><u>Product Form</u></b></h2>

                     <br/>

                     <TextField id="outlined-name" label="Name"onClick={handleChange} 
                                 onChange={e => setProdName(e.target.value)} required />
                     <br/>

                     <TextField id="outlined-uncontrolled" label="Price"
                         onChange={e => setProdPrice(e.target.value)} required />

                     <br/>

                     <TextField id="outlined-uncontrolled" label="Description"
                         onChange={e => setProdDesc(e.target.value)} required />

                     <br/>

                     <TextField id="outlined-uncontrolled"  label="" type={'file'} 
                         onChange={e => onChangePicture(e)} required />

                     <br/>

                     

                     <select style={{  border:'1px solid gray', borderRadius:'7px', height:'50px',backgroundColor:'lightblue', color:'#343a40'}} onChange={e => setProdCategory(e.target.value)}  >
                        <option value="Category">Category</option>
                        <option value="speaker">speaker</option>
                        <option value="headphone">headphone</option>
                        <option value="backup">backup</option>
                        <option value="charger">charger</option>
                  

                    </select>
                   <br/>
                    

                     <button onClick={e =>  validation(e)}  style={{marginTop:'30px',backgroundColor:'#03A586', cursor:'pointer',border:'2px solid black',
                                 borderRadius:'28px', padding:'9px 12px'}}><b>Add</b></button>
                 
             </Box>
     </div>
    )
}
