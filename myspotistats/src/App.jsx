import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/Root';
import Home from './pages/Home';
import './assets/fonts/stylesheet.css'
import './index.scss'
import Dashboard from './pages/Dashboard';
import { accessToken, chechkAuthLoader, tokenLoader } from './helpers/spotify';
import Profile from './pages/Profile';
import Artists from './pages/Artists';
import Tracks from './pages/Tracks';
import Playlists from './pages/Playlists';

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
      },
      {
        path: 'profile',
        element: <Profile />,
        loader: chechkAuthLoader
      },
      {
        path: 'artists',
        element: <Artists />,
        loader: chechkAuthLoader
      },
      {
        path: 'tracks',
        element: <Tracks />,
        loader: chechkAuthLoader
      },
      {
        path: 'playlists',
        element: <Playlists />,
        loader: chechkAuthLoader
      }
    ]
  }
])


function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
