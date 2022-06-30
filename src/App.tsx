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

interface Character {
  name: string;
  image: string;
  id: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: {
    name: string
  };
  created: string


}

function App() {
  const [filter, setFilter] = useState(null);
  const [infoMorty, setInfoMorty] = useState({
    count: 0
  });
  const [infoRick, setInfoRick] = useState({
    count: 0
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [getCharacters, { loading, error, data }] = useLazyQuery(GET_CHARACTERS);
  const [page, setPage] = useState<number>(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  // console.log(characters, error)

  const getCharactersByPagination = async (page: number) => {
    if (filter == "rick" || filter == null) {
      await getCharacters({
        variables: {
          page: page,
          filter: { name: "rick" }
        },

      }).then(data => {
        setCharacters((prev: Character[]) => [...prev, ...data.data.characters.results].sort((a: Character, b: Character) => Number(a.id) < Number(b.id) ? -1 : 1));
        setInfoRick(data.data.characters.info);
        setPage(prev => prev + 1);
      })
    }

    if (filter == "morty" || filter == null) {
      await getCharacters({
        variables: {
          page: page,
          filter: { name: "morty" }
        },

      }).then(data => {
        setCharacters((prev: Character[]) => [...prev, ...data.data.characters.results].sort((a: Character, b: Character) => Number(a.id) < Number(b.id) ? -1 : 1));
        setInfoMorty(data.data.characters.info);
        setPage(prev => prev + 1);
      })
    }
  }


  useEffect(() => {
    setPage(1)
    setCharacters([])
    setInfoRick({ count: 0 })
    setInfoMorty({ count: 0 })
    getCharactersByPagination(1)

  }, [filter])


  return (
    <div className='container'>
      <h3 className='title'>Rick and Morty <FilterIcon size={20} fill='#CCC' onClick={() => setShowModal(true)} /></h3>

      <div className="container">
        {/* {loading && <p>Loading...</p>}
        {error && <p>Error</p>} */}

        <InfiniteScroll
          dataLength={characters.length} //This is important field to render the next data
          next={() => getCharactersByPagination(page + 1)}
          hasMore={infoRick.count + infoMorty.count > characters.length}
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
