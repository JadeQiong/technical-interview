import logo from './logo.svg';
import Header from './components/Header';
import Foot from './components/Foot';
import './App.css';
import './styles/web.css'
import Main from './components/Main';

function App() {
  return (
    <div className="App">
    <Header></Header>
      {/* <header className="App-header">
      </header> */}
      <Main></Main>
      <Foot></Foot>
    </div>
  );
}

export default App;
