import { useState } from 'react';
import axios from 'axios';
import MainContainer from './mainContainer';

export default function UpdateUser({ onUserChanged }) {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      await axios.put(`http://localhost:5001/api/user/${userId}`, {
        name,
        email,
      });
      setMessage('Usuário atualizado com sucesso!');
      setUserId('');
      setName('');
      setEmail('');
      if (onUserChanged) onUserChanged();
    } catch (err) {
      setError('Erro ao atualizar usuário');
    }
  };

  return (
    <div>
      <MainContainer />
      <h2>Atualizar Usuário</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>ID do Usuário:</label>
          <input
            type="text"
            value={userId}
            onChange={e => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Novo nome:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Novo email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Atualizar</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}