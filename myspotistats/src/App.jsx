import { lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/Root';
import Home from './pages/Home';
import './assets/fonts/stylesheet.css'
import './index.scss'
import { accessToken, chechkAuthLoader, tokenLoader } from './helpers/spotify';


const Dashboard = lazy(() => import('./pages/Dashboard'))
const Profile = lazy(() => import('./pages/Profile'))
const Artists = lazy(() => import('./pages/Artists'))
const Tracks = lazy(() => import('./pages/Tracks'))
const Playlists = lazy(() => import('./pages/Playlists'))

import Loader from './components/Loader';

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
        element: <Suspense fallback={<Loader />}>
          <Dashboard />
        </Suspense>,
        loader: chechkAuthLoader
      },
      {
        path: 'profile',
        element: <Suspense fallback={<Loader/>}>
          <Profile />
        </Suspense>,
        loader: chechkAuthLoader
      },
      {
        path: 'artists',
        element: <Suspense fallback={<Loader/>}>
          <Artists />
        </Suspense>,
        loader: chechkAuthLoader
      },
      {
        path: 'tracks',
        element: <Suspense fallback={<Loader/>}>
          <Tracks />
        </Suspense>,
        loader: chechkAuthLoader
      },
      {
        path: 'playlists',
        element: <Suspense fallback={<Loader/>}>
          <Playlists />
        </Suspense>,
        loader: chechkAuthLoader
      }
    ]
  }
])


function App() {

  return <RouterProvider router={router}/>
  
}

export default App
