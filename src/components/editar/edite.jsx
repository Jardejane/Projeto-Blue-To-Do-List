import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from '../layout/containers';
import { Filmform } from '../films/films.form';
import './edite.css';

export function Editar() {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);
  const [verFilme, setVerFilme] = useState(false);

  useEffect(() => {
    fetch(`https://list-to-do-heroku.herokuapp.com/api/films/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setFilme(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function editePost(filme){
   fetch (`https://list-to-do-heroku.herokuapp.com/api/films/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type' : 'application/json',
    },
    body: JSON.stringify(filme)
   })
   .then((resp) => resp.json())
   .then((data) => {
     setFilme(data)
     setVerFilme(false)
   })
    .catch((err) => console.log(err))
  }

  function editando() {
    setVerFilme(!verFilme);
  }

  return (
    <>
      <div className="geral">
        <Container customClass="column">

          <div className="detalhes">

            <h1>Filme: {filme.name}</h1>
            <button className="btn" onClick={editando}>
              {!verFilme ? 'Editar Projeto' : 'Fechar'}
            </button>
            </div>
          
        <div className='gg'>
            {!verFilme ? (
              <div className="film-inf">
                <p>
                  <span>Id:</span> {filme.id}{' '}
                </p>
                <p>
                  <span>Nome:</span> {filme.name}{' '}
                </p>
                <p>
                  <span>Genero:</span> {filme.genero}{' '}
                </p>
                <p>
                  <span>Personagem:</span> {filme.personagem}{' '}
                </p>
                <p>
                  <span>Ano:</span> {filme.ano}{' '}
                </p>
              </div>
            ) : (
              <div className="film-card">
                <Filmform
                  handleSubmit={editePost}
                  btnText="Concluir edição"
                  filmeData={filme}
                />
              </div>
            )}
           </div>
        </Container>
      </div>
    </>
  );
}
