import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from "./Pages/Login"
import ListeDeProduits from "./Pages/ListeDeProduits"
import DetailsDeProduits from "./Pages/DetailsDeProduits"
import Register from './Pages/Register';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/detail" element={<DetailsDeProduits />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/liste" element={<ListeDeProduits />} />
          <Route path="/" element={<MainPage />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
