/** Libs */
import { useEffect, useState } from 'react';

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
  // State  
  const [stackBurger, stackBurgerSet] = useState([]);
  const [count, countSet] = useState(0);
  const [total, totalSet] = useState(0);

  // func

  // Handler
  const addIngredientsHandler = (value) => {
    stackBurgerSet((prev) => {
      let tempIngredients = [...prev];
      tempIngredients.push(value);
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
  const summaryBurgerHandler = () => {
    totalSet(stackBurger.reduce((summary, topping) => summary + topping.price, 0));
  }

  // useEffect
  useEffect(() => {
    console.log(`Count ${count} times`);
    if (count < 1) {
      addIngredientsHandler({ topping: "Bread", price: 1000 })
      countSet(count + 1)
    }
  }, [count])

  return (
    <div className="App">
      <h1>Order Burgers</h1>
      <Layout addIngredients={addIngredientsHandler} removeIngredients={removeIngredientsHandler} stackBurger={stackBurger} summaryOrder={summaryBurgerHandler} totalPrice={total} >
        {stackBurger.slice(0).reverse().map((ingredient, i) => (
          <>
            {ingredient.topping === "Bread" && <Bread key={i} />}
            {ingredient.topping === "Patty" && <Patty key={i} />}
            {ingredient.topping === "Cheese" && <Cheese key={i} />}
            {ingredient.topping === "Lettuce" && <Lettuce key={i} />}
            {ingredient.topping === "Tomato" && <Tomato key={i} />}
          </>
        ))}
      </Layout>
    </div>
  );
}