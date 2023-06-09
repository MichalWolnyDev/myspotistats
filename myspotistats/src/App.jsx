import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/Root';
import Home from './pages/Home';
import './assets/fonts/stylesheet.css'
import './index.scss'
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from 'react';
import { accessToken, chechkAuthLoader, tokenLoader } from './helpers/spotify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    id: 'root',
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: chechkAuthLoader
      }
    ]
  }
])



function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(accessToken)
  }, []);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
