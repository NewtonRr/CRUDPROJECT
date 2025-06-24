import './App.css';
import GetUser from './components/getUser.jsx';
import CreateUser from './components/createUser.jsx';
import DeleteUser from './components/deleteUser.jsx';
import UpdateUser from './components/updateUser.jsx';
import Home from './components/home.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/UsersList" element={<GetUser />} />
        <Route path="/CreateNewUser" element={<CreateUser />} />
        <Route path="/DeleteUser" element={<DeleteUser />} />
        <Route path="/UpdateUser" element={<UpdateUser />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;