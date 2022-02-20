
import * as React from 'react';

export default function CardProdRespo(props) {
     const {id,name,img,desc,price,sendToMyCart, deleteProd} = props;

    const sessionUser = JSON.parse(sessionStorage.getItem(`login_user`)) || []; // מקבל את המשתמש שנמצא בלוקאל סטורייג

    return (
        <>
        <div className='col-md-4 mb-4' >
            <div  style={{maxWidth:'300px', minHeight:'550px'}}  className="card">
                <img className="card-img-top" src={img} alt="Card image cap"/>
                    <div className="card-body">
                        <h3 ><u>{name}</u></h3>
                        <p>
                            <b>Price: </b> {price} ₪<br/>
                            <b>Details: </b>{desc} <br/>
                            <b>Serial number: </b> {id} <br/>
                            
                        </p>
                        <button style={{width:'50%',marginLeft:'25%', borderRadius:'22px', border:'3px solid gray'}} onClick={() => sendToMyCart(props.productsData)} className="btn btn-dark">add to cart</button> <br/>
                        {sessionUser.emailUser == 'admin@g.com' ?
                            <button style={{marginTop:'5px',width:'50%',marginLeft:'25%', borderRadius:'22px', border:'3px solid gray'}} onClick={() => deleteProd(id)} className="btn btn-dark">Delete product</button> 
                         : null }
                    </div>
            </div>
        </div> 
    </> 
    )
}
