import {BrowserRouter, Routes, Route } from 'react-router-dom';

import ActivitiesProvider from './context/'


import Manager from './Home/manager/'
import List    from './Home/list/'
import Pag404    from './Home/pag404/'



function Router() {
  return (
    <ActivitiesProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Manager />} />
                <Route path="/listar" element={<List    />} />
                <Route path='*'  element={<Pag404  />} />
            </Routes>
        </BrowserRouter>
    </ActivitiesProvider>
  );
}

export default Router;