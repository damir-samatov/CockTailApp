import Item from "../Item/Item";
import "./List.css";
function List({ data }) {
  const list = data?.drinks?.map((drink) => (
    <Item key={drink.idDrink} drink={drink} />
  ));
  if (data.drinks) {
    return <div className="List">{list}</div>;
  } else {
    return (
      <div className="NoResults">
        <h1>No results</h1>
      </div>
    );
  }
}
export default List;
