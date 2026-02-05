import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

// Import Pages
import Home from './pages/Home';
import Resume from './pages/Resume';
import Philosophy from './pages/Philosophy';
import Credentials from './pages/Credentials';
import Recommendations from './pages/Recommendations';

// Simple 404 Component if you didn't copy the one from the old repo
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4 text-center">
    <h1 className="text-4xl font-bold text-slate-900">404</h1>
    <p className="text-slate-500">Page not found</p>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;