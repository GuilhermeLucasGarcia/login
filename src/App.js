import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  } 
  
  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  } 

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      const userData = {email, senha};
      const respoonse = await.post('http://localhost:3000/api/users', userData)
      console.log('Dados enviados', userData);

      setEmail('');
      setSenha('');
    } catch(error) {
      console.error('Erro ao enviar dados:', error);
    }
    
  }

  return (
    <div className="App">
      <div className="tabelCredenciais" >
        <div className="tableLabels">
          <div className="email" >
            <p>Email</p>
            <input type="text" placeholder="Email" value={email} onChange={handleEmailChange}></input>
          </div>
          <div className="senha" >
            <p>Senha</p>
            <input type="password" placeholder="Senha" value={senha} onChange={handleSenhaChange}></input>
          </div>
          <div className="entrar" onChange={handleSubmit}>
            <button onClick={handleSubmit}>Entrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
