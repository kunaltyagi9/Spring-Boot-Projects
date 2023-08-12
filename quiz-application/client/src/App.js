import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { routePath } from './constants/route';
import BackgroundCanvas from './components/BackgroundCanvas';
import DataProvider from './context/DataProvider';

const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate replace to={routePath.home} />
}

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BackgroundCanvas>
        <Router>
          <Routes>
            <Route path={routePath.home} element={<Home />} />
            <Route path={routePath.login} element={<Login isUserAuthenticated={isUserAuthenticated} />} />
            <Route path={routePath.quiz} element={<Quiz />} />

            <Route path={routePath.invalid} element={<Navigate replace to={routePath.home} />} />
          </Routes>
        </Router>
      </BackgroundCanvas>
    </DataProvider>
  );
}

export default App;
