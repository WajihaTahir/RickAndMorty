import React, { useState, useEffect } from "react";
import "./App.css";
import Filters from "./components/filters/Filters";
import Cards from "./components/cards/Cards";
import Pagination from "./components/pagination/Pagination";
import Search from "./components/search/Search";
import Modal from './components/Modal/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let [pageNumber, setPageNumber] = useState(1); //1 is default page number but you can change it
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [currentCharacter, setCurrentCharacter] = useState({});
  let [isModalOpen, setIsModalOpen] = useState(false);
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
      <div>
        <h1>Rick And Morty Challenge</h1>
        <Search setSearch={setSearch}/>
        <div
          className="row"
          style={{display:"flex"}}
        >
          <Cards
            onCharacterSelected={setCurrentCharacter}
            onButtonPressed={setIsModalOpen}
            results={results}
          />
        </div>
        {isModalOpen && <Modal currentCharacter={currentCharacter}/>}
        <Pagination info={info}pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </>
  );
}

export default App;
