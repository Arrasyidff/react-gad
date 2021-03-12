import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [showData, setShowData] = useState([]);
  const [currentPage, setCurretPage] = useState(0);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=28")
      .then(res => res.json())
      .then(data => {
        setData(data.results);
        setShowData(data.results);
        const last = Math.ceil(data.results.length / dataPerPage) * 10;
        setLastPage(last);
      })
      .catch(err => console.log(err));
  }, []);

  const onChangeSearch = e => {
    setInput(e.target.value);
  };

  const onClickInput = () => {
    let newData = data;
    let filterData = newData.filter(
      el => el.name.first.toLowerCase() === input.toLowerCase()
    );
    if (input.toLowerCase() === "") {
      setShowData(newData);
    } else {
      setShowData(filterData);
    }
  };

  const changePage = value => {
    if (value === "next") {
      setCurretPage(currentPage + 1 * 10);
      setDataPerPage(dataPerPage + 10);
    } else if (value === "previous") {
      setCurretPage(currentPage - 1 * 10);
      setDataPerPage(dataPerPage - 10);
    }
  };

  return (
    <>
      <input type="text" placeholder="search" onChange={onChangeSearch} />
      <button onClick={onClickInput}>search</button>
      <div style={{ display: "flex" }}>
        <button
          onClick={changePage.bind(this, "previous")}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          disabled={dataPerPage === lastPage}
          onClick={changePage.bind(this, "next")}
        >
          next
        </button>
      </div>
      {showData.slice(currentPage, dataPerPage).map((el, idx) => {
        return (
          <ul key={idx}>
            <li>{el.name.first}</li>
          </ul>
        );
      })}
    </>
  );
}

export default App;
