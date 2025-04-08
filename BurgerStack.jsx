import React, { useState } from 'react';

const [stack, setStack] = useState([]);

const BurgerStack = ({ stack, removeFromBurger }) => {
return (
<div>
<h2>Your Burger Stack</h2>
<ul>
  {stack.map((ingredient, index) => (
    <li
      key={index}
      onClick={() => removeFromBurger(ingredient)}
      style={{ cursor: 'pointer', color: ingredient.color }}
    >
      {ingredient.name}
    </li>
  ))}
</ul>
</div>
);
};

const App = () => {

    const [availableIngredients, setAvailableIngredients] = useState([
      { name: 'Lettuce', color: 'green' },
      { name: 'Tomato', color: 'red' },
      { name: 'Cheese', color: 'yellow' },
      { name: 'Bacon', color: 'brown' },
      { name: 'Pickles', color: 'yellowgreen' },
    ]);
    
  
    const addToBurger = (ingredient) => {
      setStack((prevStack) => [...prevStack, ingredient]);
    };
  
    const removeFromBurger = (ingredient) => {
      setStack((prevStack) =>
        prevStack.filter((item) => item.name !== ingredient.name)
      );
    };

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <div>
      <h2>Your Burger Stack</h2>
      {stack.length === 0 ? (
        <p>No Ingredients</p> 
      ) : (
        <ul>
          {stack.map((ingredient, index) => (
            <Ingredient
              key={index}
              ingredient={ingredient}
              action={removeFromBurger} 
              buttonText="Remove"
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BurgerStack
