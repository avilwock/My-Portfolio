import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import UpcomingProjects from "./pages/UpcomingProjects/UpcomingProjects";
// import AuthorPage from "./pages/AuthorPage/AuthorPage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Calendar from "./pages/Calendar/Calendar";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import{CartProvider} from "./context/CartContext/CartContext";
import FeaturedBooks from "./pages/FeaturedBooks/FeaturedBooks";
import BookDetails from "./pages/BookDetails/BookDetails";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />

      <div className="page-container">
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/upcoming-projects" element={<UpcomingProjects />} />
            <Route path="/upcomingProjects/:upcomingProjectsId" element ={<UpcomingProjects />} />
            <Route path="/featuredbooks" element={<FeaturedBooks />} />
            <Route path="/books/:bookId" element={<BookDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="*" element ={<ErrorPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App