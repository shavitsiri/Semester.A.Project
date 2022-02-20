import React from 'react'
import { useNavigate } from 'react-router-dom';
import CardProdRespo from '../Cards/CardProdRespo';
import ProdArr from '../utils/ProdArr';
import HeaderCard from '../Cards/HeaderCard';
import AlertSuccess from '../../Icons/AlertSuccess';

export default function Home() {

    let orderEx = [{userEmail: "s@gmail.com", serials: [1,2,3], sum: 500 }];

    let dataOrders = JSON.parse(localStorage.getItem('allOrders'));
    if (dataOrders == null){
        localStorage.setItem('allOrders', JSON.stringify(orderEx));
    }

    let dataProd = JSON.parse(localStorage.getItem(`Products`)); // מקבל את מערך המוצרים מהלוקאל סטורייג
    if (dataProd == null){ // אם מערך המוצרים בלוקאל סטורייג לא קיים
        localStorage.setItem('Products', JSON.stringify(ProdArr)) // השם את מערך המוצרים בלוקאל סטורייג
    }

    let users = JSON.parse(localStorage.getItem('Users')); // יוזרס מקבל את מערך המשתמשים שנמצא בלוקאל סטורייג
    if (users == null) { // אם הלוקאל סטורייג ריק
        users = [
            {cart:[],firstName:'Admin',lastName:'Admin',userName:'Admin',email:'admin@g.com', password:'12345',country:'Admin',city:'Admin',street:'Admin',houseNumber:'Admin'},
            {cart:[],firstName:'shavit',lastName:'siri',userName:'shavit75',email:'s@g.com', password:'201020',country:'Israel',city:'Pardesiya',street:'harambam',houseNumber:'1'}
        ]; // תוסיף את המשתמש של האדמין
        localStorage.setItem('Users', JSON.stringify(users));
    }

    const navigate = useNavigate();

    const goToProductPage = () => {
        navigate('/Products')
    }

    const sessionUser = JSON.parse(sessionStorage.getItem(`login_user`)) || []; // מקבל את המשתמש שנמצא בסשן סטורייג
    const localUsers = JSON.parse(localStorage.getItem(`Users`)) || []; // מקבל את מערך כל המשתמשים מהלוקאל סטורייג
    let localUser = localUsers.filter(user => user.email === sessionUser.emailUser); // מקבל את פרטי המשתמש במחובר בסשן מהלוקאל סטורייג
    localUser = localUser[0]; // המרה לאובייקט
    
    const sendToMyCart = (product) => { // פונקציה להוספת מוצר לעגלה
        console.log(product);
        if(localUser === undefined){
            alert('to add product to cart , you must login first')
            return;
        }
        for(let i =0; i < localUser.cart.length; i++){
            if(localUser.cart[i].prod_id === product.prod_id){
                alert('you already have this item in your cart');
                return;
            }
        }
        let newProd = product;
        localUser.cart.push(newProd); // עדכון העגלה במספר המוצר בעגלה של המשתמש 
        let tempLocal = localUsers.filter(user => user.email !== sessionUser.emailUser) // מקבל את מערך המשתמשים ללא המשתמש שמוסיף לעגלה
        tempLocal.push(localUser) // דוחף לסוף מערך המשתמשים את המשתמש עם העגלה המעודכנת
        localStorage.setItem('Users' ,JSON.stringify(tempLocal)); // מעדכן את הלוקאל סטורייג במערך המשתמשים המעודכן
        <AlertSuccess/>
        return;
    }

        let products =   JSON.parse(localStorage.getItem(`Products`)) || []; 
        let recomndedProds = products.filter(prod => prod.prod_id === '1' ||  prod.prod_id === '4' || prod.prod_id === '6'  )
        
        let recomdedStr = recomndedProds.map(( prod) => <CardProdRespo  key = {prod.prod_id} id ={prod.prod_id} name = {prod.prod_name} img = {prod.prod_img} desc = {prod.prod_desc}  price = {prod.prod_price} sendToMyCart = {sendToMyCart} productsData = {prod} />);
        let bestDeals = products.filter(prod => prod.prod_id === '3' || prod.prod_id === '2' ||  prod.prod_id === '6');
        let bestDealsStr = bestDeals.map(( prod) => <CardProdRespo  key = {prod.prod_id} id ={prod.prod_id} name = {prod.prod_name} img = {prod.prod_img} desc = {prod.prod_desc}  price = {prod.prod_price} sendToMyCart = {sendToMyCart} productsData = {prod} />);




    return (
        <div style={{textAlign:'center', minHeight:'90vh'}}>
        
        <HeaderCard pageName = {'Home'} />
            
            <div style={{border:'2px solid purple' ,borderRadius:'25px', padding:'25px', margin:'30px'}} >

                <div >
                <label style={{fontFamily:'Cursive', fontSize:'35px',color:'pink', float:'left'}}> <b><u>Recomnded products:</u></b></label>  <br/>
                </div>

                <div className=' m container-fluid mx-2'>
                    <div className='  row mt-5 mx-2'>
                    
                
                        <div className='col-md-9' >
                        
                                <div className='row' >
                                    {recomdedStr}   
                                                                                 
                                </div>
                                
                            </div>
        
                        </div>
                        
                </div>

                <div style={{marginBottom:'50px'}}>
                <button onClick={goToProductPage} style={{backgroundColor:'#03A586', cursor:'pointer',border:'2px solid black',
                                  borderRadius:'28px', padding:'9px 12px', float:'right'}}><b>Go to all products</b></button>
                </div>

            </div>
            
            <br />

            <div style={{border:'2px solid purple' ,borderRadius:'25px', padding:'25px', margin:'30px'}} >

                <div >
                <label style={{fontFamily:'Cursive', fontSize:'35px',color:'pink', float:'left'}}> <b><u>Best products:</u></b></label>  <br/>
                </div>

                <div className=' m container-fluid mx-2'>
                    <div className='  row mt-5 mx-2'>
                        <div className='col-md-9' >
                                <div className='row' >
                                    {bestDealsStr}                                                 
                                </div>
                            </div>
                        </div>   
                </div>

                <div style={{marginBottom:'50px'}}>
                <button onClick={goToProductPage} style={{backgroundColor:'#03A586', cursor:'pointer',border:'2px solid black',
                                borderRadius:'28px', padding:'9px 12px', float:'right'}}><b>Go to all products</b></button>
                </div>

                </div>
        </div>
   
    )
}
