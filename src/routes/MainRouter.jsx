import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage";
import NavBarComponent from "../components/NavBar/NavBarComponent";
import ItemDetails from "../pages/ItemDetails"
import Category from "../pages/Category";
import CartCheckout from "../pages/CartCheckout";
import PageNotFound from "../components/PageNotFound/pageNotFound";
import Footer from "../components/Footer/FooterComponent";


const MainRouter = () => {
    return (
      <Router>
          <NavBarComponent />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:categoryId" element={<Category />} />
              <Route path="/item/:itemId" element={<ItemDetails />} />
              <Route path="/cartcheckout" element={<CartCheckout />} />
              <Route path="/404" element={<PageNotFound />} />
              <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <Footer />
      </Router>
    )
  }
  
  export default MainRouter
