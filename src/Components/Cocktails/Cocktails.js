import React, { useEffect, useState } from 'react';
import Cocktail from '../Cocktail/Cocktail';
import './Cocktails.css'
const Cocktails = () => {
    const [cart, setCart] =useState([]);

    const addToCartHandler =(cocktails) =>{
        
        const newCart = [...cart, cocktails];
        setCart(newCart);

    }

    const [cocktails , setCocktails] = useState([]);
   
    useEffect(()=>{
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setCocktails(data.drinks))
    },[])
    return (
        <div className='container'>
            <div className='row'>
           <div className=" col-md-8 col-lg-9 mt-5">
           <div className=' row row-cols-1 row-cols-md-2 gy-5'>
                
                {
                cocktails.map(cocktail => <Cocktail cocktail={cocktail}
                   key={cocktail.idDrink}
                    addToCartHandler={addToCartHandler}
                >
                    
                </Cocktail>)
            }
           
            

        </div>
           </div>
            
            <div className=' col-md-4 col-lg-3 mt-0 bg-danger border border border-3 rounded-3 '>
                <h4>Cocktail Summary:</h4>
                <h6>Selected Item : {cart.length}</h6>
            </div>
        </div>

        </div>
    );
};

export default Cocktails;