const IngredientList = (props) => {
    return <ul>// map through props.ingredients</ul>;
  };

  const App = () => {
    return (
      <main>
        <h1>Burger Stacker</h1>
        <section>
  
  <BurgerStack />
  </section>
  </main>
  );
  };
    
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        {Lettuce, Tomato, Kaiser Bun, Beef Patty}
        <IngredientList
          availableIngredients={availableIngredients}
          addToBurger={addToBurger}
        />
        {Cheese, Bacon, Soy Patty}
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
       
import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

<IngredientList/> 
</section> 
const IngredientList = ({availableIngredients, addToBurger }) => {
return (

<div>
<h2>Available Ingredients</h2>
<ul>
{availableIngredients.map((ingredient, index) => (
<li
  key={index}
  onClick={() => addToBurger(ingredient)}
  style={{ cursor: 'pointer', color: ingredient.color }}
>
  {ingredient.name}
</li>
))}
</ul>
</div>
);
};


const IngredientList = ({ availableIngredients, addToBurger }) => {
  return (
    <div>
      <h2>Available Ingredients</h2>
      <ul>
        {availableIngredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            action={addToBurger} 
            buttonText="Add"
          />
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;