// App.tsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const LowContent = lazy(() => import('./pages/LowContent'));
const HighContent = lazy(() => import('./pages/HighContent'));
const LowInteractivity = lazy(() => import('./pages/LowInteractivity'));
const HighInteractivity = lazy(() => import('./pages/HighInteractivity'));

export default function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/v/low-content">Low Content</Link>
      <Link to="/v/high-content">High Content</Link>
      <Link to="/v/low-interactive">Low Interactivity</Link>
      <Link to="/v/high-interactive">High Interactivity</Link>
    </nav>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/v/low-content" element={<LowContent />} />
          <Route path="/v/high-content" element={<HighContent />} />
            <Route path="/v/low-interactive" element={<LowInteractivity />} />
            <Route path="/v/high-interactive" element={<HighInteractivity />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}