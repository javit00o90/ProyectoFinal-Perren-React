import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage";
import NavBarComponent from "../components/NavBar/NavBarComponent";
import ItemDetails from "../pages/ItemDetails"
import Category from "../pages/Category";
import CartCheckout from "../pages/CartCheckout";
import CartCheckoutStyle from "../pages/CartCheckoutStyle";
import PageNotFound from "../components/PageNotFound/pageNotFound";


const MainRouter = () => {
    return (
      <Router>
          <NavBarComponent />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:categoryId" element={<Category />} />
              <Route path="/item/:itemId" element={<ItemDetails />} />
              <Route path="/cartcheckout" element={<CartCheckout />} />
              <Route path="/cartcheckoutstyle" element={<CartCheckoutStyle />} />
              <Route path="/404" element={<PageNotFound />} />
              <Route path="/*" element={<PageNotFound />} />
          </Routes>
      </Router>
    )
  }
  
  export default MainRouter
