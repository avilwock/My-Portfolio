import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import UpcomingProjects from "./pages/UpcomingProjects/UpcomingProjects";
// import ProjectPage from "./pages/ProjectPage/ProjectPage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Calendar from "./pages/Calendar/Calendar";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import{CartProvider} from "./context/CartContext/CartContext";
import FeaturedWorks from "./pages/FeaturedWorks/FeaturedWorks";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Cart from "./pages/Cart/Cart";
import Success from "./pages/Success/Success";

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
            <Route path="/featured" element={<FeaturedWorks />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/success" element={<Success />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="*" element ={<ErrorPage />} />
            {/* <Route path="/projects/:projectId" element ={<ProjectPage />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App