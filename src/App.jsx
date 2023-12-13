import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/cards/Cards";
import Pagination from "./components/pagination/Pagination";
import Search from "./components/search/Search";
import Modal from "./components/Modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [pageNumber, setPageNumber] = useState(1); //1 is default page number but you can change it
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [currentCharacter, setCurrentCharacter] = useState({});
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [isModalClose] = useState(true);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]); //put a watch here, so whenever page number changes, it is run again.

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          height: "100%",
          width: "100%",
          justifyContent: 'flex-start'
        }}
      >
        <h1>Rick And Morty Challenge</h1>
        <Search setSearch={setSearch} />
        <div className="row" style={{ display: "flex" }}>
          <Cards
            onCharacterSelected={setCurrentCharacter}
            onButtonPressed={setIsModalOpen}
            results={results}
          />
        </div>
        {isModalOpen && isModalClose && <Modal currentCharacter={currentCharacter}
        onbtnclicked={setIsModalOpen}

/>}
        
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </>
  );
}

export default App;
