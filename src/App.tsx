import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Login } from './pages/Login';
import { ProtectedRoute } from './routes/ProtectedRoute';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;