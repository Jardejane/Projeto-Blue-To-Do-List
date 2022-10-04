import { Link } from 'react-router-dom';
import './componente.cadastro.css';
export function ComponenteCadastro({ to, text }) {
  return (
    <Link className="button-cadastro" to={to}>
      {text}
    </Link>
  );
}
