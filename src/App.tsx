import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Layout } from '@/layout';
import { Home, Components } from '@/pages';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/components" element={<Components />} />
        </Route>
        
      </Routes>
    </Router>
  )
}

export default App
