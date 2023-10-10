import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { menuRoutes } from './Routes/menuRoutes.js';
import { NotFound } from './components/page/404NotFound/NotFound';

function App() {
  
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              {menuRoutes.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
