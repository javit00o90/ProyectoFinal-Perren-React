import MainLayout from "./layout/MainLayout";
import MainRouter from "./routes/MainRouter";
import { CartProvider } from './context/CartContext';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <CartProvider>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </CartProvider>
  );
};

export default App;