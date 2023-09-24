import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage";
import NavBarComponent from "../components/NavBar/NavBarComponent";
import ItemDetails from "../pages/ItemDetails"
import Category from "../pages/Category";


const MainRouter = () => {
    return (
      <Router>
          <NavBarComponent />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:categoryId" element={<Category />} />
              <Route path="/item/:itemId" element={<ItemDetails />} />
          </Routes>
      </Router>
    )
  }
  
  export default MainRouter
