import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ShopAll from "./pages/ShopAll";
import ItemDetails from "./pages/ItemDetails";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/shop" element={<ShopAll/>}></Route>
      <Route path="/shop/:id" element={<ItemDetails/>}></Route>
      <Route path="/about" element={<AboutMe/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
