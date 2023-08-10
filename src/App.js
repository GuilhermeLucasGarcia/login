import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="tabelCredenciais" >
        <div className="tableLabels">
          <div className="email" >
            <p>Email</p>
            <input type="text" placeholder="Email"></input>
          </div>
          <div className="senha" >
            <p>Senha</p>
            <input type="text" placeholder="Senha"></input>
          </div>
          <div className="enviar">
            <button>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
