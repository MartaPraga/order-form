import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import { Form } from './components/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <NavBar />
        <Form />
      </div>
    </div>
  );
}

export default App;
