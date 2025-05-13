import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <ProductList />
      <Footer />
    </Router>
  );
}

export default App;