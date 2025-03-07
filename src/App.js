import './App.css';
import {Container } from '@mui/material';
import Header from './components/header';
import Preparation from './components/preparation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container>
        <Header/>
        <Preparation/>
      </Container>
      
      </header>
    </div>
  );
}

export default App;
