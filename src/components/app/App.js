import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from '../footer/Footer';
import { Home } from '../../pages/home/Home';
import { Header } from '../headers/header';
import { Cadastro } from '../../pages/cadastro/cadastro';
import { Container } from '../layout/containers';
import { Newfilme } from '../../pages/cadastro/newfilm';
import { Films } from '../films/films';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/cadastro">
            <Cadastro />
          </Route>
          <Route exact path="/todos/filmes">
            <Films />
          </Route>
          <Route exact path="/newfilme">
            <Newfilme />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
