import { Routes, Route } from 'react-router-dom';
import SiteLayout from './pages/SiteLayout';
import SiteHome from './pages/SiteHome';
import SiteKids from './pages/SiteKids';
import SiteApp from './pages/SiteApp';
import SiteContato from './pages/SiteContato';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<SiteHome />} />
        <Route path="kids" element={<SiteKids />} />
        <Route path="app" element={<SiteApp />} />
        <Route path="contato" element={<SiteContato />} />
      </Route>
    </Routes>
  );
}
