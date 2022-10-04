import { useState, useEffect } from 'react';
import Input from '../forms/forms.jsx';
import Buttonform from '../forms/button.submit.jsx';
import './films.form.css';

export function Filmform({ handleSubmit, btnText, filmeData }) {
  const [filme, setFilme] = useState(filmeData || []);

  const submit = (e) => {
    e.preventDefault();
    console.log(filme);
    handleSubmit(filme);
  };
  function handleChange(e) {
    setFilme({ ...filme, [e.target.name]: e.target.value });
  }

  return (
    <section className="container">
      <form onSubmit={submit} className="form">
        <Input
          type="text"
          text="Nome do filme"
          name="name"
          placeholder="Adicione o nome do Filme"
          handleOnChange={handleChange}
          value={filme.name}
        />

        <Input
          type="text"
          text="Genero do filme"
          name="genero"
          placeholder="Adicione o nome do Genero"
          handleOnChange={handleChange}
          value={filme.genero ? filme.genero : ''}
        />
        <Input
          type="text"
          text="Personagem Favorito"
          name="personagem"
          placeholder="Adicione o nome do Personagem"
          handleOnChange={handleChange}
          value={filme.personagem ? filme.personagem : ''}
        />

        <Input
          type="number"
          text="Ano de lançamento"
          name="ano"
          placeholder="Adicione o ano lançamento"
          handleOnChange={handleChange}
          value={filme.ano ? filme.ano : ''}
        />
        <Input
          type="text"
          text="Link da capa"
          name="imagem"
          placeholder="Adicione o link do capa"
          handleOnChange={handleChange}
          value={filme.imagem ? filme.imagem : ''}
        />
        <Buttonform text={btnText} />
      </form>
    </section>
  );
}
