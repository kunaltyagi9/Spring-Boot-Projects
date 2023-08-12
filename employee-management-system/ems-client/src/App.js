import { Suspense, lazy } from 'react';
import Dummy from './Dummy';
import SuspenseLoader from './components/common/SuspenseLoader';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import { routes } from './routes/routes';
import ErrorComponent from './components/common/ErrorComponent';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route>
        <Route path={routes.main.path} element={<Navigate to={`${routes.main.path}/${routes.home.path}`} />} />
        <Route path={routes.main.path} element={<routes.main.element />} >
          <Route path={routes.home.path} element={<routes.home.element />} errorElement={<ErrorComponent />} />
          <Route path={routes.addemployee.path} element={<routes.addemployee.element />} errorElement={<ErrorComponent />} />
          <Route path={routes.allemployees.path} element={<routes.allemployees.element />} errorElement={<ErrorComponent />} />
          <Route path={routes.dashboard.path} element={<routes.dashboard.element />} errorElement={<ErrorComponent />} />
        </Route>

        <Route path={routes.invalid.path} element={<Navigate to={`${routes.main.path}/${routes.home.path}`} />} />
      </Route>
    </Route>
  )
)

const App = () => {
  return (
    <Suspense fallback={<SuspenseLoader />} >
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App;