import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductInCart from '../Cards/ProductInCart';
import HeaderCard from '../Cards/HeaderCard';
import AlertMessage from '../../Icons/AlertMessage';



export default function MyCart(props) {

    const navigate = useNavigate();
    const sessionUser = JSON.parse(sessionStorage.getItem(`login_user`)) || []; // מקבל את המשתמש שנמצא בלוקאל סטורייג
    let products = JSON.parse(localStorage.getItem(`Products`)) || []; // מקבל את מערך כל המוצרים מהלוקאל סטורייג
    const localUsers = JSON.parse(localStorage.getItem(`Users`)) || [];  // מקבל את מערך כל המשתמשים מהלוקאל סרטוייג
    let localUser = localUsers.filter(user => user.email === sessionUser.emailUser) // מקבל את כל פרטי המשתמש המחובר מהלוקאל סטורייג
    localUser = localUser[0]; // המרה לאובייקט
    let renderCart;
    
    const [userCart, setUserCart] = useState(localUser.cart);
    let severityAlert = 'error';
    const [flagAlert, setFlagAlert] = useState(false);

    const moveToProducts = () => {
        navigate('/Products');
    }

    const closeAlert = () => {
        setFlagAlert(false);
    }

    const moveToPlaceOrder = () => {
        if(localUser.cart.length < 1){
            setFlagAlert(true);
            return;
        }
        localUser.cart = [];
        let tempLocal = localUsers.filter(user => user.email !== sessionUser.emailUser); // מקבל את מערך המשתמשים ללא המשתמש שמוסיף לעגלה
        tempLocal.push(localUser); // דוחף לסוף מערך המשתמשים את המשתמש עם העגלה המעודכנת
        localStorage.setItem('Users' ,JSON.stringify(tempLocal)); // מעדכן את הלוקאל סטורייג במערך המשתמשים המעודכן
        navigate('/OrderConfirmation');
    }

    const removeFromCart = (idToRemove) => {
        let newCart = userCart.filter((prod) => prod.prod_id !== idToRemove);
        let product = newCart
        setUserCart(product);
        console.log(newCart);
        localUser.cart = product; 
        let tempLocal = localUsers.filter(user => user.email !== sessionUser.emailUser) // מקבל את מערך המשתמשים ללא המשתמש שמוסיף לעגלה
        tempLocal.push(localUser) // דוחף לסוף מערך המשתמשים את המשתמש עם העגלה המעודכנת
        localStorage.setItem('Users' ,JSON.stringify(tempLocal)); // מעדכן את הלוקאל סטורייג במערך המשתמשים המעודכן
        setSumOfCart(totalPrice());
    }

    
    const updateAmountInCart = (id,multi) => {
        console.log(id ,multi); 
        let newCart = userCart;
        for(let i = 0; i < newCart.length; i++){
            if(newCart[i].prod_id === id){
                newCart[i].amount = multi;
            }
        }
        setUserCart(newCart)
        localUser.cart = newCart; 
        let tempLocal = localUsers.filter(user => user.email !== sessionUser.emailUser) // מקבל את מערך המשתמשים ללא המשתמש שמוסיף לעגלה
        tempLocal.push(localUser) // דוחף לסוף מערך המשתמשים את המשתמש עם העגלה המעודכנת
        localStorage.setItem('Users' ,JSON.stringify(tempLocal)); // מעדכן את הלוקאל סטורייג במערך המשתמשים המעודכן
        setSumOfCart(totalPrice());
    }

    console.log(userCart);
    renderCart = userCart.map((prod) => <ProductInCart  key = {prod.prod_id} id ={prod.prod_id} name = {prod.prod_name} img = {prod.prod_img} desc = {prod.prod_desc}
           price = {prod.prod_price} amount = {prod.amount} removeFromCart = {removeFromCart} updateAmountInCart = {updateAmountInCart} />)
    

        const totalPrice = () => {
            let sum = 0;
            console.log(localUser.cart);
             for(let i = 0; i < localUser.cart.length; i++){
                sum += localUser.cart[i].amount * localUser.cart[i].prod_price;
             }
            return sum;
        }

        const [sumOfCart, setSumOfCart] = useState(totalPrice());

    return (
        < div style={{minHeight:'85vh',display:'flex', flexDirection:'column'}} >

            <HeaderCard pageName = {'My cart'} />
            
             {flagAlert ? <AlertMessage severityAlert = {severityAlert} closeAlert = {closeAlert} moveToProducts = { moveToProducts } /> : null} 
            
                <div className='m container-fluid mx-2'>
                    <div className='row mt-5 mx-2'>
                        <div className='col-md-9'>
                                <div className='row' >
                                     { renderCart}
                                </div>
                            </div>
                        </div>
                </div>

                <div style={{textAlign:'center',marginBottom:'15px'}}>
                    <label style={{fontFamily:'Cursive', fontSize:'35px',color:'yellow'}}> <b><u>sum : {sumOfCart}  ₪ </u></b></label>  <br/>
                    <button onClick={moveToPlaceOrder} style={{marginTop:'30px',backgroundColor:'#03A586', cursor:'pointer',border:'2px solid black',
                                        borderRadius:'28px', padding:'9px 12px'}}><b>place order</b></button>        

                </div>                   
        </ div>
    )
}
