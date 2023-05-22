import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopAll from "./pages/ShopAll";
import ItemDetails from "./pages/ItemDetails";
import AboutMe from "./pages/AboutMe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Oops from "./pages/Oops";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={<ShopAll />}></Route>
          <Route path="/shop/:id" element={<ItemDetails />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/oops" element={<Oops />}></Route>
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
