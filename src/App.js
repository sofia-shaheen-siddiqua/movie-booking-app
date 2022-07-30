import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import Authentication from './pages/authentication/Authentication';
import Customer from './pages/customer/Customer';
import Client from './pages/client/Client';
import Admin from './pages/admin/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/login' element={<Authentication />} />
          <Route exact path='/customer' element={<Customer />} />
          <Route exact path='/admin' element={<Admin />} />
          <Route exact path='/client' element={<Client />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
