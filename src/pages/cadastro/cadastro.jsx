import imagem from '../../components/imagens/logo-react.jpg';
import './cadastro.css';
import { ComponenteCadastro } from './componente.cadastro';

export function Cadastro() {
  return (
    <section className="cadastro_container">
      <h1>
        Bem-vindo a seção de <span>Cadastro</span>
      </h1>
      <p>Cadastre seus filmes preferidos agora mesmo</p>
      <ComponenteCadastro to="/newfilme" text="Cadastrar filme" />
      <img src={imagem} alt="capa com varios filmes" />
    </section>
  );
}
