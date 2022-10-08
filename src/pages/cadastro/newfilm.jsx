import { useHistory } from 'react-router-dom';

import './newfilm.css';

import { Filmform } from '../../components/films/films.form';

export function Newfilme() {
  const history = useHistory();

  function filmePost(filme) {
    filme.cost = 0;
    filme.services = [];

    fetch(' https://list-to-do-heroku.herokuapp.com/api/films', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(filme),
    })
      .then((resp) => {
        resp.json();
      })
      .then((filme) => {
        console.log(filme);
        history.push('/');
      })
      .catch((err) => alert(err));
  }

  return (
    <div className="container">
      <h1>Adicionar filme</h1>
      <p>Adicione seu filme no formulario para salvar</p>
      <Filmform handleSubmit={filmePost} btnText="Adicionar filme" />
    </div>
  );
}
