import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./Pages/UserCredential/Login"
import PublicRoute from "./Common/ProtectedRoute/PublicRoute";
import ProtectedRoute from "./Common/ProtectedRoute/ProtectedRoute";
import Homepage from './Pages/Homepage/Homepage';
import { useSelector } from 'react-redux';

function App() {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const isAuthenticated = true ;
  return (
    <div>
      <Routes>
        <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/log-in' element={<Login />}></Route>
        </Route>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/' element={<Homepage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
