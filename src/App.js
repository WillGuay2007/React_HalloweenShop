import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainPage from "./Pages/MainPage"
import Login from "./Pages/Login"
import ListeDeProduits from "./Pages/ListeDeProduits"
import DetailsDeProduits from "./Pages/DetailsDeProduits"

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="ProductDetails" element={<DetailsDeProduits />} />
          <Route path="MainPage" element={<MainPage />} />
          <Route path="Login" element={<Login />} />
          <Route path="ListeDeProduits" element={<ListeDeProduits />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
