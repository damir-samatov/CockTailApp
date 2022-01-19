import { useEffect, useState } from "react";
import "./Item.css";
function Item({ drink }) {
  const [ingregients, setIngredients] = useState([]);
  useEffect(() => {
    const array = [];
    let i = 1;
    while (drink[`strIngredient${i}`]) {
      array.push(drink[`strIngredient${i}`]);
      i++;
    }
    setIngredients(array);
  }, []);
  return (
    <div className="Item">
      <div className="item_content">
        <div className="text_side">
          <h1 className="drink_name">{drink.strDrink}</h1>
          <h1>{drink.strAlcoholic}</h1>
          <h1>{drink.strCategory}</h1>
          <h1>{drink.strGlass}</h1>
          <h1>Ingredients:</h1>
          <span>{ingregients.map((ing) => ing + ", ")}</span>
          <h1>Instructions:</h1>
          <p>{drink.strInstructions}</p>
        </div>
        <div className="image_side">
          <img className="img" src={drink.strDrinkThumb} alt={drink.strDrink} />
        </div>
      </div>
    </div>
  );
}
export default Item;
