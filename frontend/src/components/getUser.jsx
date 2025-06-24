import { useEffect, useState } from 'react';
import axios from 'axios';
import MainContainer from './mainContainer';

export default function GetUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [inputId, setInputId] = useState('');
  const [searchId, setSearchId] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5001/api/user')
      .then((res) => {
        setUsers(Array.isArray(res.data.data) ? res.data.data : []);
        setLoading(false);
      })
      .catch((err) => {
        setError('Erro ao buscar usuários');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando usuários...</p>;
  if (error) return <p>{error}</p>;

  const filteredUsers = searchId
    ? users.filter((user) => String(user.id) === searchId)
    : users;

  return (
    <div>
      <MainContainer />
      <h2>Lista de Usuários</h2>
      <div className="user-search-container">
        <input
          type="text"
          placeholder="Buscar por ID"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          className="user-search-input"
        />
        <button
          className="user-search-button"
          onClick={() => setSearchId(inputId)}
        >
          Buscar
        </button>
      </div>
      {filteredUsers.length === 0 ? (
        <p>Nenhum usuário cadastrado ainda.</p>
      ) : (
        <ul>
          {filteredUsers.map((user, index) => (
            <li key={index}>{user.name} - {user.email} (ID: {user.id})</li>
          ))}
        </ul>
      )}
    </div>
  );
}