import { useState } from 'react';
import axios from 'axios';
import MainContainer from './mainContainer';

export default function DeleteUser() {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      await axios.delete(`http://localhost:5001/api/user/${userId}`);
      setMessage('Usuário deletado com sucesso!');
      setUserId('');
    } catch (err) {
      setError('Erro ao deletar usuário');
    }
  };

  return (
    <div>
      <MainContainer />
      <h2>Deletar Usuário</h2>
      <form onSubmit={handleDelete}>
        <div>
          <label>ID do Usuário:</label>
          <input
            type="text"
            value={userId}
            onChange={e => setUserId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Deletar</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}