/** Libs */
import { useState } from 'react';

/** Components */
import Layout from './components/layout';
import Patty from './components/burger/patty';
import Cheese from './components/burger/cheese';
import Lettuce from './components/burger/lettuce';
import Tomato from './components/burger/tomato';
import Bread from './components/burger/bread';

/** Assets */
import './App.css';

export default function App() {
  console.log("Mentee: Muhammad Aditya Fathur Rahman");

  // State  
  const [stackBurger, stackBurgerSet] = useState([]);

  // Handler
  const addIngredientsHandler = (val) => {
    stackBurgerSet((prev) => {
      let tempIngredients = [...prev];
      tempIngredients.push(val);
      return tempIngredients;
    })
  }
  const removeIngredientsHandler = () => {
    stackBurgerSet((prev) => {
      let tempIngredients = [...prev];
      tempIngredients.pop();
      return tempIngredients;
    })
  }

  return (
    <div className="App">
      <h1>Order Burgers</h1>
      <Layout addIngredients={addIngredientsHandler} removeIngredients={removeIngredientsHandler}>
        {stackBurger.slice(0).reverse().map((ingredient, i) => (
          <>
            {ingredient === "Bread" && <Bread key={i} />}
            {ingredient === "Patty" && <Patty key={i} />}
            {ingredient === "Cheese" && <Cheese key={i} />}
            {ingredient === "Lettuce" && <Lettuce key={i} />}
            {ingredient === "Tomato" && <Tomato key={i} />}
          </>
        ))}
      </Layout>
    </div>
  );
}