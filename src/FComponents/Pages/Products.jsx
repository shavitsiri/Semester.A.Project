import React, {  useState } from 'react'
import CardProdRespo from '../Cards/CardProdRespo';
import HeaderCard from '../Cards/HeaderCard';
import AlertSuccess from '../../Icons/AlertSuccess';
import AlertMessage from '../../Icons/AlertMessage';

export default function Products() {

    const prodAddSuccessMessage = <b>Product Added To cart  successfuly </b>;
    const prodAleadyAdd = <b>Product Added To cart  Already </b>;

    let dataProd = JSON.parse(localStorage.getItem(`Products`)); // מקבל את מערך המוצרים מהלוקאל סטורייג

    const [jsonProd, setJsonProd] = useState(dataProd);
    const sessionUser = JSON.parse(sessionStorage.getItem(`login_user`)) || []; // מקבל את המשתמש שנמצא בסשן סטורייג
    const localUsers = JSON.parse(localStorage.getItem(`Users`)) || []; // מקבל את מערך כל המשתמשים מהלוקאל סטורייג
    let localUser = localUsers.filter(user => user.email === sessionUser.emailUser); // מקבל את פרטי המשתמש במחובר בסשן מהלוקאל סטורייג
    localUser = localUser[0]; // המרה לאובייקט
    let severityAlert = 'success';
    const [flagAlert, setFlagAlert] = useState(false);
    const [ifAlreadyHaveProd, setIfAlreadyHaveProd] = useState(false);

    const closeAlert = () => {
        setFlagAlert(false);
        setIfAlreadyHaveProd(false);
    }


    const sendToMyCart = (product) => { // פונקציה להוספת מוצר לעגלה
        console.log(product);
        if(localUser === undefined){
            alert('to add product to cart , you must login first');
            return;
        }
        for(let i =0; i < localUser.cart.length; i++){
            if(localUser.cart[i].prod_id === product.prod_id){
                console.log("hii");
                setIfAlreadyHaveProd(true)
                return;
            }
        }
        let newProd = product;
        console.log(newProd);
        localUser.cart.push(newProd); // עדכון העגלה במספר המוצר בעגלה של המשתמש 
        let tempLocal = localUsers.filter(user => user.email !== sessionUser.emailUser) // מקבל את מערך המשתמשים ללא המשתמש שמוסיף לעגלה
        tempLocal.push(localUser) // דוחף לסוף מערך המשתמשים את המשתמש עם העגלה המעודכנת
        localStorage.setItem('Users' ,JSON.stringify(tempLocal)); // מעדכן את הלוקאל סטורייג במערך המשתמשים המעודכן
        setFlagAlert(true)

        return;
    }

    if (dataProd == null){ // אם מערך המוצרים בלוקאל סטורייג לא קיים
        localStorage.setItem('Products', JSON.stringify(jsonProd)) // השם את מערך המוצרים בלוקאל סטורייג
    }
    
    const setNewProducts = () => {
        setJsonProd(dataProd);
    }

    const deleteProd = (idToDelete) => {
        console.log(idToDelete);
        let newProdArr = jsonProd.filter((prod) => prod.prod_id !== idToDelete);
        setJsonProd(newProdArr);
        localStorage.setItem('Products', JSON.stringify(newProdArr)) // השם את מערך המוצרים בלוקאל סטורייג
    }
    
    let prodStr = jsonProd.map((prod,index) => <CardProdRespo  key = {index} id ={prod.prod_id} name = {prod.prod_name} img = {prod.prod_img}
    desc = {prod.prod_desc}  price = {prod.prod_price} sendToMyCart = {sendToMyCart} productsData = {prod} deleteProd = {deleteProd} />) // משתנה להדפסת הכרטיסים של המוצרים

    const filterResult = (cateItem) => {
        const result = dataProd.filter((prod)=> {
            return prod.category === cateItem;
        });
        setJsonProd(result)
    }

  

    return (
        < div style={{minHeight:'85vh'}} >

            <HeaderCard pageName = {"Let's shop"} />  

            {flagAlert ? <AlertSuccess severityAlert = {severityAlert} message = {prodAddSuccessMessage} closeAlert = {closeAlert}  /> : null} 

            {ifAlreadyHaveProd ? <AlertMessage   severityAlert = {'error'} message = {prodAleadyAdd} closeAlert = {closeAlert}  /> : null}

            <div className='container-fluid mx-2'>
                <div className='row mt-5 mx-2'>
                    <div className='col-md-3' style={{fontFamily:'cursive'}}>
                        <h3 className='text-center text-info' >filters:</h3>
                        <button style={{backgroundColor:'gray',border:'4px solid #434242',borderRadius:'30px',fontSize:'20px'}} className='btn btn-warning w-100 mb-4' onClick={() => filterResult('speaker')} >speaker</button>
                        <button style={{backgroundColor:'gray',border:'4px solid #434242',borderRadius:'30px',fontSize:'20px'}} className='btn btn-warning w-100 mb-4' onClick={() => filterResult('headphone')} >headphones</button>
                        <button style={{backgroundColor:'gray',border:'4px solid #434242',borderRadius:'30px',fontSize:'20px'}} className='btn btn-warning w-100 mb-4' onClick={() => filterResult('charger')} >charger</button>
                        <button style={{backgroundColor:'gray',border:'4px solid #434242',borderRadius:'30px',fontSize:'20px'}} className='btn btn-warning w-100 mb-4' onClick={() => filterResult('backup')} >backup Charger</button>
                        <button style={{backgroundColor:'gray',border:'4px solid #434242',borderRadius:'30px',fontSize:'20px'}} className='btn btn-warning w-100 mb-4' onClick={() => setJsonProd(dataProd)} >all</button>
                    </div>
                    <div className='col-md-9' >
                    <div className='row' >
                            {prodStr}
                        </div>
                    </div>
                </div>
            </div>    
        </div >
    )
}
