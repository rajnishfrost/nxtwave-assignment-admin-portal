import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./Pages/UserCredential/Login"
import PublicRoute from "./Common/ProtectedRoute/PublicRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PublicRoute isAuthenticated={false} />}>
          <Route path='/log-in' element={<Login />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
