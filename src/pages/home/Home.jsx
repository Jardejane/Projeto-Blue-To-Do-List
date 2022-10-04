import './Home.css';
import { useState, useEffect } from 'react';

import { Container } from '../../components/layout/containers';
import { FilmCard } from './card';

export function Home() {
  const [filme, setFilme] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/films', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setFilme(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function removeFilme(id) {
    fetch(`http://localhost:5000/films/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setFilme(filme.filter((filme) => filme.id !== id));
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="container-films">
      <h1>Meus filmes</h1>

      <Container customClass="start">
        {filme.length > 0 &&
          filme.map((filme) => (
            <FilmCard
              imagem={filme.imagem}
              id={filme.id}
              name={filme.name}
              genero={filme.genero}
              personagem={filme.personagem}
              ano={filme.ano}
              key={filme.id}
              handleRemove={removeFilme}
            />
          ))}
      </Container>
    </section>
  );
}
