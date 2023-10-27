import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Home from "./components/index";
import Pdetails from "./components/page/productDetails/pdetails";
import Blogpage from "./components/page/blog/blogpage";
import Blogdetail from "./components/page/blogdetails/blogdetail";
import Shop from "./components/page/shop/shop";
import Footer from "./components/footer/footer";
import "./assets/css/grid.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App grid wide">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/product/detail" element={<Pdetails />} />
        </Routes>
        <Routes>
          <Route path="/blog" element={<Blogpage />} />
        </Routes>
        <Routes>
          <Route path="/blog/detail" element={<Blogdetail />} />
        </Routes>
        <Routes>
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
