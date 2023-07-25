
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPosts from './pages/AllPosts';
import { routePath } from './routes/route';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home />} />
        <Route path={routePath.posts} element={<AllPosts />} />
        <Route path={routePath.create} element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
