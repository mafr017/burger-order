export default function Layout({ children, addIngredients}) {
    // console.log(addIngredients);
    return (
        <main>
            <div className="btn-container-order">
                <button onClick={() => addIngredients("Bread")}>Add Bread 🍞</button>
                <button onClick={() => addIngredients("Patty")}>Add Patty 🥩</button>
                <button onClick={() => addIngredients("Cheese")}>Add Cheese 🧀</button>
                <button onClick={() => addIngredients("Lettuce")}>Add Lettuce 🥬</button>
                <button onClick={() => addIngredients("Tomato")}>Add Tomato 🍅</button>
                <button onClick={() => { }}>Remove Top Topping 🔝</button>
            </div>

            <div className="stack-burgers">
                {children}
            </div>

            <button>Summary 💲</button>
        </main>
    )
}