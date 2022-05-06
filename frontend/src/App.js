import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>

            <Route path='/'>
              <Dashboard />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/register'>
              <Register />
            </Route>

          </Routes>
          
        </div>
      </Router>
    </>
  );
}

export default App;