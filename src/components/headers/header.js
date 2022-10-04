import { Link } from 'react-router-dom';
import { Container } from '../layout/containers';
import logo from '../imagens/logo-react.jpg';
import './header.css';

export function Header() {
  return (
    <nav>
      <Container>
        <div className="header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <ul className="list">
            <li className="item">
              <Link to="/">Home </Link>
            </li>
            <li className="item"></li>
              <Link to="/cadastro">Cadastro </Link>
            </li>
            <li className="item">
              <Link to="/todos/filmes">Pesquisar Filme</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
