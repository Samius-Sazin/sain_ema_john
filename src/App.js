import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import OrderReview from './Component/OrderReview/OrderReview';
import Inventory from './Component/Inventory/Inventory';
import NotFound from './Component/NotFound/NotFound';
import OrderPlaced from './Component/OrderPlaced/OrderPlaced';
import Register from './Component/Register/Register';
import AuthProvider from './Context/AuthProvider';
import AuthMiddleware from './AuthMiddleware/AuthMiddleware';
import Login from './Component/Login/Login';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/shop' element={<Shop />} />

            <Route path='/review' element={<OrderReview />} />

            <Route element={<AuthMiddleware />}>
              <Route path='/placedorder' element={<OrderPlaced />} />
              <Route path='/inventory' element={<Inventory />} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
