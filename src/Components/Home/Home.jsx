import { useEffect, useRef, useState } from "react";
import List from "./List/List";
import Loading from "./Loading/Loading";
import "./Home.css";
function Home() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const inputRef = useRef(null);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = async (e) => {
    e?.preventDefault();
    setLoading(true);
    const response = await fetch(url + input);
    const dataJson = await response.json();
    setData(dataJson);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    inputRef.current.focus();
    handleSubmit();
  }, []);
  return (
    <main className="Home">
      <form className="search_area" onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="drink..."
          className="search_input"
          type="text"
          value={input}
          ref={inputRef}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" className="search_button">
          Find
        </button>
      </form>
      {loading ? <Loading /> : <List data={data} />}
    </main>
  );
}

export default Home;
