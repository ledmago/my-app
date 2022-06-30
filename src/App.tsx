import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterIcon from "./Components/filterIcon";
import Card from './Components/Card';
import Modal from "./Components/Modal"
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_CHARACTERS } from './queries';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const [filter, setFilter] = useState(null);
  const [info, setInfo] = useState({
    count: 0
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [getCharacters, { loading, error, data }] = useLazyQuery(GET_CHARACTERS);
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<any>([]);
  // console.log(characters, error)

  const getCharactersByPagination = async (page: number) => {

    await getCharacters({
      variables: {
        page: page
      },

    }).then(data => {
      setCharacters((prev: any) => [...prev, ...data.data.characters.results.filter((e: any) => e.name.toLowerCase().includes("rick") || e.name.toLowerCase().includes("morty"))]);
      setInfo(data.data.characters.info);
      setPage(prev => prev + 1);
    })
  }


  useEffect(() => {

    getCharactersByPagination(page)

  }, [])


  return (
    <div className='container'>
      <h3 className='title'>Rick and Morty <FilterIcon size={20} fill='#CCC' onClick={() => setShowModal(true)} /></h3>

      <div className="container">
        {/* {loading && <p>Loading...</p>}
        {error && <p>Error</p>} */}

        <InfiniteScroll
          dataLength={characters.length} //This is important field to render the next data
          next={() => getCharactersByPagination(page + 1)}
          hasMore={info.count > characters.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="row" onClick={() => getCharactersByPagination(page + 1)}>
            {characters.map((character: any) => {
              return (<div className="col-md-6" key={character.id}>
                <Card img={character.image} id={character.id} name={character.name} location={
                  character.location.name} />
              </div>)
            })}
          </div>
        </InfiniteScroll>

      </div >


      <Modal showModal={showModal} setFilter={setFilter} setShowModal={setShowModal} filter={filter} />
    </div >
  );
}

export default App;
