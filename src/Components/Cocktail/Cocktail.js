import React from 'react';
import './Cocktail.css'
const Cocktail = (props) => {
    const {strDrinkThumb, strIngredient3,strInstructions} =props.cocktail;
    return (
        <div class="col">
    <div class="card h-100">
      <img src={strDrinkThumb} class="card-img-top" alt="..."/>
      <div class="card-body">
      <h3>Name : {strIngredient3}</h3>
      <p>Manufacture : {strInstructions.slice(0,50)}</p>
            <button onClick={() => props.addToCartHandler(props.cocktail)} className='btn btn-success btn-cart'>
                Add To Cart
            </button>
      </div>
    </div>
  </div>
        
    );
};

export default Cocktail;