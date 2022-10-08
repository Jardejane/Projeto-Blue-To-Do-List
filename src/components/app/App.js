import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from '../footer/Footer';
import { Home } from '../../pages/home/Home';
import { Header } from '../headers/header';
import { Cadastro } from '../../pages/cadastro/cadastro';
import { Container } from '../layout/containers';
import { Newfilme } from '../../pages/cadastro/newfilm';
import { Films } from '../films/films';
import {Editar} from '../editar/edite'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cadastro">
            <Cadastro />
          </Route>
          <Route  path="/todos/filmes">
            <Films />
          </Route>
          <Route  path="/newfilme">
            <Newfilme />
          </Route>
          <Route  path="/films/:id">
            <Editar/>
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
