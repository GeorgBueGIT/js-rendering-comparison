// App.tsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const SmallStatic = lazy(() => import('./pages/SmallStatic'));
const LargeStatic = lazy(() => import('./pages/LargeStatic'));
const LargeLocal = lazy(() => import('./pages/LargeLocal'));
const LargeGlobal = lazy(() => import('./pages/LargeGlobal'));

export default function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/v/small-static">Small Static</Link>
      <Link to="/v/large-static">Large Static</Link>
      <Link to="/v/large-local">Large Local</Link>
      <Link to="/v/large-global">Large Global</Link>
    </nav>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/v/small-static" element={<SmallStatic />} />
          <Route path="/v/large-static" element={<LargeStatic />} />
          <Route path="/v/large-local" element={<LargeLocal />} />
          <Route path="/v/large-global" element={<LargeGlobal />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}