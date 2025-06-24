import { useState } from 'react';
import axios from 'axios';
import MainContainer from './mainContainer';

export default function CreateUser() {
  const [, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage('');
  setError('');
  try {
    const res = await axios.post('http://localhost:5001/api/user', { name, email });
    setMessage('Usuário criado com sucesso!');
    setUsers(prev => [...prev, res.data]); // Adiciona o novo usuário à lista
    setName('');
    setEmail('');
  } catch (err) {
    setError('Erro ao criar usuário');
  }
};

  return (
    <div>
      <MainContainer />
      <h2>Criar Novo Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Criar</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}