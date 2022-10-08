import { Link } from 'react-router-dom';
import './card.css';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

export function FilmCard({
  imagem,
  name,
  genero,
  personagem,
  ano,
  id,
  handleRemove,
}) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };
  return (
    <section className="container-card">
      <img className="imagem" src={imagem} alt="Capa de filme" />

      <section>
        <p>
          {' '}
          <span>Id:</span> {id}{' '}
        </p>
        <p>
          {' '}
          <span>Nome:</span> {name}{' '}
        </p>
        <p>
          {' '}
          <span>Genero:</span> {genero}{' '}
        </p>
        <p>
          {' '}
          <span>Personagem:</span> {personagem}{' '}
        </p>
        <p>
          {' '}
          <span>Ano:</span> {ano}{' '}
        </p>
      </section>
      <section className="informações-button">
        <Link to= {`/films/${id}`}>
                <BsPencil/> Editar
            </Link>
        {handleRemove ? (
          <button className="remover" onClick={remove}>
            <BsFillTrashFill /> Excluir
          </button>
        ) : (
          <span></span>
        )}
      </section>
    </section>
  );
}
