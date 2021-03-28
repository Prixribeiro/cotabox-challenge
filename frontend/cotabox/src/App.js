import './App.css';
import Formulario from './components/form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Tabela from './components/tabela';
import Grafico from './components/grafico';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Formulario />
      </header>
      <main>
      <Container fluid className="text-center p-4">
          <h2>DATA</h2>
          <small className="p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
      </Container>
      <Container>
      <Row xs={2} md={2}>
        <Tabela />
        <Grafico />
      </Row>
      </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
