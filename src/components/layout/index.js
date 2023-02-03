import { Fragment } from "react";

export default function Layout({ children, addIngredients, removeIngredients, stackBurger, summaryOrder, totalPrice }) {
    console.log(stackBurger);
    return (
        <main>
            <div className="btn-container-order">
                <button onClick={() => addIngredients({ topping: "Bread", price: 1000 })}>Add Bread 🍞</button>
                <button onClick={() => addIngredients({ topping: "Patty", price: 5000 })}>Add Patty 🥩</button>
                <button onClick={() => addIngredients({ topping: "Cheese", price: 3500 })}>Add Cheese 🧀</button>
                <button onClick={() => addIngredients({ topping: "Lettuce", price: 1000 })}>Add Lettuce 🥬</button>
                <button onClick={() => addIngredients({ topping: "Tomato", price: 2000 })}>Add Tomato 🍅</button>
                <button onClick={() => removeIngredients()}>Remove Top Topping 🔝</button>
            </div>

            <div className="stack-burgers">
                {children}
            </div>

            <button style={{marginBottom: '25px'}} onClick={() => summaryOrder()}>Summary 💲</button>
            
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Topping</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {stackBurger.length < 1 ?
                        <Fragment>
                            <tr>
                                <td>0.</td>
                                <td>-</td>
                                <td>0</td>
                            </tr>
                        </Fragment>
                        : null /** Empty Conditional */}
                    {stackBurger.map((el, i) => (
                        <tr key={i}>
                            <td>{i + 1}.</td>
                            <td>{el.topping}</td>
                            <td>$ {el.price}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total:</th>
                        <td>$ {totalPrice}</td>
                    </tr>
                </tfoot>
            </table>
        </main >
    )
}