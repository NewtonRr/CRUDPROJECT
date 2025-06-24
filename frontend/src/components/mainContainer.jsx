import { Link } from 'react-router-dom';

export default function MainContainer() {
    return (
        <div className='App'>
            <nav className="navbar">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/UsersList" className="navbar-link">Lista de Usuários</Link>
                <Link to="/CreateNewUser" className="navbar-link">Criar Usuário</Link>
                <Link to="/UpdateUser" className="navbar-link">Atualizar Usuário</Link>
                <Link to="/DeleteUser" className="navbar-link">Deletar Usuário</Link>
            </nav>
            <h1>Menu</h1>
        </div>
    );
}