import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage/HomePage';
import SearchResult from './Pages/SearchResult/SearchResult';
import ProductPage from './Pages/ProductPage/ProductPage';
import CartPage from './Pages/CartPage/CartPage';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={HomePage}/>
          <Route path="/searchresult" element={SearchResult}/>
          <Route path="/product/:id" element={ProductPage}/>
          <Route path="/cart" element={CartPage}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
