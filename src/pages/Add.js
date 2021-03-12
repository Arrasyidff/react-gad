import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";

function Add() {
  const [data, setData] = useState([]);
  const [showDataOn, setShowDataOn] = useState(true);
  const [showData, setShowData] = useState([]);
  const [currentPage, setCurretPage] = useState(0);
  const [dataPerPage, setDataPerPage] = useState(4);
  const [lastPage, setLastPage] = useState(0);
  const [inputSearch, setInputSearch] = useState("");
  const [loadingPage, setLoadingPage] = useState(true);
  const [btnPrevNext, setBtnPrevNext] = useState(true);
  const [searchData, setSearchData] = useState(false);
  const [resultSearch, setResultSearch] = useState([]);
  const [dataNotFound, setDataNotFound] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=28")
      .then(res => res.json())
      .then(data => {
        setData(data.results);
        setShowData(data.results);
        setTimeout(() => {
          setLoadingPage(false);
        }, 1000);
        const last = Math.ceil(data.results.length / dataPerPage) * 4;
        setLastPage(last);
      })
      .catch(err => console.log(err));
  }, []);

  const changePage = value => {
    setLoadingPage(true);
    if (value === "next") {
      setCurretPage(currentPage + 1 * 4);
      setDataPerPage(dataPerPage + 4);
    } else if (value === "previous") {
      setCurretPage(currentPage - 1 * 4);
      setDataPerPage(dataPerPage - 4);
    }
    setTimeout(() => {
      setLoadingPage(false);
    }, 1000);
  };

  const handleGetSearch = () => {
    let backupData = data;
    let resultSearch = backupData.filter(
      el => el.name.first.toLowerCase() === inputSearch.toLowerCase()
    );
    if (resultSearch.length === 0) {
      setLoadingPage(true);
      setDataNotFound(true);
      setBtnPrevNext(false);
      setTimeout(() => {
        setLoadingPage(false);
      }, 1000);
    } else {
      setLoadingPage(true);
      setSearchData(true);
      setResultSearch(resultSearch);
      setShowDataOn(false);
      setBtnPrevNext(false);
      setTimeout(() => {
        setLoadingPage(false);
      }, 1000);
    }
    setInputSearch("")
  };

  const handleClickShowAllPersonnel = () => {
    if (dataNotFound) {
      setLoadingPage(true);
      setBtnPrevNext(true);
      setDataNotFound(false);
      setTimeout(() => {
        setLoadingPage(false);
      }, 1000);
    } else {
      setLoadingPage(true);
      setShowDataOn(true);
      setShowData(data);
      setResultSearch([]);
      setSearchData(false);
      setBtnPrevNext(true);
      setTimeout(() => {
        setLoadingPage(false);
      }, 1000);
    }
  };

  if (loadingPage) return <Loading />;

  if (dataNotFound)
    return (
      <div className="data-not-found">
        <img
          src="https://cdn.dribbble.com/users/1121009/screenshots/11030107/media/25be2b86a12dbfd8da02db4cfcbfe50a.jpg?compress=1&resize=400x300"
          alt=""
        />
        <p>Data Not Found</p>
        <button onClick={handleClickShowAllPersonnel}>
          Show All Personnels
        </button>
      </div>
    );

  return (
    <>
      <div className="header-personnels">
        <div className="title-personnels">
          <h1>PERSONNEL LIST</h1>
          <p>List of all personnels</p>
        </div>
        <div className="actions-personnels">
          <div className="search-person">
            <i class="fas fa-search" onClick={handleGetSearch}></i>
            <input
              type="text"
              placeholder="Find Personnels"
              value={inputSearch}
              onChange={e => setInputSearch(e.target.value)}
            />
          </div>
          <div className="add-personnel">
            <p>
              ADD PERSONNEL <i class="fas fa-plus"></i>
            </p>
          </div>
        </div>
      </div>

      {searchData && (
        <div className="filterData">
          {resultSearch.map(el => {
            return (
              <>
                <Card key={el.email} data={el} />
                <button onClick={handleClickShowAllPersonnel}>
                  Show All Personnels
                </button>
              </>
            );
          })}
        </div>
      )}

      {showDataOn && (
        <div className="personnels grid grid-cols-4 gap-2">
          {showData.slice(currentPage, dataPerPage).map(el => {
            return <Card key={el.email} data={el} />;
          })}
        </div>
      )}

      {btnPrevNext && (
        <div className="pagination-button">
          <div className="actions-btn">
            <button
              className="btn-previous"
              onClick={changePage.bind(this, "previous")}
              disabled={currentPage === 0}
            >
              <i class="fas fa-chevron-left"></i>
              Previous
            </button>
            <button
              className="btn-next"
              onClick={changePage.bind(this, "next")}
              disabled={dataPerPage === lastPage}
            >
              Next
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Add;
