import { useState } from 'react';
import './films.pesquisa.css';
import { FilmCard } from '../../pages/home/card';

export function Films() {
  const [input, setInput] = useState();
  const [filmVisualiza, setFilmeVizualiza] = useState({
    imagem: '',
    name: '',
    genero: '',
    personagem: '',
    ano: '',
    id: '',
  });

  function FindIdFilme(id) {
    fetch(`https://list-to-do-heroku.herokuapp.com/api/films/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'aplication/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setFilmeVizualiza(data);
        console.log(data);
      })
      .catch((err) => console.log('erro', err));
  }
  return (
    <section className="contairner">
      <div>
        <div className="input-group">
          <input
            required=""
            type="text"
            name="number"
            className="input"
            onChange={(event) => setInput(event.target.value)}
          />
          <label className="user-label">Digite o Id</label>
        </div>
        <button className="find" onClick={() => FindIdFilme(input)}>
          Pesquisar filme
        </button>
      </div>

      <div>
        {filmVisualiza.id !== '' ? (
          <FilmCard
            imagem={filmVisualiza.imagem}
            name={filmVisualiza.name}
            genero={filmVisualiza.genero}
            personagem={filmVisualiza.personagem}
            ano={filmVisualiza.ano}
            id={filmVisualiza.id}
          />
        ) : (
          <span></span>
        )}
      </div>
    </section>
  );
}
