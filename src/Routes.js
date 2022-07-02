import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/';
import Pag404    from './pages/pag404';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path='*'  element={<Pag404  />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;