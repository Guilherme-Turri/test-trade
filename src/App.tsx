import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Login } from './pages/Login';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { NotFound } from './pages/NotFound';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;