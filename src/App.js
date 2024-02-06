import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import OrderReview from './Component/OrderReview/OrderReview';
import Inventory from './Component/Inventory/Inventory';
import NotFound from './Component/NotFound/NotFound';
import OrderPlaced from './Component/OrderPlaced/OrderPlaced';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        
        <Routes>

          <Route
            path='/'
            element={<Shop />}
          ></Route>

          <Route
            path='/shop'
            element={<Shop />}
          ></Route>

          <Route
            path='/review'
            element={<OrderReview/>}
          ></Route>

          <Route
            path='/inventory'
            element={<Inventory/>}
          ></Route>

          <Route
            path='/placedorder'
            element={<OrderPlaced />}
          ></Route>

          <Route
            path='*'
            element={<NotFound/>}
          ></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
