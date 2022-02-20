import * as React from 'react';
import { useState,useEffect } from 'react';

export default function CardProdRespo(props) {
    
     const {id,name,img,desc,price,amount,removeFromCart,updateAmountInCart} = props;

     const [amountPerProd, setAmountPerProd] = useState(amount);
     useEffect(() => {
         updateAmountInCart(id,amountPerProd)
     }, [amountPerProd])
    

    return (
        
        <>
        <div className='col-md-4 mb-4' >
            <div className="card">
                <img className="card-img-top" src={img} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>price: {price} ₪</p>
                        <p className="card-text"> {desc}</p>
                        <p>serial number: {id}</p>
                         choose quantity:  <select value={amountPerProd} onChange={(e) => setAmountPerProd(e.target.value)}   >
                                <option value={1} >1</option>
                                <option value={2} >2</option>
                                <option value={3} >3</option>
                            </select>
                    </div>
                    <button onClick={() => removeFromCart(props.id)} style={{backgroundColor:'#03A586', cursor:'pointer',border:'2px solid black',
                            borderRadius:'28px', padding:'9px 12px', width:'65%',alignSelf:'center'}}>Remove</button>
            </div>
        </div>
    </>
        
    )
}
